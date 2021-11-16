import { createElem } from '../../helper';

// <div class="header-wrapper">
//   <header class="header">
//     <h2 class="title">Home</h2>
//     <button aria-label="Top Tweets On" class="top-tweet-btn">
//       <span class="btn-icon"
//         ><i class="fas fa-meteor"></i
//       ></span>
//     </button>
//   </header>
// </div>

const btn = {
  text: 'Top Tweets On',
  iconClass: 'fas fa-meteor',
};

class MainHeader extends HTMLElement {
  render() {
    const headerWrapper = createElem('div', this, 'header-wrapper');
    const header = createElem('header', headerWrapper, 'header');
    const title = createElem('h1', header, 'title');
    title.textContent = 'home';
    const topTweetBtn = createElem('button', header, 'top-tweet-btn');
    topTweetBtn.setAttribute('aria-label', btn.text);
    const btnIcon = createElem('span', topTweetBtn, 'btn-icon');
    const i = createElem('i', btnIcon, btn.iconClass);

    topTweetBtn.addEventListener('click', () => {
      alert(`${btn.text} clicked`);
    });
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('main-header', MainHeader);
