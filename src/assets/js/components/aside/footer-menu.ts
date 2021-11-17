class footerMenu extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    let html;
    switch (this.type) {
      case 'link':
        html = `
          <a href="#${this.makeLink(this.text)}" class="footer-item link">
            ${this.text}
          </a>
        `;
        break;
      case 'button':
        html = `
          <button class="footer-item button">
            ${this.text} ${this.text === 'More' ? '<i class="fas fa-ellipsis-h"></i>' : ''}
          </button>
        `;
        break;
      case 'span':
        html = `
          <span class="footer-item">
            ${this.text}
          </span>
        `;
        break;
      default:
        html = `
          <span class="footer-item">
            ${this.text}
          </span>
        `;
    }
    this.innerHTML = html;
  }

  connectedCallback() {
    if (this.text === 'More') {
      const moreBtn = this.querySelector('.footer-item')! as HTMLButtonElement;
      moreBtn.addEventListener('click', () => {
        alert('more clicked');
      });
    }
  }

  get text() {
    return this.getAttribute('text') != null ? this.getAttribute('text')! : '';
  }

  get type() {
    return this.getAttribute('type');
  }

  makeLink(text: string) {
    return text.toLowerCase().split(' ').join('-');
  }
}

customElements.define('footer-menu', footerMenu);
