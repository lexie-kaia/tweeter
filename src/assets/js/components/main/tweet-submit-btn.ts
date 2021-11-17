class TweetSubmitBtn extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <button type="button" class="submit-btn" aria-label="submit a tweet">tweet</button>
    `;
  }

  connectedCallback() {
    const submitBtn = this.querySelector('.submit-btn')! as HTMLButtonElement;
    submitBtn.addEventListener('click', () => {
      alert('submit a tweet clicked');
    });
  }
}

customElements.define('tweet-submit-btn', TweetSubmitBtn);
