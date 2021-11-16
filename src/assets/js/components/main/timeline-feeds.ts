import { feeds } from '../../data/feeds';

class TimelineFeedList extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {}
}

class TimelineFeedItem extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    if (this.feed == null) return;

    const {
      profile: {
        username,
        userId,
        posted: { time: postedTime, text: postedText },
        imgPath: avatarImgPath,
      },
      content: {
        text: contentText,
        img: { path: contentImgPath, alt: contentImgAlt },
      },
    } = this.feed;

    this.innerHTML = `
      <article class="feed-container">
        <h3 class="sr-only">A Tweet from ${username}</h3>
  
        <a href="#${username}" class="feed-avatar">
          <img src="${avatarImgPath}" alt="${username} avatar" />
        </a>
  
        <div class="feed-content">

          <header class="feed-header">
            <dl class="feed-profile">
              <dt class="sr-only">username</dt>
              <dd>
                <a href="#${username}" class="profile-username">
                  ${username}
                </a>
              </dd>
          
              <dt class="sr-only">user id</dt>
              <dd>
                <span class="profile-userid">${userId}</span>
              </dd>
          
              <dt class="sr-only">Posted</dt>
              <dd>
                <span aria-label="${postedText}" class="profile-posted">
                  ${postedTime}
                </span>
              </dd>
            </dl>
        
            <button class="more-btn">
              <span class="btn-icon">
                <i class="fas fa-ellipsis-h"></i>
              </span>
            </button>
          </header>

          <div class="feed-body">
            <p class="feed-text">
              ${contentText}
            </p>
            <div class="feed-img">
              <img src="${contentImgPath}" alt="${contentImgAlt}" />
            </div>
          </div>

          <footer class="feed-footer">
            <ul class="feed-btnlist">
              <li class="feed-btnitem">
                <action-btn type="reply" fa-icon="far fa-comment" count="0"></action-btn>
              </li>
              <li class="feed-btnitem">
                <action-btn type="retweet" fa-icon="fas fa-retweet" count="0"></action-btn>
              </li>
              <li class="feed-btnitem">
                <action-btn type="like" fa-icon="far fa-heart" count="0"></action-btn>
              </li>
              <li class="feed-btnitem">
                <action-btn type="share" fa-icon="fas fa-external-link-alt" count="0"></action-btn>
              </li>
            </ul>
          </footer>
        </div>
      </article>
    `;
  }

  connectedCallback() {
    const moreBtn = this.querySelector('.more-btn')! as HTMLButtonElement;
    moreBtn.addEventListener('click', () => {
      alert('more clicked');
    });
  }

  get feed() {
    const feedIndex = Number(this.getAttribute('feed-index'));

    return feedIndex != null ? feeds[feedIndex] : null;
  }
}

class ActionBtn extends HTMLElement {
  constructor() {
    super();
  }

  render() {
    this.innerHTML = `
    <button aria-label="${this.type}" class="action-btn ${this.type}-btn">
      <span class="btn-icon">
        <i class="${this.faIcon}"></i>
      </span>
    </button>
    <strong aria-label="${this.getAriaLabel(this.count, this.type)}" class="action-count">
      ${this.count}
    </strong>
    `;
  }

  connectedCallback() {
    this.render();
    this.addOnClick();
  }

  static get observedAttributes() {
    return ['count'];
  }

  attributeChangedCallback(prop: string, oldVal: string, newVal: string) {
    if (prop === 'count') {
      this.render();
      this.addOnClick();
    }
  }

  get type() {
    return this.getAttribute('type') != null ? this.getAttribute('type')! : '';
  }

  get faIcon() {
    return this.getAttribute('fa-icon') != null ? this.getAttribute('fa-icon')! : '';
  }

  get count() {
    return this.getAttribute('count') != null ? Number(this.getAttribute('count')) : 0;
  }

  set count(val: number) {
    this.setAttribute('count', String(val));
  }

  addOnClick() {
    const actionBtn = this.querySelector('.action-btn');
    actionBtn?.addEventListener('click', () => {
      this.count += 1;
    });
  }

  getAriaLabel(count: number, type: string) {
    if (count === 0 || count === 1) {
      return `${count} ${type}`;
    }

    if (type === 'reply') {
      return `${count} replies`;
    }

    return `${count} ${type}s`;
  }
}

customElements.define('timeline-feed-list', TimelineFeedList);
customElements.define('timeline-feed-item', TimelineFeedItem);
customElements.define('action-btn', ActionBtn);
