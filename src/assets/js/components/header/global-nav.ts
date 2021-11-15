import { createElem } from '../../helper';

// <nav class="global-nav">
//   <nav-logo></nav-logo>
//   <nav-menulist></nav-menulist>
//   <nav-tweet></nav-tweet>
// </nav>

class GlobalNav extends HTMLElement {
  render() {
    const globalNav = createElem('nav', this, 'global-nav');

    const navLogo = createElem('nav-logo', globalNav);
    const navMenuList = createElem('nav-menulist', globalNav);
    const navTweet = createElem('nav-tweet', globalNav);
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('global-nav', GlobalNav);
