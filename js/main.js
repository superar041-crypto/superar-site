/* Dados da escola usados no site inteiro e no contrato. Altere aqui. */
window.ESCOLA = {
  nome: "SUPERAR – CURSOS E TREINAMENTOS",
  razaoSocial: "SUPERAR CURSOS & TREINAMENTOS LTDA",
  cnpj: "33.543.032/0001-92",
  endereco: "Rua Bráulio Montenegro, nº 58 – Vila Maria",
  cidade: "Palmeira dos Índios",
  uf: "AL",
  cep: "",
  email: "contato@superar.com",
  whatsapp: "5582981643033",
  whatsappFormatado: "(82) 98164-3033",
  site: "www.superargct.com.br",
  foro: "Comarca de Palmeira dos Índios/AL",
  // Ato regulatório exibido no rodapé de todas as páginas
  ato: { resolucao: "Resolução nº 58/2026 – CEE/AL", publicacao: "D.O.E. de 19 de outubro de 2026 – Página 21" },
  links: {
    biblioteca: "https://bibliotecadigital.intersaberes.com/public/login",
    areaAluno: "https://play.intersaberes.com/superargct/admin/login",
  },
};

window.fmtBRL = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
window.esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

window.cardCurso = (c) => `
  <a class="curso-card" href="curso.html?c=${c.slug}">
    <div class="thumb"><img src="${c.imagem}" alt="" loading="lazy"></div>
    <div class="body">
      <h3>${esc(c.nome)}</h3>
      <div class="meta">
        <span class="tag">${c.cargaHoraria.toLocaleString("pt-BR")}h</span>
        <span class="tag tag-cyan">EAD e aulas presenciais</span>
      </div>
      <p class="muted" style="font-size:.92rem;margin:0">${esc(c.area)}</p>
      <div class="preco">
        <span><small>${c.parcelas}x de</small> <strong>${fmtBRL(c.valorParcela)}</strong></span>
        <span class="ver">Ver curso →</span>
      </div>
    </div>
  </a>`;

(function layout() {
  const E = window.ESCOLA;
  const page = document.body.dataset.page || "";
  const cur = (p) => (p === page ? ' aria-current="page"' : "");

  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <div class="wrap">
      <a class="brand" href="index.html" aria-label="Superar – página inicial">
        <img src="assets/logo-mark.svg" alt="">
        <span>SUPERAR<small>Cursos &amp; Treinamentos</small></span>
      </a>
      <button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
      </button>
      <nav class="nav" aria-label="Principal">
        <div class="links">
          <a href="index.html"${cur("home")}>Início</a>
          <a href="cursos.html"${cur("cursos")}>Cursos técnicos</a>
          <a href="${E.links.biblioteca}" target="_blank" rel="noopener">Biblioteca online</a>
        </div>
        <div class="acoes">
          <a class="btn-glass" href="${E.links.areaAluno}" target="_blank" rel="noopener">Área do aluno</a>
          <a class="btn-glass forte" href="inscricao.html">Inscreva-se</a>
        </div>
      </nav>
    </div>`;
  document.body.prepend(header);

  // Barra de aviso no topo (fechável; lembra a escolha neste navegador)
  let barraFechada = false;
  try { barraFechada = localStorage.getItem("superar-barra") === "fechada"; } catch (_) {}
  if (barraFechada) document.body.classList.add("sem-barra");
  const barra = document.createElement("div");
  barra.className = "topbar";
  barra.innerHTML = `
    <span class="novo">Novo</span>
    <span><strong>Matrículas abertas:</strong><span class="txt-longo"> matrícula e inscrição 100% online.</span></span>
    <a class="btn-bar" href="inscricao.html">Fazer inscrição →</a>
    <button class="fechar" aria-label="Fechar aviso">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
    </button>`;
  document.body.prepend(barra);
  barra.querySelector(".fechar").addEventListener("click", () => {
    document.body.classList.add("sem-barra");
    try { localStorage.setItem("superar-barra", "fechada"); } catch (_) {}
  });

  // Menu fica sólido depois de rolar a página
  const aoRolar = () => header.classList.toggle("rolou", window.scrollY > 24);
  window.addEventListener("scroll", aoRolar, { passive: true });
  aoRolar();
  const tgl = header.querySelector(".menu-toggle");
  const nav = header.querySelector(".nav");
  tgl.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    tgl.setAttribute("aria-expanded", open);
  });

  // Rodapé: Decreto 7.962/2013, art. 2º, I e II – nome empresarial, CNPJ, endereço físico e eletrônico.
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="wrap">
      <div class="cols">
        <div>
          <a class="brand" href="index.html"><img src="assets/logo.svg" alt="Superar"></a>
          <p style="margin-top:16px">Educação que transforma vidas. Cursos técnicos com aulas EAD e aulas presenciais em Palmeira dos Índios – AL.</p>
        </div>
        <div>
          <h4>Navegação</h4>
          <ul>
            <li><a href="index.html">Início</a></li>
            <li><a href="cursos.html">Cursos técnicos</a></li>
            <li><a href="inscricao.html">Inscrição</a></li>
            <li><a href="privacidade.html">Política de privacidade</a></li>
            <li><a href="docs/regulamento-trancamento.pdf" target="_blank">Regulamento de trancamento</a></li>
          </ul>
        </div>
        <div>
          <h4>Aluno</h4>
          <ul>
            <li><a href="${E.links.areaAluno}" target="_blank" rel="noopener">Área do aluno</a></li>
            <li><a href="${E.links.biblioteca}" target="_blank" rel="noopener">Biblioteca online</a></li>
          </ul>
        </div>
        <div>
          <h4>Contato</h4>
          <ul>
            <li><a href="https://wa.me/${E.whatsapp}" target="_blank" rel="noopener">WhatsApp ${E.whatsappFormatado}</a></li>
            <li><a href="mailto:${E.email}">${E.email}</a></li>
            <li>${E.endereco}<br>${E.cidade} – ${E.uf}</li>
          </ul>
        </div>
      </div>
      <div class="legal-line">
        <span>${E.razaoSocial} · CNPJ ${E.cnpj}<span class="ato-legal">${E.ato.resolucao} · ${E.ato.publicacao}</span></span>
        <span>© ${new Date().getFullYear()} Superar. Todos os direitos reservados.</span>
      </div>
    </div>`;
  document.body.append(footer);

  const wa = document.createElement("a");
  wa.className = "whats-float";
  wa.href = `https://wa.me/${E.whatsapp}`;
  wa.target = "_blank";
  wa.rel = "noopener";
  wa.setAttribute("aria-label", "Falar no WhatsApp");
  wa.innerHTML = `<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 0 1-1.44-5.01c0-5.19 4.23-9.42 9.43-9.42 2.52 0 4.88.98 6.66 2.76a9.36 9.36 0 0 1 2.76 6.67c0 5.2-4.23 9.42-9.43 9.42zm8.02-17.45A11.3 11.3 0 0 0 12.04.75C5.8.75.72 5.83.72 12.08c0 2 .52 3.95 1.51 5.67L.63 23.25l5.64-1.48a11.3 11.3 0 0 0 5.77 1.47h.01c6.24 0 11.32-5.08 11.33-11.33 0-3.03-1.18-5.87-3.32-8.01z"/></svg>`;
  document.body.append(wa);
})();

/* Transição entre páginas com a logo (estilos no fim de css/style.css) */
(function transicao() {
  const raiz = document.documentElement;
  const mostrar = () => requestAnimationFrame(() => raiz.classList.add("pronto"));
  // Espera as fontes (no máximo 600 ms) para não mostrar o texto trocando de fonte
  const fontes = document.fonts ? Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 600))]) : Promise.resolve();
  fontes.then(() => setTimeout(mostrar, 250));

  // Voltar/avançar no navegador: a página volta do cache com a cortina fechada
  window.addEventListener("pageshow", (e) => { if (e.persisted) raiz.classList.remove("saindo"); });

  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href]");
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (a.target === "_blank" || a.hasAttribute("download")) return;
    const url = new URL(a.href, location.href);
    if (url.protocol !== location.protocol || url.origin !== location.origin || !/^(https?|file):$/.test(url.protocol)) return;
    if (/\.(pdf|zip|png|jpe?g)$/i.test(url.pathname)) return;
    if (url.pathname === location.pathname && url.search === location.search && url.hash) return; // âncora na mesma página
    e.preventDefault();
    raiz.classList.add("saindo");
    setTimeout(() => (location.href = url.href), 320);
  });
})();
