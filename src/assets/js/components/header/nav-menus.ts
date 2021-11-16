class NavMenuList extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {}
}

class NavMenuItem extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <a
        href="${this.text === 'home' ? '/' : `#${this.text}`}"
        class="${this.isCurrent ? 'navmenu-link current' : 'navmenu-link'}"
      >
        <span class="${this.unread ? 'navmenu-icon notified' : 'navmenu-icon'}">
          <i class="${this.faIcon}"></i>
          ${this.unread ? `<strong class="notif">${this.unread}</strong>` : ''}
        </span>
        <span class="navmenu-text">${this.text}</span>
      </a>
    `;
  }

  get text() {
    return this.getAttribute('text');
  }

  get faIcon() {
    return this.getAttribute('fa-icon');
  }

  get isCurrent() {
    return this.getAttribute('isCurrent');
  }

  get unread() {
    return this.getAttribute('unread');
  }
}

customElements.define('nav-menu-list', NavMenuList);
customElements.define('nav-menu-item', NavMenuItem);
