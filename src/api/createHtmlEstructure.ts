

//Creamos la estructura html del grid


import { MovieListType } from "../models/movie-type";
import { setCurrentListType } from "../movie/movie";

//PREGUNTAS: 
// -1. ¿Solo necesito crear una row padre, con sus caracteristicas, y ya con añadir cada card
// se van haciendo wrap de manera infinita? ¿O debo crear otra cada 4 cards?
export function createRows() {
    
    const appElem = document.getElementById('app');
    if(appElem === null) throw new Error('app is not defined');
    const createRow = document.createElement('div');
    createRow.className= 'row row-cols-1 row-cols-md-4 row-cols-sm-2 g-4 mx-5 pb-5';
    appElem.appendChild(createRow);
}

export function createCardsHTML() {
    const rowElem = document.querySelector('.row');
    if(rowElem === null) throw new Error('app is not defined');
    const colElem = document.createElement('div');
    colElem.classList.add('col');
    rowElem.appendChild(colElem);

    const cardElem = document.createElement('div');
    cardElem.className= 'card h-100';
    colElem.appendChild(cardElem);

    // cardElem.addEventListener('click', eventHandler);

    const imgElem = document.createElement('img');
    imgElem.classList.add('card-img-top');
    imgElem.setAttribute('data-test-id', '');
    imgElem.setAttribute('src', 'https://fastly.picsum.photos/id/952/150/200.jpg?hmac=HJ08qVvA2MGOjTdu6JDTP4RMa32BCNpmdtHNZdiU1oU');
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

}

