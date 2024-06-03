import "./scss/styles.scss";
import {addEventListenerGridBtn, addEventListenerListBtn, addEventListenerSelect} from './events/events';
import { createCardsHTML, createRows} from './api/createHtmlEstructure'

import { firstLoading } from "./movie/movie";



 function start () {
    createRows();
    createCardsHTML();
    addEventListenerSelect();
    addEventListenerGridBtn();
    addEventListenerListBtn();

    firstLoading();
}

start();