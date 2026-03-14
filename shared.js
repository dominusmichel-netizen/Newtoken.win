// Navegação e rodapé compartilhados — NewToken
// Incluído via <script src="shared.js"></script> em cada página

(function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  function isActive(page) {
    return currentPage === page ? 'active' : '';
  }

  const navHTML = `
    <nav class="nav" role="navigation" aria-label="Navegação principal">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo" aria-label="NewToken início">
          <img src="logo-dark.png" alt="NewToken — Tecnologia e Automação com IA" class="nav-logo-img">
        </a>
        <ul class="nav-links" role="list">
          <li><a href="platform.html" class="${isActive('platform.html')}">Plataforma</a></li>
          <li><a href="developers.html" class="${isActive('developers.html')}">Desenvolvedores</a></li>
          <li><a href="security.html" class="${isActive('security.html')}">Segurança</a></li>
          <li><a href="contact.html" class="${isActive('contact.html')}">Contato</a></li>
        </ul>
        <div class="nav-cta">
          <a href="contact.html" class="btn-ghost">Falar com Vendas</a>
          <a href="developers.html" class="btn-primary">Começar Agora</a>
        </div>
        <button class="nav-hamburger" aria-label="Abrir menu" onclick="toggleMobileMenu()">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div id="mobile-menu" style="display:none; padding:16px 24px 20px; border-top:1px solid rgba(99,120,255,0.15);">
        <a href="platform.html" style="display:block;padding:10px 0;color:#7b8db0;text-decoration:none;font-size:15px;">Plataforma</a>
        <a href="developers.html" style="display:block;padding:10px 0;color:#7b8db0;text-decoration:none;font-size:15px;">Desenvolvedores</a>
        <a href="security.html" style="display:block;padding:10px 0;color:#7b8db0;text-decoration:none;font-size:15px;">Segurança</a>
        <a href="contact.html" style="display:block;padding:10px 0;color:#7b8db0;text-decoration:none;font-size:15px;">Contato</a>
        <a href="developers.html" style="display:inline-block;margin-top:12px;" class="btn-primary">Começar Agora →</a>
      </div>
    </nav>
  `;

  const footerHTML = `
    <footer role="contentinfo">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="index.html" class="nav-logo" style="display:inline-flex;">
              <img src="logo-dark.png" alt="NewToken" class="nav-logo-img">
            </a>
            <p>Infraestrutura de automação com IA para empresas que integram as tecnologias Meta. Construa com confiança, escale com segurança.</p>
          </div>
          <div class="footer-col">
            <h4>Produto</h4>
            <ul>
              <li><a href="platform.html">Plataforma</a></li>
              <li><a href="developers.html">Desenvolvedores</a></li>
              <li><a href="security.html">Segurança</a></li>
              <li><a href="developers.html#api">Referência da API</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Empresa</h4>
            <ul>
              <li><a href="contact.html">Contato</a></li>
              <li><a href="contact.html">Suporte</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="privacy.html">Política de Privacidade</a></li>
              <li><a href="terms.html">Termos de Uso</a></li>
              <li><a href="security.html">Segurança</a></li>
              <li><a href="data-deletion.html">Exclusão de Dados</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 NewToken Tecnologia. Todos os direitos reservados.</span>
          <span style="font-family:var(--font-mono);font-size:12px;">newtoken.win</span>
        </div>
      </div>
    </footer>
  `;

  document.addEventListener('DOMContentLoaded', function () {
    const navTarget = document.getElementById('nav-root');
    const footerTarget = document.getElementById('footer-root');
    if (navTarget) navTarget.innerHTML = navHTML;
    if (footerTarget) footerTarget.innerHTML = footerHTML;
  });

  window.toggleMobileMenu = function () {
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
  };
})();
