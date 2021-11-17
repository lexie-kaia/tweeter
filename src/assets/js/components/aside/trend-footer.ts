class trendFooter extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer class="trend-footer">
        <button class="show-more-btn">Show more</button>
      </footer>
    `;
  }

  connectedCallback() {
    const showMoreBtn = this.querySelector('.show-more-btn')! as HTMLButtonElement;
    showMoreBtn.addEventListener('click', () => {
      alert('show more trends clicked');
    });
  }
}

customElements.define('trend-footer', trendFooter);
