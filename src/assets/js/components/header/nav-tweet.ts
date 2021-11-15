import { createElem } from '../../helper';

// <button class="tweet-btn">Tweet</button>

class NavTweet extends HTMLElement {
  render() {
    const tweetBtn = createElem('button', this, 'tweet-btn');
    tweetBtn.textContent = 'tweet';

    tweetBtn.addEventListener('click', () => {
      alert('Create Tweet clicked');
    });
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('nav-tweet', NavTweet);
