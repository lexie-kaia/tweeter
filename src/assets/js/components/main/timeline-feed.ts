import { createElem } from '../../helper';

// ------------ feed-container
// <article class="feed-container">
//   <h3 class="sr-only">A Tweet from pineapple</h3>

//   <a hrer="#" class="profile-avatar">
//     <img
//       src="./dist/static/imgs/tweeter_profile-1.jpg"
//       alt="pineapple avatar"
//     />
//   </a>

//   <feed-content></feed-content>
// </article>

// ------------ feed-header
// <header class="feed-header">
//   <dl class="feed-profile">
//     <dt class="sr-only">Name</dt>
//     <dd>
//       <a href="#pineapple" class="fs-h2 profile_name">
//         pineapple
//       </a>
//     </dd>

//     <dt class="sr-only">Username</dt>
//     <dd>
//       <span class="fs-s profile_username">@pineapple</span>
//     </dd>

//     <dt class="sr-only">Posted</dt>
//     <dd>
//       <span aria-label="3 seconds ago" class="fs-s feed_profile_posted">
//         5s
//       </span>
//     </dd>
//   </dl>

//   <button class="more-btn">
//     <span class="btn-icon">
//       <i class="fas fa-ellipsis-h"></i>
//     </span>
//   </button>
// </header>

// ------------ feed-body
// <div class="feed_body">
//   <p class="feed_text">
//     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex enim nemo
//     maiores voluptate repellendus, voluptas voluptates cumque eaque quaerat et
//     placeat iusto omnis. Odit enim expedita dolorum provident dolores sit!
//   </p>
//   <div class="feed_img">
//     <img src="./dist/static/imgs/tweeter-1.jpg" alt="" />
//   </div>
// </div>

// ------------ feed-footer
// <footer class="feed_footer">
//   <ul class="feed-btnlist">
//     <li class="feed-btnitem">
//       <button aria-label="Reply" class="reaction-btn reply-btn">
//         <span class="btn-icon">
//           <i class="far fa-comment"></i>
//         </span>
//       </button>
//       <strong aria-label="3 replies" class="reaction-count reply-count">
//         3
//       </strong>
//     </li>
//   </ul>
// </footer>

type Feed = {
  profile: Profile;
  body: Body;
};

type Profile = {
  name: string;
  username: string;
  posted: {
    time: string;
    text: string;
  };
  img: {
    path: string;
  };
};

type Body = {
  text: string;
  img: {
    path: string;
    alt: string;
  };
};

const feeds: Feed[] = [
  {
    profile: {
      name: 'Pineapple',
      username: '@Pineapple',
      posted: {
        time: '3s',
        text: '3 seconds ago',
      },
      img: {
        path: './dist/static/imgs/tweeter_profile-1.jpg',
      },
    },
    body: {
      text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex enim nemo
    maiores voluptate repellendus, voluptas voluptates cumque eaque quaerat et
    placeat iusto omnis. Odit enim expedita dolorum provident dolores sit!`,
      img: {
        path: './dist/static/imgs/tweeter-1.jpg',
        alt: 'donut',
      },
    },
  },
  {
    profile: {
      name: 'BirdHeart',
      username: '@BirdHeart',
      posted: {
        time: '3m',
        text: '3 minutes ago',
      },
      img: {
        path: './dist/static/imgs/tweeter_profile-2.jpg',
      },
    },
    body: {
      text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex enim nemo
    maiores voluptate repellendus, voluptas voluptates cumque eaque quaerat et
    placeat iusto omnis. Odit enim expedita dolorum provident dolores sit!`,
      img: {
        path: './dist/static/imgs/tweeter-2.jpg',
        alt: 'donut',
      },
    },
  },
  {
    profile: {
      name: 'PinkCocktail',
      username: '@PinkCocktail',
      posted: {
        time: '3h',
        text: '3 hours ago',
      },
      img: {
        path: './dist/static/imgs/tweeter_profile-3.jpg',
      },
    },
    body: {
      text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex enim nemo
    maiores voluptate repellendus, voluptas voluptates cumque eaque quaerat et
    placeat iusto omnis. Odit enim expedita dolorum provident dolores sit!`,
      img: {
        path: './dist/static/imgs/tweeter-3.jpg',
        alt: 'donut',
      },
    },
  },
  {
    profile: {
      name: 'Flamingo',
      username: '@Flamingo',
      posted: {
        time: '3 days ago',
        text: '3 days ago',
      },
      img: {
        path: './dist/static/imgs/tweeter_profile-4.jpg',
      },
    },
    body: {
      text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex enim nemo
    maiores voluptate repellendus, voluptas voluptates cumque eaque quaerat et
    placeat iusto omnis. Odit enim expedita dolorum provident dolores sit!`,
      img: {
        path: './dist/static/imgs/tweeter-4.jpg',
        alt: 'donut',
      },
    },
  },
  {
    profile: {
      name: 'Pineapple',
      username: '@Pineapple',
      posted: {
        time: '3 weeks ago',
        text: '3 weeks ago',
      },
      img: {
        path: './dist/static/imgs/tweeter_profile-1.jpg',
      },
    },
    body: {
      text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex enim nemo
    maiores voluptate repellendus, voluptas voluptates cumque eaque quaerat et
    placeat iusto omnis. Odit enim expedita dolorum provident dolores sit!`,
      img: {
        path: './dist/static/imgs/tweeter-5.jpg',
        alt: 'donut',
      },
    },
  },
];

const reactionBtns = [
  {
    reaction: 'reply',
    iconClass: 'far fa-comment',
  },
  {
    reaction: 'retweet',
    iconClass: 'fas fa-retweet',
  },
  {
    reaction: 'like',
    iconClass: 'far fa-heart',
  },
  {
    reaction: 'share',
    iconClass: 'fas fa-external-link-alt',
  },
];

const moreBtnClass = 'fas fa-ellipsis-h';

class TimelineFeed extends HTMLElement {
  render() {
    const feedList = createElem('ul', this, 'feed-list');

    feeds.forEach(feed => {
      const feedItem = createElem('li', feedList, 'feed-item');
      const feedContainer = this.createFeedContainer(feedItem, feed);
    });
  }

  connectedCallback() {
    this.render();
  }

  createFeedContainer(parent: HTMLElement, feed: Feed) {
    const feedContainer = createElem('article', parent, 'feed-container');

    const feedTitle = createElem('h3', feedContainer, 'sr-only');
    feedTitle.textContent = `A Tweet from ${feed.profile.name}`;

    const profileAvatar = createElem('a', feedContainer, 'profile-avatar');
    profileAvatar.setAttribute('href', `#${feed.profile.name}`);
    const img = createElem('img', profileAvatar);
    img.setAttribute('src', feed.profile.img.path);
    img.setAttribute('alt', `${feed.profile.name} avatar`);

    this.createFeedContent(feedContainer, feed);
  }

  createFeedContent(parent: HTMLElement, feed: Feed) {
    const feedContent = createElem('div', parent, 'feed-content');
    this.createHeader(feedContent, feed.profile);
    this.createBody(feedContent, feed.body);
    this.createFooter(feedContent);
  }

  // ------------ footer
  createFooter(parent: HTMLElement) {
    const feedFooter = createElem('footer', parent, 'feed-footer');
    const feedBtnlist = createElem('ul', feedFooter, 'feed-btnlist');
    reactionBtns.forEach(btn => {
      this.createFeedBtnitem(feedBtnlist, btn);
    });
  }

  createFeedBtnitem(
    parent: HTMLElement,
    btn: { reaction: string; iconClass: string }
  ) {
    const feedBtnitem = createElem('li', parent, 'feed-btnitem');
    const reactionBtn = createElem(
      'button',
      feedBtnitem,
      `reaction-btn ${btn.reaction}-btn`
    );
    reactionBtn.setAttribute('aria-label', btn.reaction);
    const btnIcon = createElem('span', reactionBtn, 'btn-icon');
    const i = createElem('i', btnIcon, btn.iconClass);

    if (btn.reaction !== 'share') {
      const btnText = createElem(
        'strong',
        feedBtnitem,
        `reaction-count ${btn.reaction}-count`
      );
      btnText.textContent = '3';
      btnText.setAttribute('aria-label', `3 ${btn.reaction}`);
    }

    reactionBtn.addEventListener('click', () => {
      alert(`${btn.reaction} clicked`);
    });
  }

  // ------------ body
  createBody(parent: HTMLElement, body: Body) {
    const feedBody = createElem('div', parent, 'feed-body');
    const feedText = createElem('p', feedBody, 'feed-text');
    feedText.textContent = body.text;
    const feedImg = createElem('div', feedBody, 'feed-img');
    const img = createElem('img', feedImg);
    img.setAttribute('src', body.img.path);
    img.setAttribute('alt', body.img.alt);
  }

  // ------------ header
  createHeader(parent: HTMLElement, profile: Profile) {
    const feedHeader = createElem('header', parent, 'feed-header');

    const feedProfile = this.createProfile(feedHeader, profile);

    const moreBtn = this.createMorebtn(feedHeader);
  }

  createMorebtn(parent: HTMLElement) {
    const moreBtn = createElem('button', parent, 'more-btn');
    const btnIcon = createElem('span', moreBtn, 'btn-icon');
    const i = createElem('i', btnIcon, moreBtnClass);

    moreBtn.addEventListener('click', () => {
      alert(`View More clicked`);
    });

    return moreBtn;
  }

  createProfile(parent: HTMLElement, profile: Profile) {
    const feedProfile = createElem('dl', parent, 'feed-profile');

    const nameDt = createElem('dt', feedProfile, 'sr-only');
    nameDt.textContent = 'name';
    const nameDd = createElem('dd', feedProfile);
    const nameLink = createElem('a', nameDd, 'profile-name');
    nameLink.textContent = profile.name;
    nameLink.setAttribute('href', `#${profile.name}`);

    const usernameDt = createElem('dt', feedProfile, 'sr-only');
    usernameDt.textContent = 'username';
    const usernameDd = createElem('dd', feedProfile);
    const usernameSpan = createElem('span', usernameDd, 'profile-username');
    usernameSpan.textContent = profile.username;

    const postedDt = createElem('dt', feedProfile, 'sr-only');
    postedDt.textContent = 'posted';
    const postedDd = createElem('dd', feedProfile);
    const postedSpan = createElem('span', postedDd, 'profile-posted');
    postedSpan.textContent = profile.posted.time;
    postedSpan.setAttribute('aria-label', profile.posted.text);

    return feedProfile;
  }
}

customElements.define('timeline-feed', TimelineFeed);
