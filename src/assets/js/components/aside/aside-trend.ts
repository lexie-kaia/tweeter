import { createElem } from '../../helper';

// <div class="aside-trend">
//   <header class="trend-header">
//     <h2 class="trend-title">Trends for you</h2>
//     <button class="config-btn">
//       <span class="btn-icon">
//         <i class="fas fa-cog"></i>
//       </span>
//     </button>
//   </header>

//   <trend-trendlist></trend-trendlist>

//   <footer class="trend-footer">
//     <button class="showmore-btn">Show more</button>
//   </footer>
// </div>;

const configIconClass = 'fas fa-cog';

class AsideTrend extends HTMLElement {
  render() {
    const asideTrend = createElem('div', this, 'aside-trend');
    const trendHeader = this.createHeader(asideTrend);
    const trendTrendList = createElem('trend-trendlist', asideTrend);
    const trendFooter = this.createFooter(asideTrend);
  }

  connectedCallback() {
    this.render();
  }

  createHeader(parent: HTMLElement) {
    const trendHeader = createElem('header', parent, 'trend-header');
    const trendTitle = createElem('h2', trendHeader, 'trend-title');
    trendTitle.textContent = 'Trends for you';
    const configBtn = createElem('button', trendHeader, 'config-btn');
    const btnIcon = createElem('span', configBtn, 'btn-icon');
    const i = createElem('i', btnIcon, configIconClass);

    configBtn.addEventListener('click', () => {
      alert('Edit Trend Setting clicked');
    });
  }

  createFooter(parent: HTMLElement) {
    const trendFooter = createElem('footer', parent, 'trend-footer');

    const showmoreBtn = createElem('button', trendFooter, 'showmore-btn');
    showmoreBtn.textContent = 'Show more';

    showmoreBtn.addEventListener('click', () => {
      alert('Show More clicked');
    });
  }
}

customElements.define('aside-trend', AsideTrend);
