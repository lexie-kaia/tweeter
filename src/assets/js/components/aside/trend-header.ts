class TrendHeader extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="trend-header">
        <h2 class="trend-title">Trends for you</h2>
        <button class="open-btn">
          <span class="btn-icon">
            <i class="${this.btnfaIcon}"></i>
          </span>
        </button>
      </header>
    `;
  }

  connectedCallback() {
    const openBtn = this.querySelector('.open-btn')! as HTMLButtonElement;
    openBtn.addEventListener('click', () => {
      alert('open settings clicked');
    });
  }

  get btnfaIcon() {
    return this.getAttribute('btn-fa-icon');
  }
}

customElements.define('trend-header', TrendHeader);
