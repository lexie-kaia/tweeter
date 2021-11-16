import { createElem } from '../../helper';

// <div class="footer">
//   <tweet-btnlist></tweet-btnlist>
//   <button type="button" class="submit-btn" aria-label="Submit Tweet">tweet</button>
// </div>

const btn = {
  text: 'tweet',
  ariaLabel: 'Submit Tweet',
};

class TweetFooter extends HTMLElement {
  render() {
    const footer = createElem('div', this, 'footer');

    const btnList = createElem('tweet-btnlist', footer);

    const submitBtn = createElem('button', footer, 'submit-btn');
    submitBtn.setAttribute('type', 'button');
    submitBtn.setAttribute('aria-label', btn.ariaLabel);
    submitBtn.textContent = btn.text;
    submitBtn.addEventListener('click', () => {
      alert(`${btn.ariaLabel} clicked`);
    });
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('tweet-footer', TweetFooter);
