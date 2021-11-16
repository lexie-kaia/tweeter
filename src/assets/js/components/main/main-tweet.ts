import { createElem } from '../../helper';

// <section class="section">
//   <tweet-avatar></tweet-avatar>
//   <form action="#" method="POST" class="form">
//     <textarea
//       name="tweet"
//       id="tweet"
//       placeholder="What's happening?"
//       maxlength="280"
//       class="textarea"
//     ></textarea>
//     <tweet-footer></tweet-footer>
//   </form>
// </section>;

const tweetInputPlaceholder = "What's happening?";

class MainTweet extends HTMLElement {
  render() {
    const sectionTweet = createElem('section', this, 'main-tweet');
    const tweetAvatar = createElem('tweet-avatar', sectionTweet);

    const tweetForm = createElem('form', sectionTweet, 'form');
    tweetForm.setAttribute('action', '#');
    tweetForm.setAttribute('method', 'POST');
    const tweetTextArea = createElem('textarea', tweetForm, 'textarea');
    tweetTextArea.setAttribute('name', 'tweet');
    tweetTextArea.setAttribute('id', 'tweet');
    tweetTextArea.setAttribute('placeholder', tweetInputPlaceholder);
    tweetTextArea.setAttribute('maxlength', '280');

    const tweetFooter = createElem('tweet-footer', tweetForm);
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('main-tweet', MainTweet);
