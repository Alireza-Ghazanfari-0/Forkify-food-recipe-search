import View from './view.js';
class RecipeView extends View {
  parentElement = document.querySelector('.right-panel');
  data;

  generateMarkupElement() {
    return `<div
    style="
      height: 61vh;
      justify-content: center;
      align-items: center;
      overflow-y: hidden;
    "
    class="d-flex"
  >
    <img
      src="${this.data.imageUrl}"
      alt=""
      style="width: 120%"
      class="align-self-center foodimage"
    />
    <h2
      style="
        position: absolute;
        left: 65%;
        top:20rem;
        transform: translate(-50%, 20%) skewY(-6deg);
        text-transform: uppercase;
        width: 30%;
      "
      class="text-center "
    >
      <span
        class="foodname p-1"
        style="
          background-image: linear-gradient(
            to bottom right,
            #ffc966,
            #ff8e9e
          );
        "
        >${this.data.title}</span
      >
    </h2>
  </div>

  <div
    style="height: 13vh; background-color: rgba(244, 240, 240, 0.745)"
    class="row ms-0 me-0 text-center align-content-center"
  >
    <div class="col-3 align-self-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path
          d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM11 6v6c0 0.389 0.222 0.727 0.553 0.894l4 2c0.494 0.247 1.095 0.047 1.342-0.447s0.047-1.095-0.447-1.342l-3.448-1.723v-5.382c0-0.552-0.448-1-1-1s-1 0.448-1 1z"
          fill="currentColor"
        ></path>
      </svg>
      <span class="foodtime"> ${this.data.cookingTime} </span>
      <span> MINUTES</span>
    </div>
    <div class="col-3 text-end align-self-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path
          d="M18 21v-2c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464h-8c-1.38 0-2.632 0.561-3.536 1.464s-1.464 2.156-1.464 3.536v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.829 0.335-1.577 0.879-2.121s1.292-0.879 2.121-0.879h8c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM14 7c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464-2.632 0.561-3.536 1.464-1.464 2.156-1.464 3.536 0.561 2.632 1.464 3.536 2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464 1.464-2.156 1.464-3.536zM12 7c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121zM24 21v-2c-0.001-1.245-0.457-2.385-1.215-3.261-0.652-0.753-1.528-1.311-2.529-1.576-0.534-0.141-1.081 0.177-1.222 0.711s0.177 1.081 0.711 1.222c0.607 0.161 1.136 0.498 1.528 0.952 0.454 0.526 0.726 1.206 0.727 1.952v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM15.752 4.099c0.803 0.206 1.445 0.715 1.837 1.377s0.531 1.47 0.325 2.273c-0.176 0.688-0.575 1.256-1.105 1.652-0.314 0.235-0.675 0.409-1.063 0.511-0.534 0.14-0.854 0.687-0.713 1.221s0.687 0.854 1.221 0.713c0.637-0.167 1.232-0.455 1.752-0.844 0.884-0.66 1.552-1.613 1.845-2.758 0.342-1.337 0.11-2.689-0.542-3.788s-1.725-1.953-3.062-2.296c-0.535-0.137-1.080 0.186-1.217 0.721s0.186 1.080 0.721 1.217z"
          fill="currentColor"
        ></path>
      </svg>
      <span class="foodserving"> ${
        this.data.servings
      } </span><span> SERVINGS</span>
    </div>

    <div class="col-1 pe-0" style="margin-right: -0.5rem">
      <button
        type="button"
        class="btn btn-decrease btn-servings"
        style="border: none"
        data-servings=${+this.data.servings - 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM8 13h8c0.552 0 1-0.448 1-1s-0.448-1-1-1h-8c-0.552 0-1 0.448-1 1s0.448 1 1 1z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
    </div>
    <div class="col-1 ps-0">
      <button class="btn btn-increase btn-servings" style="border: none" 
      data-servings=${+this.data.servings + 1}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM8 13h3v3c0 0.552 0.448 1 1 1s1-0.448 1-1v-3h3c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3v-3c0-0.552-0.448-1-1-1s-1 0.448-1 1v3h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
    </div>

    <div class="col-4 align-self-center">

    <button class="btn btn-bookmark" style="border: none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
     ${
       this.data.bookmarked
         ? '<polygon points="18.419 21.814, 19.000 22.000, 20.000 21.000, 20.000 5.000, 19.121 2.879, 17.000 2.000, 7.000 2.000, 4.879 2.879, 4.000 5.000, 4.000 21.000, 4.186 21.581, 5.581 21.813, 12.000 17.229" />'
         : '<path d="M18.419 21.814c0.161 0.116 0.363 0.186 0.581 0.186 0.552 0 1-0.448 1-1v-16c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-10c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v16c-0.001 0.199 0.060 0.404 0.186 0.581 0.321 0.449 0.946 0.554 1.395 0.232l6.419-4.584zM18 19.057l-5.419-3.871c-0.355-0.254-0.819-0.242-1.162 0l-5.419 3.871v-14.057c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h10c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707z" fill="currentColor"></path>'
     }
        
        
      </svg>
      </button>

    </div>
  </div>
  <div style="min-height: fit-content">
    <p
      style="font-weight: bold; color: #7d4563"
      class="text-center fs-5 mt-2"
    >
      RECIPE INGREDIENTS
    </p>

    <ul
      class="foodingredients"
      style="
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        list-style: none;
        font-family: monospace;
      "
    >

    ${this.data.ingredients
      .map(ing => {
        return ` <li class="p-3">
    <span>${ing.quantity}</span> <span>${ing.unit}</span> <span>${ing.description}</span>
  </li>`;
      })
      .join('')}
      
    </ul>
  </div>
  <div
    style="
      min-height: fit-content;
      background-color: rgba(244, 240, 240, 0.745);
    "
    class="text-center px-5"
  >
    <div class="mb-4 fs-4" style="color: #e484b9; font-weight: bold">
      HOW TO COOK IT
    </div>
    <div class="px-3">
      This recipe was carefully designed and tested by
      <span class="foodpublisher">${this.data.publisher}</span>. Please check
      out directions at their website.
    </div>
    <button class="mt-4 btn btn-danger fooddirection" >
      <a style="text-decoration: none; color: inherit" href="${
        this.data.sourceUrl
      }">DIRECTIONS</a>
    </button>
  </div>
</div>`;
  }

  addHandlerRenderServings(handler) {
    this.parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn-servings');
      if (!btn) return;
      console.log(btn);
      const newServing = +btn.dataset.servings;
      console.log(newServing);
      if (newServing > 0) handler(newServing);
    });
  }

  addHandlerBookmark(handler) {
    this.parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn-bookmark');
      if (!btn) return;
      //console.log(btn);
      handler();
    });
  }

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(item =>
      window.addEventListener(item, handler)
    );
  }
}

export default new RecipeView();
