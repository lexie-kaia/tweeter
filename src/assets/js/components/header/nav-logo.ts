import { createElem } from '../../helper';

// <a href="#" class="menu-btn logo">
//   <span class="menu-icon">
//     <i class="fab fa-twitter"></i>
//   </span>
// </a>;

const logoIconClass = 'fab fa-twitter';

class NavLogo extends HTMLElement {
  render() {
    const menuBtn = createElem('a', this, 'menu-btn logo');
    menuBtn.setAttribute('href', '#');
    const menuIcon = createElem('span', menuBtn, 'menu-icon');
    const i = createElem('i', menuIcon, logoIconClass);
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('nav-logo', NavLogo);
