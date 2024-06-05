import "./scss/styles.scss";
import {addEventListenerGridBtn, addEventListenerListBtn, addEventListenerSelect} from './events/events';
import { createGridElement, eventListenerDetails } from './api/create-html-structure'

import { firstLoading} from "./movie/movie";
import { fetchMovieListData } from "./api/api";



 function start () {
    
    // createGridElement();
    eventListenerDetails();
    addEventListenerSelect();
    addEventListenerGridBtn();
    addEventListenerListBtn();
   
    firstLoading();
}

start();