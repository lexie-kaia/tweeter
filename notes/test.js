const template = document.createElement('template');
template.innerHTML = `
<link rel="stylesheet" href="./test.css" />

<div class="container">
  <h1>Template</h1>
  <slot name="content"></slot>
  <button id="templateBtn">template button</button>
</div>
`;

customElements.define(
  'custom-element',
  class extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' });
      this.shadow.appendChild(template.content.cloneNode(true));
      console.log(template);
      console.log(template.content);
    }

    connectedCallback() {
      console.log(this.shadow);
      this.shadow
        .querySelector('#templateBtn')
        .addEventListener('click', () => {
          alert('clicked');
        });
    }
  }
);
