class NavTweetBtn extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <button class="tweet-btn">${this.text}</button>
    `;
  }

  connectedCallback() {
    const tweetBtn = this.querySelector('.tweet-btn');
    tweetBtn?.addEventListener('click', () => {
      alert('create a tweet clicked');
    });
  }

  get text() {
    return this.getAttribute('text');
  }
}

customElements.define('nav-tweet-btn', NavTweetBtn);
