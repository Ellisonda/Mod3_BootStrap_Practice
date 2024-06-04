

import { creaMovieListElement, createMovieGridElement } from "../api/createHtmlEstructure";
import { MovieLayoutMode } from "../models/movie-layout-mode.enum";
import { MovieListData } from "../models/movie-list-data.interface";
import { MovieListType } from "../models/movie-type.enum";

//Para tener en cuenta estos dos variables al inicio
let currentListType = MovieListType.NowPlaying; //por defecto en cartelera
let currentListMode = MovieLayoutMode.Grid; ///por defecti grid
let currentMovieListData: MovieListData[];


export async function firstLoading() {
    // currentMovieListData =  await fetchMovieListData(currentListType);
    showMovieList(currentMovieListData)
}

export async function setCurrentListType(newValue: MovieListType) {
    currentListType = newValue;
    // fetch de nuevo del listado de peliculas
    // currentMovieListData =  await fetchMovieListData(currentListType);
    //voy a api, monto una config con la url, bla bla bla
    showMovieList(currentMovieListData)

}


export function setCurrentListMode(newValue: MovieLayoutMode) {
    currentListMode = newValue;
    //Aqui no necesita realizar llamada al servidor, lo unico es cambiar la disposicion de las peliculas q ya tiene
    showMovieList(currentMovieListData) 

}


export function showMovieList(MovieListData: MovieListData[]) {
    console.log('showMovies', MovieListData);


    const movieListElement= currentListMode === MovieLayoutMode.Grid ? createMovieGridElement() : creaMovieListElement()
    //esto serian dos funciones q añadirian los elementos en el DOM

}


