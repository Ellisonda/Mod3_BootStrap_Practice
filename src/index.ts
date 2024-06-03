import "./scss/styles.scss";
import {createCardsHTML, createRows} from './api/createHtmlEstructure';



async function start () {
    createRows();
    createCardsHTML();
}

start();