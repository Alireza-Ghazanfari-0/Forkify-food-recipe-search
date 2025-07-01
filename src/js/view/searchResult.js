import View from './view.js';
class SearchResult extends View {
  parentElement = document.querySelector('.left-search-result-panel');

  generate(result) {
    return `<a
  href="#${result.id}"
  style="text-decoration: none; color: inherit"
  class="container row ps-4 pt-3 pb-3 mb-2 align-items-end search-result-left-panel"
>
  <div
    class="col-3 d-flex bg-warning"
    style="
      border-radius: 50%;
      height: 4.2rem;
      width: 4.2rem;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    "
  >
    <img
      class=""
      style="height: 100%"
      src="${result.imageUrl}"
      alt=""
    />
  </div>
  <div class="col-9 ps-4">
    <div
      class="row text-danger"
      style="font-family: Arial, Helvetica, sans-serif"
    >
      ${result.title}
    </div>
    <div class="row" style="font-family: times">
      ${result.publisher}
    </div>
  </div>
</a>`;
  }
  generateMarkupElement() {
    return this.data.map(this.generate).join('');
  }
}
export default new SearchResult();
