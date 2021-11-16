class PageHeader extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="fixed-wrapper">
        <header class="page-header">
          <h2 class="page-title">${this.pageTitle}</h2>
            <button button aria-label="Top Tweets On" class="top-tweets-btn">
              <span class="btn-icon"
                ><i class="${this.btnFaIcon}"></i
              ></span>
            </button>
        </header>
      </div>
    `;
  }

  connectedCallback() {
    const topTweetBtn = this.querySelector('.top-tweets-btn');
    topTweetBtn?.addEventListener('click', () => {
      alert(`top tweets on clicked`);
    });
  }

  get pageTitle() {
    return this.getAttribute('page-title');
  }

  get btnFaIcon() {
    return this.getAttribute('btn-fa-icon');
  }
}

customElements.define('page-header', PageHeader);
