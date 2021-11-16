class TweetOptionList extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {}
}

class TweetOptionItem extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <button button type="button" aria-label="${this.btnAria}" class="option-btn">
        <span class="btn-icon">
          <i class="${this.btnFaIcon}"></i>
        </span>
      </button>
    `;
  }

  connectedCallback() {
    const optionBtn = this.querySelector('.option-btn');
    optionBtn?.addEventListener('click', () => {
      alert(`${this.btnAria} clicked`);
    });
  }

  get btnFaIcon() {
    return this.getAttribute('btn-fa-icon');
  }

  get btnAria() {
    return this.getAttribute('btn-aria');
  }
}

customElements.define('tweet-option-list', TweetOptionList);
customElements.define('tweet-option-item', TweetOptionItem);
