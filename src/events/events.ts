import { appElem } from "../data/default";
import { MovieLayoutMode } from "../models";
import { MovieListType } from "../models/movie-type.enum";
import {
  firstLoading,
  setCurrentListMode,
  setCurrentListType,
  showMovieDetails,
  showSearchMovies,
} from "../movie/movie";
import { hideToolbar } from "./toolbar-hiding";

export function addEventListenerSelect() {
  const elem: HTMLElement | null = document.getElementById("selector");
  if (elem === null) throw new Error("El select element id does not exist.");
  const selectElem = document.querySelector(".form-select");
  selectElem?.addEventListener("change", (event: Event) => {
    if (appElem) appElem.innerHTML = "";
    const selectElement = event.target as HTMLSelectElement;
    // console.log("Movie list type change!", selectElement?.value)
    //Esto que hacemos aquí se llama casting. Usamos el as para forzar el tipado, para q sea como MovieListType
    setCurrentListType(selectElement.value as MovieListType);
  });
}

export function addEventListenerGridBtn() {
  const elem: HTMLElement | null = document.getElementById("btn-grid");
  if (elem === null) throw new Error("El button element id does not exist.");
  elem?.addEventListener("click", (event: Event) => {
    if (appElem) appElem.innerHTML = "";

    setCurrentListMode(MovieLayoutMode.Grid);
    // console.log('Button grid mode clicked')
  });
}

export function addEventListenerListBtn() {
  const elem: HTMLElement | null = document.getElementById("btn-list");
  if (elem === null) throw new Error("El button element id does not exist.");
  elem?.addEventListener("click", (event: Event) => {
    if (appElem) appElem.innerHTML = "";

    setCurrentListMode(MovieLayoutMode.List);
  });
}

export function addEvenListenerListCard() {
  const elem: HTMLElement | null = document.getElementById("app");
  elem?.addEventListener("click", (event: Event) => {
    const idElement = event.target as HTMLElement;
    const idMovie = idElement.getAttribute("data-test-id");

    if (idMovie && appElem) {
      hideToolbar();
      appElem.innerHTML = "";
      showMovieDetails(Number(idMovie));
    }
  });
}

export function addEventListenerBackDetailsBtn() {
  const elem: HTMLElement | null = document.getElementById("btn-chevron");
  if (elem === null) throw new Error("Chevron button does not exist.");
  elem?.addEventListener("click", (event: Event) => {
    if (appElem) appElem.innerHTML = "";
    hideToolbar();
    firstLoading();
    // console.log('Button grid mode clicked')
  });
}

export function addEventListenerSearchBtn() {
  const elem = document.getElementById("search-btn");
  if (elem === null) throw new Error("Search button does not exist.");
  elem?.addEventListener("click", (event: Event) => {
    event.preventDefault();
    const searchInput = document.getElementById("search-input");
    const inputValue = searchInput
      ? (searchInput as HTMLInputElement).value
      : "";
    if (appElem) appElem.innerHTML = "";
    //funcion tipo firsloading ysando el valor del input
    showSearchMovies(inputValue);
  });
}
