class TrendList extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {}
}

class TrendItem extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="trend-content">
        <a href="#${this.keyword}" class="trend-detail">
          <span class="trend-location">Trending in ${this.location}</span>
          <strong class="trend-keyword">${this.keyword}</strong>
          <span class="trend-count">${this.retweetCount} Tweets</span>
        </a>
        <button class="more-btn">
          <span class="btn-icon">
            <i class="fas fa-ellipsis-h"></i>
          </span>
        </button>
      </div>
    `;
  }

  connectedCallback() {
    const moreBtn = this.querySelector('.more-btn')! as HTMLButtonElement;
    moreBtn.addEventListener('click', () => {
      alert('more clicked');
    });
  }

  get location() {
    return this.getAttribute('location');
  }

  get keyword() {
    return this.getAttribute('keyword');
  }
  get retweetCount() {
    return this.getAttribute('retweet-count');
  }
}

customElements.define('trend-list', TrendList);
customElements.define('trend-item', TrendItem);
