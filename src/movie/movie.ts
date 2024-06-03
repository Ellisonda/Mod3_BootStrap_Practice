

import { MovieLayoutMode } from "../models/movie-layout-mode.enum";
import { MovieListData } from "../models/movie-list-data.interface";
import { MovieListType } from "../models/movie-type";

//Para tener en cuenta estos dos variables al inicio
let currentListType = MovieListType.NowPlaying;
let currentListMode = MovieLayoutMode.Grid;
let currentMovieListData: MovieListData[];


export function firstLoading() {
    currentMovieListData =  await fetchMovieListData(currentListType);
    showMovieList(currentMovieListData)
}

export function setCurrentListType(newValue: MovieListType) {
    currentListType = newValue;
    // fetch de nuevo del listado de peliculas
    currentMovieListData =  await fetchMovieListData(currentListType);
    //voy a api, monto una config con la url, bla bla bla
    //showMovieList(currentMovieListData)

}


export function setCurrentListMode(newValue: MovieLayoutMode) {
    currentListMode = newValue;
}


export function showMovieList(MovieListData: MovieListData[]) {
    console.log('showMovies', MovieListData);


    currentListMode === MovieLayoutMode.Grid ? createMovieGrid() : creaMovieListElement()
    //esto serian dos funciones q añadirian los elementos en el DOM

}


