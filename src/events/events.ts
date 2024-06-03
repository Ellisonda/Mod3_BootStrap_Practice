import { MovieListType } from "../models/movie-type";
import { setCurrentListType } from "../movie/movie";




export function addEventListenerSelect() {
    const elem: HTMLElement | null = document.getElementById("selector");
    if(elem===null)throw new Error ('El select element id does not exist.')
    const selectElem = document.querySelector('.form-select');
    selectElem?.addEventListener('change', (event:Event)=>{
        const selectElement= event.target as HTMLSelectElement;
        // console.log("Movie list type change!", selectElement?.value)
        setCurrentListType(selectElement.value as MovieListType);
    });
}



export function addEventListenerGridBtn() {
    const elem: HTMLElement | null = document.getElementById("btngrid");
    if(elem===null)throw new Error ('El button element id does not exist.');
    elem?.addEventListener('click', (event: Event)=>{
        console.log('Button grid mode clicked')
    })

    
}

export function addEventListenerListBtn() {
    const elem: HTMLElement | null = document.getElementById("btnlist");
    if(elem===null)throw new Error ('El button element id does not exist.');
    elem?.addEventListener('click', (event: Event)=>{
        console.log('Button list mode clicked')
    })
    // const btnElem = document.querySelector('.btn-check');
    // btnElem?.addEventListener('click', eventHandlerClick);
}