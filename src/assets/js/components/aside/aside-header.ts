import { createElem } from '../../helper';

// <header class="aside-header">
//   <form action="#" method="GET" class="search-form">
//     <label class="search-wrapper">
//       <span class="search-icon">
//         <i class="fas fa-search"></i>
//       </span>
//       <input type="text" placeholder="Search Tweeter" class="search-input" />
//     </label>
//   </form>
// </header>;

const searchIconClass = 'fas fa-search';
const serachInputPlaceholder = 'Search Tweeter';

class AsideHeader extends HTMLElement {
  render() {
    const asideHeader = createElem('header', this, 'aside-header');
    const searchForm = createElem('form', asideHeader, 'search-form');
    searchForm.setAttribute('action', '#');
    searchForm.setAttribute('method', 'GET');
    const searchWrapper = createElem('label', searchForm, 'search-wrapper');
    const searchIcon = createElem('span', searchWrapper, 'search-icon');
    const i = createElem('i', searchIcon, searchIconClass);
    const searchInput = createElem('input', searchWrapper, 'search-input');
    searchInput.setAttribute('type', 'text');
    searchInput.setAttribute('placeholder', serachInputPlaceholder);
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('aside-header', AsideHeader);
