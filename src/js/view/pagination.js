import View from './view.js';

class Pagination extends View {
  parentElement = document.querySelector('.page-buttons');
  data;

  generateMarkupElement() {
    //just 1 page
    if (this.data.search.length < this.data.limitedSearch.perPage) return ``;
    //page 1 and has other pages
    if (
      +this.data.limitedSearch.page === 1 &&
      this.data.search.length > this.data.limitedSearch.perPage
    )
      return `<button data-goto-page='${
        +this.data.limitedSearch.page + 1
      }' class="btn btn-dark p-1 pagination-button next-button">Page ${
        +this.data.limitedSearch.page + 1
      } -- > </button>`;
    //in other pages and has multiple pages
    if (
      this.data.limitedSearch.page <
        Math.ceil(this.data.search.length / this.data.limitedSearch.perPage) &&
      this.data.search.length > this.data.limitedSearch.perPage
    )
      return `<button data-goto-page='${
        +this.data.limitedSearch.page - 1
      }' class="btn btn-dark p-1 pagination-button prev-button"> < -- Page ${
        +this.data.limitedSearch.page - 1
      } </button>
          <button data-goto-page='${
            +this.data.limitedSearch.page + 1
          }' class="btn btn-dark p-1 pagination-button next-button">Page ${
        +this.data.limitedSearch.page + 1
      } -- > </button>`;
    //last page
    return `<button data-goto-page='${
      +this.data.limitedSearch.page - 1
    }' class="btn btn-dark p-1 pagination-button prev-button"> < -- Page ${
      +this.data.limitedSearch.page - 1
    } </button>`;
  }

  addHandlerRender(handler) {
    this.parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.pagination-button');
      if (!btn) return;
      console.log(btn);
      const selectedPage = +btn.dataset.gotoPage;
      handler(selectedPage);
    });
  }
}
export default new Pagination();
