//TODO:
//below lines have error when running
//for polyfill everything at old browsers
// import '../../node_modules/core-js/stable';
//for polyyfil async await
// import '../../node_modules/regenerator-runtime/runtime';

export const state = {
  recipe: {},
  search: {},
  limitedSearch: {
    search2: {},
    perPage: 10,
    page: 1,
  },
  bookmarks: [],
};

export const recipeFunc = async function (id) {
  try {
    // get food recipe from API
    const recipeAPI = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const res = await recipeAPI.json();
    const data = await res.data;

    //  if (!recipeAPI.ok) throw new Error(`${data.message}(${res.status})`);
    let recipe = data.recipe;

    recipe = {
      id: recipe.id,
      cookingTime: recipe.cooking_time,
      imageUrl: recipe.image_url,
      publisher: recipe.publisher,
      servings: recipe.servings,
      title: recipe.title,
      ingredients: recipe.ingredients,
      sourceUrl: recipe.source_url,
    };
    state.recipe = recipe;
    if (state.bookmarks.some(item => item.id === state.recipe.id)) {
      state.recipe.bookmarked = true;
    } else {
      state.recipe.bookmarked = false;
    }
    console.log(state);
  } catch (error) {
    console.error(error);
  }
};

export const searchFunc = async function (searchId) {
  try {
    const searchAPI = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchId}`
    );
    const res = await searchAPI.json();
    const data = await res.data;

    state.search = data.recipes.map(i => {
      return {
        id: i.id,
        title: i.title,
        imageUrl: i.image_url,
        publisher: i.publisher,
      };
    });
  } catch (error) {
    console.error(error);
  }
};

export const limitedSearchResult = function (pageNumber = 1) {
  state.limitedSearch.page = pageNumber;
  const start = (state.limitedSearch.page - 1) * state.limitedSearch.perPage;
  const until = start + state.limitedSearch.perPage;
  state.limitedSearch.search2 = state.search.slice(start, until);
};

export const servingsChange = function (newServingNumber) {
  state.recipe.ingredients.forEach(element => {
    element.quantity =
      (element.quantity * newServingNumber) / state.recipe.servings;
  });
  state.recipe.servings = newServingNumber;
};

//function for save bookmarks at local storage
const storageBookmarks = function () {
  localStorage.setItem('bookmarkKey', JSON.stringify(state.bookmarks));
};

//function for add data to bookmarks array
export const addBookmark = function (recipe) {
  state.bookmarks.push(recipe);
  state.recipe.bookmarked = true;
  storageBookmarks();
};

//function for delete data from bookmarks array
export const deleteBookmark = function (id) {
  const index = state.bookmarks.findIndex(i => i.id == id);
  state.bookmarks.splice(index, 1);
  state.recipe.bookmarked = false;
  storageBookmarks();
};

//function for load bookmark array
const loadLocalStorage = function () {
  const data = localStorage.getItem('bookmarkKey');
  if (data) state.bookmarks = JSON.parse(data);
};
loadLocalStorage();

//reset local storage if needed-->turn off above function first
const removeLocalStorage = function () {
  localStorage.clear('bookmarKey');
};
//removeLocalStorage();
