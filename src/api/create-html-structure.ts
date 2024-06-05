

//Creamos la estructura html del grid


import { appElem, baseUrlImg } from "../data/default";
import { addEvenListenerDetailsCard } from "../events/events";
import { MovieDetailsData } from "../models";
import { MovieListData } from "../models/movie-list-data.interface";
import { MovieListType } from "../models/movie-type.enum";
import { setCurrentListType } from "../movie/movie";
import { getMovieListUrl } from "./api";

export function eventListenerDetails () {
    appElem?.addEventListener('click', addEvenListenerDetailsCard);
}


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
    imgElem.setAttribute('data-test-id', movie.id);
    imgElem.setAttribute('src', movie.poster);
    cardElem.appendChild(imgElem);

    const cardBodyElem = document.createElement('div');
    cardBodyElem.classList.add('card-body');
    cardElem.appendChild(cardBodyElem);

    const titleElem = document.createElement('h5');
    titleElem.classList.add('card-title');
    titleElem.innerHTML=movie.title;
    cardBodyElem.appendChild(titleElem);

    const cardTextElem = document.createElement('p');
    cardTextElem.classList.add('card-text');
    cardTextElem.innerHTML= movie.overview;
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

function createMovieListElem(movie: MovieListData) {
   
    
    const rowElem = document.createElement('div');
    rowElem.className= 'row no-gutters';
    // cardElem.appendChild(rowElem);
    const colImgElem = document.createElement('div');
    colImgElem.className= 'col-md-4';
    rowElem.appendChild(colImgElem);
    // cardElem.addEventListener('click', eventHandler);

    const imgElem = document.createElement('img');
    imgElem.classList.add('card-img');
    imgElem.setAttribute('data-test-id', movie.id);
    imgElem.setAttribute('src', movie.poster);
    colImgElem.appendChild(imgElem);

    const colBodyElem = document.createElement('div');
    colBodyElem.className= 'col-md-8';
    rowElem.appendChild(colBodyElem); 

    const cardBodyElem = document.createElement('div');
    cardBodyElem.classList.add('card-body');
    colBodyElem.appendChild(cardBodyElem);

    const titleElem = document.createElement('h5');
    titleElem.classList.add('card-title');
    titleElem.textContent= movie.title;
    cardBodyElem.appendChild(titleElem);

    const cardTextElem = document.createElement('p');
    cardTextElem.classList.add('card-text');
    cardTextElem.textContent= movie.overview;
    cardBodyElem.appendChild(cardTextElem);
    
    return rowElem;

}

export function createDetailsHtmlStructure(movie: MovieDetailsData): HTMLElement {
    const containerElem = document.createElement('div');
    containerElem.className= 'container-fluid d-flex';
    const divImgElem = document.createElement('div');
    divImgElem.className= 'col-3';
    containerElem.appendChild(divImgElem);

    const imgElem = document.createElement('img');
    imgElem.classList.add('card-img');
    imgElem.setAttribute('data-test-id', movie.id);
    imgElem.setAttribute('src', movie.poster);
    divImgElem.appendChild(imgElem);

    const divInfoElem = document.createElement('div');
    divInfoElem.className= 'col-6';
    containerElem.appendChild(divInfoElem);

    const titleElem = document.createElement('h5');
    titleElem.classList.add('');
    titleElem.textContent= movie.title;
    divInfoElem.appendChild(titleElem);

    const yearElem = document.createElement('h4');
    yearElem.classList.add('');
    yearElem.textContent= `${movie.year}`;
    divInfoElem.appendChild(titleElem);

    const overviewElem = document.createElement('p');
    overviewElem.classList.add('card-text');
    overviewElem.textContent= movie.overview;
    divInfoElem.appendChild(overviewElem);

    return containerElem;
}

//TODO CAST Y CREDITS