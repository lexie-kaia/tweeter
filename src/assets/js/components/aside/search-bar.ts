class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="search-bar">
        <form action="#" method="GET" class="search-form">
          <label class="search-wrapper">
            <span class="search-icon">
              <i class="${this.faIcon}"></i>
            </span>
            <input type="text" placeholder="${this.inputPlaceholder}" class="search-input" />
          </label>
        </form>
      </header>
    `;
  }

  connectedCallback() {
    const searchForm = this.querySelector('.search-form')! as HTMLFormElement;
    searchForm.addEventListener('submit', event => {
      event.preventDefault();
      const searchInput = this.querySelector('.search-input')! as HTMLInputElement;
      const searchValue = searchInput.value;
      alert(`searching for ${searchValue}`);
    });
  }

  get faIcon() {
    return this.getAttribute('fa-icon');
  }

  get inputPlaceholder() {
    return this.getAttribute('input-placeholder');
  }
}

customElements.define('search-bar', SearchBar);
