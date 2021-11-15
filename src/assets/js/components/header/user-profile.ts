import { createElem } from '../../helper';

// <button class="profile-btn">
//   <div class="info">
//     <div class="avatar">
//       <img src="./dist/static/imgs/tweeter_profile_2.jpg" alt="birdheart avatar" />
//     </div>
//     <div class="detail">
//       <span class="username"> BirdHeart </span>
//       <span class="userid"> @1234567890 </span>
//     </div>
//   </div>

//   <span class="more-icon">
//     <i class="fas fa-ellipsis-h"></i>
//   </span>
// </button>

const profile = {
  img: {
    path: './dist/static/imgs/tweeter_profile-2.jpg',
    alt: 'birdheart avatar',
  },
  username: 'BirdHeart',
  userid: '@1234567890',
};

const btn = {
  ariaLabel: 'View Profile',
};

const moreIconClass = 'fas fa-ellipsis-h';

class UserProfile extends HTMLElement {
  render() {
    const profileBtn = createElem('button', this, 'profile-btn');
    profileBtn.setAttribute('aria-label', btn.ariaLabel);

    const info = createElem('div', profileBtn, 'info');
    const avatar = createElem('div', info, 'avatar');
    const img = createElem('img', avatar);
    img.setAttribute('src', profile.img.path);
    img.setAttribute('alt', profile.img.alt);

    const detail = createElem('div', info, 'detail');
    const username = createElem('div', detail, 'username');
    username.textContent = profile.username;
    const userid = createElem('div', detail, 'userid');
    userid.textContent = profile.userid;

    const moreIcon = createElem('span', profileBtn, 'more-icon');
    const i = createElem('i', moreIcon, moreIconClass);

    profileBtn.addEventListener('click', () => {
      alert(`${btn.ariaLabel} clicked`);
    });
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('user-profile', UserProfile);
