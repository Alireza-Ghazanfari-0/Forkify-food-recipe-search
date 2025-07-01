import * as model from './model.js';
import recipeView from './view/recipeView.js';
import searchView from './view/searchView.js';
import searchResult from './view/searchResult.js';
import pagination from './view/pagination.js';
import bookmarkView from './view/bookmarkView.js';
//TODO:
//below lines have error when running
//for polyfill everything at old browsers
// import '../../node_modules/core-js/stable';
//for polyyfil async await
// import '../../node_modules/regenerator-runtime/runtime';
/////////
//const selectedFoodRecipe = document.querySelector('.search-result-left-panel');
//export const mainRightPanel = document.querySelector('.right-panel');
//
//
//
const controlRecipe = async function () {
  try {
    //read hashtag address
    const id = window.location.hash.slice(1);
    if (!id) return;
    //load spinner
    recipeView.renderSpinner();
    // read recipe api info and send them to model to make state data
    await model.recipeFunc(id);
    //send processed data from model to view
    recipeView.render(model.state.recipe);
    //controlServings();
  } catch (err) {
    console.error(err);
  }
};
//
//
// const searchBtn = document.querySelector('.search_btn');
// const searchItem = document.querySelector('.search-item');
//const searchForm = document.querySelector('.search-form');
const controlSearch = async function () {
  try {
    const searchId = searchView.getSearchId();
    if (!searchId) return;
    console.log(searchId);
    //
    searchResult.renderSpinner();
    await model.searchFunc(searchId);
    console.log(model.state.search);
    //
    //searchResult.render(model.state.search);
    model.limitedSearchResult(1);
    searchResult.render(model.state.limitedSearch.search2);
    console.log(model.state.limitedSearch.search2);
    pagination.render(model.state);
    // pagination.addHandlerRender();
  } catch (error) {
    console.error(error);
  }
};

const controlPagination = function (page) {
  model.limitedSearchResult(page);
  searchResult.render(model.state.limitedSearch.search2);
  console.log(model.state.limitedSearch.search2);
  pagination.render(model.state);
};

const controlServings = function (newServingNumber) {
  model.servingsChange(newServingNumber);
  recipeView.render(model.state.recipe);
};

const controlBookmark = function () {
  // recipeView.render(model.state.recipe);
  console.log(model.state.recipe);
  if (!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
  } else {
    model.deleteBookmark(model.state.recipe.id);
  }
  console.log(model.state.bookmarks);
  // if (model.state.bookmarks.length != 0) {
  //   bookmarkView.render(model.state.bookmarks);
  // }
  bookmarkView.render(model.state.bookmarks);
  recipeView.render(model.state.recipe);
  // console.log(model.state.recipe);
};

const controlBookmarkReload = function () {
  if (model.state.bookmarks.length != 0) {
    bookmarkView.render(model.state.bookmarks);
  }
};
//by click on left item, load recipe
//selectedFoodRecipe.addEventListener('click', model.recipeFunc);
//by hashtag change and reload page, recipe load
const init = function () {
  recipeView.addHandlerRender(controlRecipe);
  searchView.addHandlerRender(controlSearch);
  pagination.addHandlerRender(controlPagination);
  recipeView.addHandlerRenderServings(controlServings);
  recipeView.addHandlerBookmark(controlBookmark);
  bookmarkView.addHandlerRender(controlBookmarkReload);
};
//
init();
//window.addEventListener('hashchange', model.recipeFunc);
console.log('ali');
