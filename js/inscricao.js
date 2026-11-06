/* Ficha de inscrição: etapas, validação, contrato, assinatura, PDF e envio. */
(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const form = $("#form");
  const API = "api/enviar.php";
  let etapa = 1;
  let pdfBlob = null;
  let pdfNome = "contrato-superar.pdf";
  const evid = { inicio: new Date().toISOString() }; // momentos registrados para o Registro de Assinatura

  /* ---------- Curso ---------- */
  const selCurso = $("#curso");
  selCurso.innerHTML = '<option value="">Selecione o curso</option>' +
    [...new Set(CURSOS.map((c) => c.area))].map((a) =>
      `<optgroup label="${esc(a)}">${CURSOS.filter((c) => c.area === a).map((c) => `<option value="${c.slug}">${esc(c.nome)}</option>`).join("")}</optgroup>`
    ).join("");
  const pre = new URLSearchParams(location.search).get("curso");
  if (pre && CURSOS.some((c) => c.slug === pre)) selCurso.value = pre;
  const cursoAtual = () => CURSOS.find((c) => c.slug === selCurso.value);
  function mostrarCurso() {
    const c = cursoAtual();
    const box = $("#resumoCurso");
    box.hidden = !c;
    if (!c) return;
    box.innerHTML = `<img src="${c.imagem}" alt="">
      <div><strong>${esc(c.nome)}</strong><br>
      <span class="muted">${c.cargaHoraria.toLocaleString("pt-BR")} horas · EAD e aulas presenciais</span><br>
      <span><b>${c.parcelas}x de ${fmtBRL(c.valorParcela)}</b> <span class="muted">(total ${fmtBRL(c.parcelas * c.valorParcela)})</span></span></div>`;
  }
  selCurso.addEventListener("change", mostrarCurso);
  mostrarCurso();

  /* ---------- Listas de UF ---------- */
  const UFS = "AC AL AP AM BA CE DF ES GO MA MT MS MG PA PB PR PE PI RJ RN RS RO RR SC SP SE TO".split(" ");
  $$("select[data-uf]").forEach((s) => (s.innerHTML = '<option value="">UF</option>' + UFS.map((u) => `<option>${u}</option>`).join("")));

  /* ---------- Máscaras ---------- */
  const so = (v) => v.replace(/\D/g, "");
  const masks = {
    cpf: (v) => so(v).slice(0, 11).replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})$/, "$1-$2"),
    cep: (v) => so(v).slice(0, 8).replace(/(\d{5})(\d)/, "$1-$2"),
    tel: (v) => {
      const d = so(v).slice(0, 11);
      if (d.length <= 10) return d.replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{4})(\d)/, "$1-$2");
      return d.replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2");
    },
  };
  $$("[data-mask]").forEach((i) => i.addEventListener("input", () => (i.value = masks[i.dataset.mask](i.value))));
  $("#a_anoConclusao").addEventListener("input", (e) => (e.target.value = so(e.target.value).slice(0, 4)));

  function cpfValido(v) {
    const c = so(v);
    if (c.length !== 11 || /^(\d)\1+$/.test(c)) return false;
    for (let t = 9; t < 11; t++) {
      let s = 0;
      for (let i = 0; i < t; i++) s += +c[i] * (t + 1 - i);
      if (((s * 10) % 11) % 10 !== +c[t]) return false;
    }
    return true;
  }
  const idade = (iso) => {
    if (!iso) return NaN;
    const n = new Date(iso + "T12:00:00");
    const h = new Date();
    let a = h.getFullYear() - n.getFullYear();
    if (h.getMonth() < n.getMonth() || (h.getMonth() === n.getMonth() && h.getDate() < n.getDate())) a--;
    return a;
  };

  /* ---------- CEP (ViaCEP) ---------- */
  function ligarCep(prefixo) {
    const cep = $(`#${prefixo}_cep`);
    cep.addEventListener("input", async () => {
      const d = so(cep.value);
      if (d.length !== 8) return;
      try {
        const r = await fetch(`https://viacep.com.br/ws/${d}/json/`).then((x) => x.json());
        if (r.erro) return;
        const set = (id, v) => {
          const el = $(`#${prefixo}_${id}`);
          if (!el || !v || (el.value && el.dataset.auto !== el.value)) return; // não apaga o que a pessoa digitou
          el.value = v; el.dataset.auto = v; el.closest(".f")?.classList.remove("invalid");
        };
        set("logradouro", r.logradouro); set("bairro", r.bairro); set("cidade", r.localidade); set("uf", r.uf);
        $(`#${prefixo}_numero`).focus();
      } catch (_) { /* sem internet: preenchimento manual */ }
    });
  }
  ligarCep("a");
  ligarCep("r");

  /* ---------- Menor de idade ---------- */
  const nasc = $("#a_nascimento");
  const ehMenor = () => { const i = idade(nasc.value); return !isNaN(i) && i < 18; };
  function atualizarResp() {
    $("#blocoResp").hidden = !ehMenor();
    $("#respEndereco").hidden = !ehMenor() || $("#r_mesmoEndereco").checked;
  }
  nasc.addEventListener("change", atualizarResp);
  $("#r_mesmoEndereco").addEventListener("change", atualizarResp);

  /* ---------- Validação ---------- */
  function validarCampo(el) {
    const f = el.closest(".f");
    if (!f || el.closest("[hidden]")) return true;
    let ok = el.checkValidity() && el.value.trim() !== "" || (!el.required && el.value.trim() === "");
    if (ok && el.dataset.mask === "cpf") ok = cpfValido(el.value);
    if (ok && el.dataset.mask === "cep") ok = so(el.value).length === 8;
    if (ok && el.dataset.mask === "tel") ok = so(el.value).length >= 10;
    if (ok && el.id === "a_nascimento") { const i = idade(el.value); ok = i >= 10 && i < 110; }
    if (ok && el.id === "r_nascimento") ok = idade(el.value) >= 18;
    if (ok && el.id === "a_rgData") {
      const d = new Date(el.value + "T12:00:00"), n = new Date($("#a_nascimento").value + "T12:00:00");
      ok = d <= new Date() && (isNaN(n) || d >= n);
    }
    if (ok && el.id === "a_anoConclusao") {
      const a = +el.value, hoje = new Date().getFullYear();
      ok = /^\d{4}$/.test(el.value) && a >= 1950 && a <= hoje; // só quem já concluiu
    }
    if (ok && el.id === "a_uf" || ok && el.id === "r_uf") ok = /^[A-Za-z]{2}$/.test(el.value.trim());
    if (ok && el.id === "r_cpf") ok = so(el.value) !== so($("#a_cpf").value);
    if (ok && el.id === "nomeAssinatura") ok = normNome(el.value) === normNome(assinante().nome);
    f.classList.toggle("invalid", !ok);
    return ok;
  }
  $$("input, select", form).forEach((el) => {
    el.addEventListener("blur", () => el.value && validarCampo(el));
    el.addEventListener("change", () => el.closest(".f")?.classList.contains("invalid") && validarCampo(el));
  });
  const normNome = (s) => (s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, " ").trim().toLowerCase();

  function validarEtapa(n) {
    const sec = $(`.step[data-step="${n}"]`);
    const campos = $$("input[required], select[required]", sec).filter((el) => !el.closest("[hidden]"));
    const ruins = campos.filter((el) => !validarCampo(el));
    if (n === 3) {
      ["ck_contrato", "ck_dados"].forEach((id) => {
        const ck = $("#" + id);
        ck.closest(".check").classList.toggle("invalid", !ck.checked);
        if (!ck.checked) ruins.push(ck);
      });
    }
    if (n === 4 && !assinatura.temTraco()) {
      $("#assArea").style.borderColor = "var(--err)";
      ruins.push($("#assCanvas"));
    }
    if (ruins.length) { ruins[0].scrollIntoView({ behavior: "smooth", block: "center" }); ruins[0].focus?.({ preventScroll: true }); }
    return ruins.length === 0;
  }

  /* ---------- Coleta dos dados ---------- */
  function grupo(prefixo) {
    const o = {};
    $$(`[id^="${prefixo}_"]`).forEach((el) => { if (el.type !== "checkbox") o[el.id.slice(2)] = el.value.trim(); });
    if (o.uf) o.uf = o.uf.toUpperCase();
    return o;
  }
  function dados() {
    const aluno = grupo("a");
    aluno.primeiroNome = aluno.nome;
    aluno.nome = `${aluno.nome} ${aluno.sobrenome}`.replace(/\s+/g, " ").trim();
    let responsavel = null;
    if (ehMenor()) {
      responsavel = grupo("r");
      if ($("#r_mesmoEndereco").checked) {
        ["cep", "logradouro", "numero", "complemento", "bairro", "cidade", "uf"].forEach((k) => (responsavel[k] = aluno[k]));
      }
    }
    return {
      curso: cursoAtual(),
      polo: $("#polo").value,
      pagamento: { forma: $("#forma").value, vencimento: $("#vencimento").value },
      aluno, responsavel, idadeAluno: idade(aluno.nascimento),
      imagem: ($('input[name="imagem"]:checked') || {}).value || "",
    };
  }
  const assinante = () => { const d = dados(); return d.responsavel || d.aluno; };

  /* ---------- Etapas ---------- */
  function irPara(n) {
    etapa = n;
    $$(".step").forEach((s) => (s.hidden = +s.dataset.step !== n));
    $$("#steps li").forEach((li, i) => { li.classList.toggle("active", i + 1 === n); li.classList.toggle("done", i + 1 < n); });
    if (n === 3) montarContrato();
    if (n === 4) prepararAssinatura();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  form.addEventListener("click", (e) => {
    if (e.target.closest("[data-next]") && validarEtapa(etapa)) irPara(etapa + 1);
    if (e.target.closest("[data-prev]")) irPara(etapa - 1);
    const g = e.target.closest("[data-goto]");
    if (g) irPara(+g.dataset.goto);
  });

  /* ---------- Contrato (etapa 3) ---------- */
  let textoMontado = "";
  function montarContrato() {
    const d = dados();
    const html = contratoHTML(gerarContrato({ ...d, imagem: "" }));
    $("#imagemResp").hidden = !d.responsavel;
    const box = $("#contratoBox");
    // Se os dados mudaram, o aceite anterior deixa de valer.
    if (html !== textoMontado) {
      textoMontado = html;
      box.innerHTML = html;
      box.scrollTop = 0;
      ["ck_contrato", "ck_dados"].forEach((id) => ($("#" + id).checked = false));
      $("#ck_contrato").disabled = true;
      const st = $("#leituraStatus");
      st.classList.remove("ok");
      st.textContent = "Role o contrato até o final para liberar o aceite.";
      delete evid.leituraConcluida;
    }
    const linhaImg = $("#contratoEscolha");
    if (linhaImg) linhaImg.textContent = textoEscolhaImagem(d.imagem);
  }
  $$('input[name="imagem"]').forEach((r) => r.addEventListener("change", () => {
    evid.imagem = { escolha: r.value, em: new Date().toISOString() };
    $("#contratoEscolha").textContent = textoEscolhaImagem(r.value);
  }));
  $("#contratoBox").addEventListener("scroll", (e) => {
    const b = e.target;
    if (b.scrollTop + b.clientHeight >= b.scrollHeight - 24 && $("#ck_contrato").disabled) {
      $("#ck_contrato").disabled = false;
      evid.leituraConcluida = new Date().toISOString();
      const st = $("#leituraStatus");
      st.classList.add("ok");
      st.textContent = "✓ Contrato lido até o final.";
    }
  });
  ["ck_contrato", "ck_dados"].forEach((id) =>
    $("#" + id).addEventListener("change", (e) => {
      if (e.target.checked) evid["aceite_" + id.slice(3)] = new Date().toISOString();
      e.target.closest(".check").classList.remove("invalid");
    })
  );

  /* ---------- Assinatura (etapa 4) ---------- */
  const assinatura = (function () {
    const cv = $("#assCanvas");
    const ctx = cv.getContext("2d");
    let tracos = 0, desenhando = false, ultimo = null;
    function ajustar() {
      const r = cv.getBoundingClientRect();
      if (!r.width) return;
      const dpr = Math.max(window.devicePixelRatio || 1, 2);
      const img = tracos ? cv.toDataURL() : null;
      cv.width = r.width * dpr; cv.height = r.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.lineCap = "round"; ctx.lineJoin = "round"; ctx.strokeStyle = "#0b1f45"; ctx.lineWidth = 2.4;
      if (img) { const i = new Image(); i.onload = () => ctx.drawImage(i, 0, 0, r.width, r.height); i.src = img; }
    }
    const pos = (e) => { const r = cv.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
    cv.addEventListener("pointerdown", (e) => {
      desenhando = true; ultimo = pos(e); cv.setPointerCapture(e.pointerId);
      ctx.beginPath(); ctx.arc(ultimo.x, ultimo.y, 1.1, 0, Math.PI * 2); ctx.fillStyle = "#0b1f45"; ctx.fill();
      $("#assPlaceholder").hidden = true; $("#assArea").style.borderColor = "";
    });
    cv.addEventListener("pointermove", (e) => {
      if (!desenhando) return;
      const p = pos(e);
      ctx.beginPath(); ctx.moveTo(ultimo.x, ultimo.y); ctx.lineTo(p.x, p.y); ctx.stroke();
      ultimo = p;
    });
    const fim = () => { if (desenhando) { desenhando = false; tracos++; evid.assinaturaDesenhada = new Date().toISOString(); } };
    cv.addEventListener("pointerup", fim);
    cv.addEventListener("pointercancel", fim);
    $("#assLimpar").addEventListener("click", () => { ctx.clearRect(0, 0, cv.width, cv.height); tracos = 0; $("#assPlaceholder").hidden = false; });
    window.addEventListener("resize", ajustar);
    // PNG recortado no tamanho do traço, com fundo transparente
    function png() {
      const w = cv.width, h = cv.height, data = ctx.getImageData(0, 0, w, h).data;
      let x0 = w, y0 = h, x1 = 0, y1 = 0;
      for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (data[(y * w + x) * 4 + 3] > 10) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
      const pad = 12, out = document.createElement("canvas");
      out.width = x1 - x0 + pad * 2; out.height = y1 - y0 + pad * 2;
      out.getContext("2d").drawImage(cv, x0 - pad, y0 - pad, out.width, out.height, 0, 0, out.width, out.height);
      return { url: out.toDataURL("image/png"), w: out.width, h: out.height };
    }
    return { ajustar, temTraco: () => tracos > 0, png };
  })();

  function prepararAssinatura() {
    const d = dados();
    const s = d.responsavel || d.aluno;
    $("#assinanteInfo").innerHTML = d.responsavel
      ? `Assinatura do responsável legal: <strong>${esc(s.nome)}</strong> (CPF ${esc(s.cpf)}), em nome do(a) aluno(a) ${esc(d.aluno.nome)}.`
      : `Assinatura de <strong>${esc(s.nome)}</strong> (CPF ${esc(s.cpf)}).`;
    requestAnimationFrame(assinatura.ajustar);
  }

  /* ---------- Utilidades de envio ---------- */
  async function sha256(txt) {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(txt));
    return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  function logoPNG() {
    return new Promise((res) => {
      const i = new Image();
      i.onload = () => {
        const c = document.createElement("canvas");
        c.width = 566; c.height = 486;
        c.getContext("2d").drawImage(i, 0, 0, c.width, c.height);
        try { res(c.toDataURL("image/png")); } catch (_) { res(null); } // aberto como arquivo local: PDF sai sem a logo
      };
      i.onerror = () => res(null);
      i.src = "assets/logo.svg";
    });
  }
  const fmtData = (iso) => new Date(iso).toLocaleString("pt-BR", { timeZone: "America/Maceio", dateStyle: "short", timeStyle: "medium" }) + " (horário de Brasília)";

  /* ---------- PDF ---------- */
  async function gerarPDF(blocos, info) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: "mm", format: "a4", compress: true });
    const W = 210, H = 297, M = 20, CW = W - M * 2;
    const FS = 12, LH = 5.6; // corpo 12 (CDC, art. 54, §3º)
    const E = ESCOLA;
    const logo = await logoPNG();
    let y = 0;

    function cabecalho() {
      doc.setFillColor(11, 42, 91); doc.rect(0, 0, W, 30, "F");
      doc.setFillColor(25, 167, 224); doc.rect(0, 30, W, 1.2, "F");
      if (logo) doc.addImage(logo, "PNG", M, 5, 23, 19.7, "logo", "FAST");
      doc.setTextColor(255, 255, 255);
      doc.setFont("helvetica", "bold"); doc.setFontSize(11);
      doc.text(E.nome, W - M, 11, { align: "right" });
      doc.setFont("helvetica", "normal"); doc.setFontSize(8.5);
      doc.text(`${E.endereco} · ${E.cidade} – ${E.uf}`, W - M, 16, { align: "right" });
      doc.text(`CNPJ ${E.cnpj} · ${E.email}`, W - M, 20.5, { align: "right" });
      doc.setTextColor(30, 42, 61);
      y = 42;
    }
    function novaPagina() { doc.addPage(); cabecalho(); }
    function garantir(h) { if (y + h > H - 22) novaPagina(); }
    function paragrafo(txt, { bold = false, size = FS, indent = 0, bullet = false, fundo = false, align = "left" } = {}) {
      doc.setFont("helvetica", bold ? "bold" : "normal"); doc.setFontSize(size);
      const lh = size * 0.47;
      const largura = CW - indent - (fundo ? 8 : 0);
      const linhas = doc.splitTextToSize(txt, largura);
      linhas.forEach((ln, i) => {
        garantir(lh + (fundo ? 2 : 0));
        doc.setFont("helvetica", bold ? "bold" : "normal"); doc.setFontSize(size); doc.setTextColor(30, 42, 61);
        if (fundo) { doc.setFillColor(255, 244, 214); doc.rect(M, y - lh + 1, CW, lh + 0.6, "F"); doc.setFillColor(226, 164, 0); doc.rect(M, y - lh + 1, 1.2, lh + 0.6, "F"); }
        if (bullet && i === 0) doc.text("•", M + indent - 4, y);
        const x = align === "center" ? W / 2 : M + indent + (fundo ? 4 : 0);
        doc.text(ln, x, y, { align });
        y += lh;
      });
      y += fundo ? 3 : 2;
    }

    cabecalho();
    // Texto justificado, como no documento original
    function justificado(txt, { bold = false, size = FS } = {}) {
      doc.setFont("helvetica", bold ? "bold" : "normal"); doc.setFontSize(size);
      const lh = size * 0.47;
      const linhas = doc.splitTextToSize(txt, CW);
      linhas.forEach((ln, i) => {
        garantir(lh);
        doc.setFont("helvetica", bold ? "bold" : "normal"); doc.setFontSize(size); doc.setTextColor(30, 42, 61);
        // Justifica com o espaçamento entre palavras do próprio PDF (a linha continua um texto só, com espaços reais)
        if (i < linhas.length - 1 && ln.trim().includes(" ")) doc.text([ln.trim(), ""], M, y, { maxWidth: CW, align: "justify" });
        else doc.text(ln, M, y);
        y += lh;
      });
      y += 2;
    }
    function tabela(linhas) {
      const LW = 58, VW = CW - LW - 6, fs = 10, lh = 4.6;
      doc.setDrawColor(200, 210, 225);
      for (const [k, v] of linhas) {
        doc.setFont("helvetica", "bold"); doc.setFontSize(fs);
        const kl = doc.splitTextToSize(k, LW - 4);
        doc.setFont("helvetica", "normal");
        const vl = doc.splitTextToSize(String(v), VW - 2);
        const h = Math.max(kl.length, vl.length) * lh + 4;
        garantir(h + 1);
        doc.setFontSize(fs); doc.setDrawColor(200, 210, 225);
        doc.setFillColor(241, 245, 251); doc.rect(M, y, LW, h, "F");
        doc.rect(M, y, CW, h); doc.line(M + LW, y, M + LW, y + h);
        doc.setTextColor(30, 42, 61);
        doc.setFont("helvetica", "bold"); doc.text(kl, M + 2, y + 4.4);
        doc.setFont("helvetica", "normal"); doc.text(vl, M + LW + 3, y + 4.4);
        y += h;
      }
      y += 4;
    }
    function assinaturas(slots) {
      const GW = (CW - 10) / 2, GH = 40;
      for (let i = 0; i < slots.length; i += 2) {
        garantir(GH + 4);
        [slots[i], slots[i + 1]].forEach((s, k) => {
          if (!s) return;
          const x = M + k * (GW + 10), cx = x + GW / 2;
          if (s.assina && info.assinatura) {
            const a = info.assinatura, kk = Math.min(60 / a.w, 18 / a.h);
            doc.addImage(a.url, "PNG", cx - (a.w * kk) / 2, y + 18 - a.h * kk, a.w * kk, a.h * kk, "assinatura", "FAST");
          }
          doc.setDrawColor(120); doc.line(x + 4, y + 20, x + GW - 4, y + 20);
          doc.setTextColor(30, 42, 61);
          doc.setFont("helvetica", "bold"); doc.setFontSize(8.5);
          doc.text(s.rotulo, cx, y + 24.5, { align: "center" });
          doc.setFont("helvetica", "normal"); doc.setFontSize(8.5);
          let yy = y + 29;
          doc.splitTextToSize(s.nome, GW - 4).forEach((ln) => { doc.text(ln, cx, yy, { align: "center" }); yy += 3.8; });
          if (s.obs) { doc.setFontSize(7.5); doc.setTextColor(100, 112, 130); doc.text(s.obs, cx, yy, { align: "center" }); }
        });
        y += GH + 4;
      }
    }

    cabecalho();
    for (const b of blocos) {
      if (b.t === "titulo") { garantir(16); paragrafo(b.x, { bold: true, size: 13, align: "center" }); }
      else if (b.t === "subtitulo") { paragrafo(b.x, { bold: true, size: 11, align: "center" }); y += 3; }
      else if (b.t === "h") { y += 3; garantir(16); paragrafo(b.x, { bold: true, size: 11.5 }); }
      else if (b.t === "p") justificado(b.x);
      else if (b.t === "escolha") { garantir(8); paragrafo(textoEscolhaImagem(b.valor), { bold: true, size: 11 }); }
      else if (b.t === "local") { y += 2; paragrafo(b.x, { align: "center" }); }
      else if (b.t === "quebra") novaPagina();
      else if (b.t === "secao") { y += 2; garantir(14); paragrafo(b.x, { bold: true, size: 11 }); }
      else if (b.t === "tabela") tabela(b.linhas);
      else if (b.t === "assinaturas") { y += 4; assinaturas(b.slots); }
    }

    // Registro de assinatura eletrônica (evidências)
    novaPagina();
    paragrafo("REGISTRO DE ASSINATURA ELETRÔNICA", { bold: true, size: 14, align: "center" });
    paragrafo("MP nº 2.200-2/2001, art. 10, §2º · Lei nº 14.063/2020, art. 4º", { size: 9, align: "center" });
    y += 4;
    const linhas = [
      ["Protocolo", info.protocolo],
      ["Documento", "Contrato de Prestação de Serviços Educacionais – " + info.curso],
      ["Signatário", `${info.signatario.nome} – CPF ${info.signatario.cpf}`],
      ["Qualidade", info.signatario.qualidade],
      ["E-mail", info.signatario.email],
      ["Data e hora da assinatura", fmtData(info.dataHora)],
      ["Endereço IP", info.ip],
      ["Dispositivo / navegador", navigator.userAgent],
      ["Início do preenchimento", fmtData(evid.inicio)],
      ["Leitura do contrato até o final", evid.leituraConcluida ? fmtData(evid.leituraConcluida) : "—"],
      ["Aceite do contrato", evid.aceite_contrato ? fmtData(evid.aceite_contrato) : "—"],
      ["Uso de imagem (facultativo)", evid.imagem ? `${evid.imagem.escolha === "autorizo" ? "Autorizo" : "Não autorizo"} – ${fmtData(evid.imagem.em)}` : "Não marcado (vale como não autorização)"],
      ["Declaração de veracidade", evid.aceite_dados ? fmtData(evid.aceite_dados) : "—"],
      ["Hash SHA-256 do contrato", info.hash],
    ];
    for (const [k, v] of linhas) {
      doc.setFont("helvetica", "bold"); doc.setFontSize(9.5);
      const vl = doc.splitTextToSize(String(v), CW - 62);
      garantir(vl.length * 4.6 + 3);
      doc.text(k, M, y);
      doc.setFont("helvetica", "normal");
      doc.text(vl, M + 62, y);
      y += vl.length * 4.6 + 2.4;
      doc.setDrawColor(223, 230, 240); doc.line(M, y - 1.6, W - M, y - 1.6);
    }
    y += 6;
    paragrafo("Assinatura manuscrita digital:", { bold: true, size: 10 });
    if (info.assinatura) {
      const s = info.assinatura, k = Math.min(80 / s.w, 28 / s.h);
      garantir(32);
      doc.addImage(s.url, "PNG", M, y, s.w * k, s.h * k, "assinatura", "FAST");
      y += s.h * k + 6;
    }
    paragrafo("O hash SHA-256 acima permite verificar que o texto do contrato não foi alterado após a assinatura. " +
      "O signatário declarou ter lido o contrato integralmente e digitou o próprio nome completo antes de assinar.", { size: 9 });

    // Rodapé com numeração
    const n = doc.getNumberOfPages();
    for (let i = 1; i <= n; i++) {
      doc.setPage(i);
      doc.setFont("helvetica", "normal"); doc.setFontSize(8); doc.setTextColor(110, 120, 135);
      doc.text(`Protocolo ${info.protocolo}`, M, H - 10);
      doc.text(`Página ${i} de ${n}`, W - M, H - 10, { align: "right" });
    }
    return doc.output("blob");
  }

  /* ---------- Envio ---------- */
  function setEnviando(on) {
    const b = $("#btnEnviar");
    b.disabled = on;
    b.innerHTML = on ? '<span class="spinner"></span> Enviando…' : "Assinar e enviar";
  }
  function erro(msg) { const e = $("#erroEnvio"); e.innerHTML = msg; e.hidden = !msg; }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    erro("");
    if (!validarEtapa(4)) return;
    if (form.website.value) return; // robô
    setEnviando(true);
    try {
      const d = dados();
      const s = d.responsavel || d.aluno;

      // 1) O servidor gera protocolo, data/hora e registra o IP
      let ini, modoTeste = false;
      try {
        const r = await fetch(API + "?acao=iniciar", { method: "POST" });
        if (!r.ok) throw new Error("HTTP " + r.status);
        ini = await r.json();
      } catch (err) {
        // Sem PHP (computador, arquivo local ou versão de avaliação): gera o PDF sem enviar e-mail.
        // No domínio oficial, uma falha de envio continua aparecendo como erro.
        const oficial = /(^|\.)superargct\.com\.br$/.test(location.hostname);
        if (oficial) throw err;
        modoTeste = true; // pré-visualização local, sem PHP
        ini = { protocolo: "TESTE-" + Date.now().toString(36).toUpperCase(), dataHora: new Date().toISOString(), ip: "(teste local)", token: "" };
      }

      // 2) Contrato final, hash e PDF
      const blocos = gerarContrato({ ...d, protocolo: ini.protocolo, dataAssinatura: ini.dataHora });
      const texto = contratoTexto(blocos);
      const hash = await sha256(texto);
      const ass = assinatura.png();
      pdfBlob = await gerarPDF(blocos, {
        protocolo: ini.protocolo, dataHora: ini.dataHora, ip: ini.ip, hash, assinatura: ass, curso: d.curso.nome,
        signatario: { nome: s.nome, cpf: s.cpf, email: s.email, qualidade: d.responsavel ? `Responsável legal (${s.parentesco}) do(a) aluno(a) ${d.aluno.nome}` : "Contratante / aluno(a)" },
      });
      pdfNome = `contrato-superar-${ini.protocolo}.pdf`;

      // 3) Envio para o servidor (que manda os e-mails)
      if (!modoTeste) {
        const fd = new FormData();
        fd.append("token", ini.token);
        fd.append("protocolo", ini.protocolo);
        fd.append("dataHora", ini.dataHora);
        fd.append("ip", ini.ip);
        fd.append("dados", JSON.stringify({ ...d, polo: d.polo, curso: { slug: d.curso.slug, nome: d.curso.nome, cargaHoraria: d.curso.cargaHoraria, parcelas: d.curso.parcelas, valorParcela: d.curso.valorParcela } }));
        fd.append("evidencias", JSON.stringify({ ...evid, userAgent: navigator.userAgent, idioma: navigator.language, fusoHorario: Intl.DateTimeFormat().resolvedOptions().timeZone, tela: `${screen.width}x${screen.height}` }));
        fd.append("contratoTexto", texto);
        fd.append("hashContrato", hash);
        fd.append("assinatura", ass.url);
        fd.append("pdf", pdfBlob, pdfNome);
        fd.append("website", form.website.value);
        const r = await fetch(API + "?acao=enviar", { method: "POST", body: fd });
        const j = await r.json().catch(() => ({}));
        if (!r.ok || !j.ok) throw new Error(j.erro || "Falha no envio (HTTP " + r.status + ")");
      }

      // 4) Sucesso
      form.hidden = true;
      $("#steps").hidden = true;
      $("#sucesso").hidden = false;
      $("#protocoloFinal").textContent = ini.protocolo;
      if (modoTeste) $("#msgSucesso").innerHTML = "<strong>Versão de demonstração:</strong> o contrato em PDF foi gerado e pode ser baixado abaixo, mas nenhum e-mail foi enviado. O envio por e-mail funciona quando o site estiver publicado na hospedagem.";
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error(err);
      erro(`Não foi possível concluir o envio. Verifique sua conexão e tente de novo. Se o problema continuar, fale com a gente pelo <a href="https://wa.me/${ESCOLA.whatsapp}" target="_blank">WhatsApp</a>.<br><small>${esc(err.message)}</small>`);
    } finally {
      setEnviando(false);
    }
  });

  $("#btnBaixar").addEventListener("click", () => {
    if (!pdfBlob) return;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(pdfBlob);
    a.download = pdfNome;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 5000);
  });
})();
