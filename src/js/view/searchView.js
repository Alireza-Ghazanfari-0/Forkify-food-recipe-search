class SearchView {
  parentElement = document.querySelector('.search-form');

  getSearchId() {
    const searchfood = this.parentElement.querySelector('.search-item').value;
    this.clear();
    return searchfood;
  }
  clear() {
    this.parentElement.querySelector('.search-item').value = '';
  }
  addHandlerRender(handler) {
    this.parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
