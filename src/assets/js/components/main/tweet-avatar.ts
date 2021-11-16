import { createElem } from '../../helper';

// <a hrer="#" class="avatar">
//   <img src="./dist/static/imgs/tweeter_profile_2.jpg" alt="birdheart avatar" />
// </a>;

const profileImg = {
  path: './dist/static/imgs/tweeter_profile-2.jpg',
  alt: 'birdheart avatar',
};

class TweetAvatar extends HTMLElement {
  render() {
    const avatar = createElem('a', this, 'avatar');
    avatar.setAttribute('href', '#');
    const img = createElem('img', avatar);
    img.setAttribute('src', profileImg.path);
    img.setAttribute('alt', profileImg.alt);
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('tweet-avatar', TweetAvatar);
