class TweetAvatar extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <a href="#${this.username}" class="avatar-link">
        <img src="${this.imgPath}" alt="${this.username} avatar" />
      </a>
    `;
  }

  get imgPath() {
    return this.getAttribute('img-path');
  }

  get username() {
    return this.getAttribute('username');
  }
}

customElements.define('tweet-avatar', TweetAvatar);
