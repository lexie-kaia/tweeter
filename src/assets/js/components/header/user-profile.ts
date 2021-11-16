class UserProfile extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <button class="view-profile-btn" aria-label="view user profile">
        <div class="user-info">
          <div class="user-avatar">
            <img src="${this.imgPath}" alt="${this.username} avatar" />
          </div>
          <div class="user-detail">
            <span class="user-username">${this.username}</span>
            <span class="user-userid">${this.userId}</span>
          </div>
        </div>
  
        <span class="btn-icon">
          <i class="${this.btnFaIcon}"></i>
        </span>
      </button>
    `;
  }

  connectedCallback() {
    const viewProfileBtn = this.querySelector('.view-profile-btn');
    viewProfileBtn?.addEventListener('click', () => {
      alert(`view user profile clicked`);
    });
  }

  get username() {
    return this.getAttribute('username');
  }

  get userId() {
    return this.getAttribute('user-id');
  }

  get imgPath() {
    return this.getAttribute('img-path');
  }

  get btnAria() {
    return this.getAttribute('btn-aria');
  }

  get btnFaIcon() {
    return this.getAttribute('btn-fa-icon');
  }
}

customElements.define('user-profile', UserProfile);
