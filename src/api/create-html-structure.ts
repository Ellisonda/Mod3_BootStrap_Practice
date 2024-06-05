

//Creamos la estructura html del grid


import { baseUrlImg } from "../data/default";
import { MovieListData } from "../models/movie-list-data.interface";
import { MovieListType } from "../models/movie-type.enum";
import { setCurrentListType } from "../movie/movie";
import { getMovieListUrl } from "./api";



export function createGridElement(movieListData: MovieListData[]): HTMLElement {
    const rowElem = document.createElement('div');
    rowElem.className= 'row';
    
    movieListData.forEach((movie)=>{
      const movieElem = createMovieGridElement(movie);
      rowElem.appendChild(movieElem);
    });
    return rowElem;
}

function createMovieGridElement(movie: MovieListData) {
    const colElem = document.createElement('div');
    colElem.className='col col-md-3';
    

    const cardElem = document.createElement('div');
    cardElem.className= 'card h-100';
    colElem.appendChild(cardElem);

    // TODO cardElem.addEventListener('click', eventHandler);

    const imgElem = document.createElement('img');
    imgElem.classList.add('card-img-top');
    imgElem.setAttribute('data-test-id', '');
    imgElem.setAttribute('src', baseUrlImg+movie.poster);
    cardElem.appendChild(imgElem);

    const cardBodyElem = document.createElement('div');
    cardBodyElem.classList.add('card-body');
    cardElem.appendChild(cardBodyElem);

    const titleElem = document.createElement('h5');
    titleElem.classList.add('card-title');
    cardBodyElem.appendChild(titleElem);

    const cardTextElem = document.createElement('p');
    cardTextElem.classList.add('card-text');
    cardElem.appendChild(cardTextElem);

    return colElem;

}

export function createListElement(movieListData: MovieListData[]): HTMLElement {
    const cardElem = document.createElement('div');
    cardElem.classList.add('card');
    
    movieListData.forEach((movie)=>{
        const movieElem = createMovieListElem(movie);
        cardElem.appendChild(movieElem);
      });
    
      return cardElem;
}

function createMovieListElem(movieListData: MovieListData) {
   
    
    const rowElem = document.createElement('div');
    rowElem.className= 'row no-gutters';
    // cardElem.appendChild(rowElem);
    const colImgElem = document.createElement('div');
    colImgElem.className= 'col-md-4';
    rowElem.appendChild(colImgElem);
    // cardElem.addEventListener('click', eventHandler);

    const imgElem = document.createElement('img');
    imgElem.classList.add('card-img');
    imgElem.setAttribute('data-test-id', movieListData.id);
    imgElem.setAttribute('src', movieListData.poster);
    colImgElem.appendChild(imgElem);

    const colBodyElem = document.createElement('div');
    colBodyElem.className= 'col-md-8';
    rowElem.appendChild(colBodyElem); 

    const cardBodyElem = document.createElement('div');
    cardBodyElem.classList.add('card-body');
    colBodyElem.appendChild(cardBodyElem);

    const titleElem = document.createElement('h5');
    titleElem.classList.add('card-title');
    titleElem.textContent= movieListData.title;
    cardBodyElem.appendChild(titleElem);

    const cardTextElem = document.createElement('p');
    cardTextElem.classList.add('card-text');
    cardBodyElem.appendChild(cardTextElem);
    
    return rowElem;

}