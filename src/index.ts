import "./scss/styles.scss";
import {addEventListenerGridBtn, addEventListenerListBtn, addEventListenerSelect} from './events/events';
import { createMovieGridElement, creaMovieListElement, createRows} from './api/createHtmlEstructure'

import { firstLoading, showMovieList } from "./movie/movie";



 function start () {
    createRows();
    createMovieGridElement();
    addEventListenerSelect();
    addEventListenerGridBtn();
    addEventListenerListBtn();
    // showMovieList();
    // firstLoading();
}

start();