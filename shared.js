// Shared navigation and footer for NewToken site
// Included via <script src="shared.js"></script> in each page

(function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  function isActive(page) {
    return currentPage === page ? 'active' : '';
  }

  const navHTML = `
    <nav class="nav" role="navigation" aria-label="Main navigation">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo" aria-label="NewToken home">
          <div class="nav-logo-icon" aria-hidden="true">NT</div>
          <span class="nav-logo-text">NewToken</span>
        </a>
        <ul class="nav-links" role="list">
          <li><a href="platform.html" class="${isActive('platform.html')}">Platform</a></li>
          <li><a href="developers.html" class="${isActive('developers.html')}">Developers</a></li>
          <li><a href="security.html" class="${isActive('security.html')}">Security</a></li>
          <li><a href="contact.html" class="${isActive('contact.html')}">Contact</a></li>
        </ul>
        <div class="nav-cta">
          <a href="contact.html" class="btn-ghost">Contact Sales</a>
          <a href="developers.html" class="btn-primary">Start Building</a>
        </div>
        <button class="nav-hamburger" aria-label="Open menu" onclick="toggleMobileMenu()">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div id="mobile-menu" style="display:none; padding:16px 24px 20px; border-top:1px solid rgba(99,120,255,0.15);">
        <a href="platform.html" style="display:block;padding:10px 0;color:#7b8db0;text-decoration:none;font-size:15px;">Platform</a>
        <a href="developers.html" style="display:block;padding:10px 0;color:#7b8db0;text-decoration:none;font-size:15px;">Developers</a>
        <a href="security.html" style="display:block;padding:10px 0;color:#7b8db0;text-decoration:none;font-size:15px;">Security</a>
        <a href="contact.html" style="display:block;padding:10px 0;color:#7b8db0;text-decoration:none;font-size:15px;">Contact</a>
        <a href="developers.html" style="display:inline-block;margin-top:12px;" class="btn-primary">Start Building →</a>
      </div>
    </nav>
  `;

  const footerHTML = `
    <footer role="contentinfo">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="index.html" class="nav-logo" style="display:inline-flex;">
              <div class="nav-logo-icon">NT</div>
              <span class="nav-logo-text">NewToken</span>
            </a>
            <p>AI automation infrastructure for businesses integrating Meta technologies. Build with confidence, scale with trust.</p>
          </div>
          <div class="footer-col">
            <h4>Product</h4>
            <ul>
              <li><a href="platform.html">Platform</a></li>
              <li><a href="developers.html">Developers</a></li>
              <li><a href="security.html">Security</a></li>
              <li><a href="developers.html#api">API Reference</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="contact.html">Support</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="privacy.html">Privacy Policy</a></li>
              <li><a href="terms.html">Terms of Service</a></li>
              <li><a href="security.html">Security</a></li>
              <li><a href="data-deletion.html">Data Deletion</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 NewToken Technology. All rights reserved.</span>
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
