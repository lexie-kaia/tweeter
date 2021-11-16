import { createElem } from '../../helper';

// <footer class="aside-footer">
//   <ul class="footer_list">
//     <li class="footer_item">
//       <a href="#terms-of-sevice" target="_blank" class="footer-btn">
//         Terms of Sevice
//       </a>
//     </li>
//   </ul>
// </footer>

const menus = [
  { type: 'link', text: 'Terms of Sevice' },
  { type: 'link', text: 'Privacy Policy' },
  { type: 'link', text: 'Cookie Policy' },
  { type: 'link', text: 'Ads info' },
  { type: 'button', text: 'More', iconClass: 'fas fa-ellipsis-h' },
  { type: 'span', text: '© 2021 Tweeter. Inc.' },
];

class AsideFooter extends HTMLElement {
  render() {
    const AsideFooter = createElem('footer', this, 'aside-footer');
    const footerList = createElem('ul', AsideFooter, 'footer-list');

    menus.forEach(menu => {
      const footerItem = createElem('li', footerList, 'footer-item');
      let footerBtn: HTMLElement;
      switch (menu.type) {
        case 'link':
          footerBtn = createElem('a', footerItem, 'footer-btn');
          footerBtn.textContent = menu.text;
          const menulink = menu.text.toLowerCase().split(' ').join('-');
          footerBtn.setAttribute('href', `#${menulink}`);
          break;

        case 'button':
          footerBtn = createElem('button', footerItem, 'footer-btn');
          footerBtn.textContent = menu.text;
          if (menu.text === 'More') {
            const i = createElem('i', footerBtn, menu.iconClass);
          }
          break;

        case 'span':
          footerBtn = createElem('span', footerItem, 'footer-span');
          footerBtn.textContent = menu.text;
          break;

        default:
          footerBtn = createElem('button', footerItem, 'footer-btn');
          footerBtn.textContent = menu.text;
      }
    });
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('aside-footer', AsideFooter);
