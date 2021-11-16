import { createElem } from '../../helper';

// <section class="section-timeline">
//   <h2 class="sr-only">Your Timeline</h2>
//   <timeline-feed></timeline-feed>
// </section>;

class MainTimeline extends HTMLElement {
  render() {
    const sectionTimeline = createElem('section', this, 'main-timeline');
    const sectionTitle = createElem('h2', sectionTimeline, 'sr-only');
    const timelineFeed = createElem('timeline-feed', sectionTimeline);
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('main-timeline', MainTimeline);
