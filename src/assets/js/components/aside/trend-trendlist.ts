import { createElem } from '../../helper';

// <ul class="trend-list">
//   <li class="trend-item">
//     <a href="#" class="trend-detail">
//       <span class="trend-location">Trending in South Korea</span>
//       <strong class="trend-keyword">anonymous</strong>
//       <span class="trend-count">33K Tweets</span>
//     </a>
//     <button class="more-btn">
//       <span class="btn-icon">
//         <i class="fas fa-ellipsis-h"></i>
//       </span>
//     </button>
//   </li>
// </ul>;

type Trend = {
  location: string;
  keyword: string;
  count: string;
};

const trends = [
  {
    location: 'Tweet Land',
    keyword: 'Sparkle Donut',
    count: '3333',
  },
  {
    location: 'Pineapple Beach',
    keyword: 'Pineapple Cocktail',
    count: '3333',
  },
  {
    location: 'Flamingo Region',
    keyword: 'Pink Cactus',
    count: '3333',
  },
];

const moreIconClass = 'fas fa-ellipsis-h';

class TrendTrendlist extends HTMLElement {
  render() {
    const trendList = createElem('ul', this, 'trend-list');
    trends.forEach(trend => {
      const trendItem = this.createTrendItem(trendList, trend);
    });
  }

  connectedCallback() {
    this.render();
  }

  createTrendItem(parent: HTMLElement, trend: Trend) {
    const trendItem = createElem('li', parent, 'trend-item');

    const trendDetail = createElem('a', trendItem, 'trend-detail');
    trendDetail.setAttribute('href', `#${trend.keyword}`);
    const trendLocation = createElem('span', trendDetail, 'trend-location');
    trendLocation.textContent = `Trending in ${trend.location}`;
    const trendKeyword = createElem('strong', trendDetail, 'trend-keyword');
    trendKeyword.textContent = trend.keyword;
    const trendCount = createElem('span', trendDetail, 'trend-count');
    trendCount.textContent = `${trend.count} Tweets`;

    const moreBtn = createElem('button', trendItem, 'more-btn');
    const btnIcon = createElem('span', moreBtn, 'btn-icon');
    const i = createElem('i', btnIcon, moreIconClass);

    moreBtn.addEventListener('click', () => {
      alert('Change Recommendation Preferences clicked');
    });
  }
}

customElements.define('trend-trendlist', TrendTrendlist);
