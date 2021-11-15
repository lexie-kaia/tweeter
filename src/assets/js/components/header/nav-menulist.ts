import { createElem } from '../../helper';

// <ul class="menu-list">
//   <li class="menu-item">
//     <a href="#" class="menu-btn">
//       <span class="menu-icon">
//         <i class="fas fa-house-user"></i>
//       </span>
//       <span class="menu-text">home</span>
//     </a>
//   </li>
// </ul>;

const menus = [
  {
    text: 'home',
    iconClass: 'fas fa-house-user',
    menuType: 'link',

    isCurrent: true,
  },
  { text: 'explore', iconClass: 'fas fa-hashtag', menuType: 'link' },
  {
    text: 'notifications',
    iconClass: 'far fa-bell',
    menuType: 'link',
    unread: 3,
  },
  { text: 'messages', iconClass: 'far fa-envelope', menuType: 'link' },
  { text: 'bookmarks', iconClass: 'far fa-bookmark', menuType: 'link' },
  { text: 'lists', iconClass: 'far fa-list-alt', menuType: 'link' },
  { text: 'connect', iconClass: 'fas fa-at', menuType: 'link' },
  { text: 'profile', iconClass: 'fas fa-user', menuType: 'link' },
  { text: 'more', iconClass: 'fas fa-ellipsis-h', menuType: 'button' },
];

class NavMenulist extends HTMLElement {
  render() {
    const menuList = createElem('ul', this, 'menu-list');
    menus.forEach(menu => {
      const menuItem = document.createElement('nav-menuitem');
      menuItem.setAttribute('text', menu.text);
      menuItem.setAttribute('icon-class', menu.iconClass);
      menuItem.setAttribute('menu-type', menu.menuType);

      if (menu.isCurrent) {
        menuItem.setAttribute('isCurrent', String(menu.isCurrent));
      }
      if (menu.text === 'notifications' && menu.unread) {
        menuItem.setAttribute('unread', String(menu.unread));
      }

      menuList.append(menuItem);
    });
  }

  connectedCallback() {
    this.render();
  }
}

class NavMenuitem extends HTMLElement {
  render() {
    const text = this.getAttribute('text') ?? '';
    const iconClass = this.getAttribute('icon-class') ?? '';

    const menuItem = createElem('li', this, 'menu-item');

    let menuBtn: HTMLElement;
    switch (this.getAttribute('menu-type')) {
      case 'link':
        const href = `#${text}`;
        menuBtn = createElem('a', menuItem, 'menu-btn');
        menuBtn.setAttribute('href', href);
        break;
      case 'button':
        menuBtn = createElem('button', menuItem, 'menu-btn');
        break;
      default:
        menuBtn = createElem('button', menuItem, 'menu-btn');
    }

    const menuIcon = createElem('span', menuBtn, 'menu-icon');
    const i = createElem('i', menuIcon, iconClass);

    const menuText = createElem('span', menuBtn, 'menu-text');
    menuText.textContent = text;

    if (this.getAttribute('isCurrent') === 'true') {
      menuBtn.classList.add('current');
    }

    if (text === 'notifications' && this.getAttribute('unread') != null) {
      const notif = createElem('strong', menuIcon, 'notif');
      notif.textContent = this.getAttribute('unread');
      menuIcon.classList.add('notified');
    }
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('nav-menulist', NavMenulist);
customElements.define('nav-menuitem', NavMenuitem);
