import "./scss/styles.scss";
import {addEvenListenerListCard, addEventListenerBackDetailsBtn, addEventListenerGridBtn, addEventListenerListBtn, addEventListenerSearchBtn, addEventListenerSelect} from './events/events';
import { createGridElement } from './api/create-html-structure'

import { firstLoading} from "./movie/movie";
import { fetchMovieListData } from "./api/api";



 function start () {
    
    // createGridElement();
    addEvenListenerListCard();
    addEventListenerSelect();
    addEventListenerGridBtn();
    addEventListenerListBtn();
    addEventListenerBackDetailsBtn();
    addEventListenerSearchBtn();
    firstLoading();
}

start();