import { createElem } from '../../helper';

// <ul class="btn-list">
//   <li class="btn-item">
//     <button
//       type="button"
//       aria-label="Add phothos or video"
//       class="option-btn"
//     >
//       <span class="btn-icon">
//         <i class="far fa-images"></i>
//       </span>
//     </button>
//   </li>
// </ul>

const btns = [
  { text: 'Add phothos or video', iconClass: 'far fa-images' },
  { text: 'Add a GIF', iconClass: 'fas fa-search-plus' },
  { text: 'Add poll', iconClass: 'fas fa-poll-h' },
  { text: 'Add emoji', iconClass: 'far fa-smile' },
  { text: 'Schedule Tweet', iconClass: 'far fa-calendar-alt' },
];

class TweetBtnList extends HTMLElement {
  render() {
    const btnList = createElem('ul', this, 'btn-list');

    btns.forEach(btn => {
      const btnItem = document.createElement('tweet-btnitem');
      btnItem.setAttribute('text', btn.text);
      btnItem.setAttribute('icon-class', btn.iconClass);
      btnList.append(btnItem);
    });
  }

  connectedCallback() {
    this.render();
  }
}

class TweetBtnItem extends HTMLElement {
  render() {
    const text = this.getAttribute('text') ?? '';
    const iconClass = this.getAttribute('icon-class') ?? '';

    const btnItem = createElem('li', this, 'btn-item');
    const optionBtn = createElem('button', btnItem, 'option-btn');
    optionBtn.setAttribute('type', 'button');
    optionBtn.setAttribute('aria-label', text);
    const btnIcon = createElem('span', optionBtn, 'btn-icon');
    const i = createElem('i', btnIcon, iconClass);

    optionBtn.addEventListener('click', () => {
      alert(`${text} clicked`);
    });
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('tweet-btnitem', TweetBtnItem);
customElements.define('tweet-btnlist', TweetBtnList);
