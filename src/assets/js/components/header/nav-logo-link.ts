class NavLogoLink extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <a href="/" class="logo-link">
        <span class="link-icon">
          <i class="${this.faIcon}"></i>
        </span>
      </a>
    `;
  }

  get faIcon() {
    return this.getAttribute('fa-icon');
  }
}

customElements.define('nav-logo-link', NavLogoLink);
