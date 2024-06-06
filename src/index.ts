import "./scss/styles.scss";
import {addEvenListenerDetailsCard, addEventListenerGridBtn, addEventListenerListBtn, addEventListenerSelect} from './events/events';
import { createGridElement } from './api/create-html-structure'

import { firstLoading} from "./movie/movie";
import { fetchMovieListData } from "./api/api";



 function start () {
    
    // createGridElement();
    addEvenListenerDetailsCard();
    addEventListenerSelect();
    addEventListenerGridBtn();
    addEventListenerListBtn();
   
    firstLoading();
}

start();