import { createDetailsHtmlStructure } from "../api/create-html-structure";
import { appElem } from "../data/default";
import { MovieLayoutMode } from "../models";
import { MovieListType } from "../models/movie-type.enum";
import { MovieDetailsData } from "../models/movie-details-data.interface";
import { setCurrentListMode, setCurrentListType } from "../movie/movie";
import { fetchMovieDetailsData } from "../api/api";




export function addEventListenerSelect() {
    const elem: HTMLElement | null = document.getElementById("selector");
    if(elem===null)throw new Error ('El select element id does not exist.')
    const selectElem = document.querySelector('.form-select');
    selectElem?.addEventListener('change', (event:Event)=>{
        if(appElem) appElem.innerHTML= '';
        const selectElement= event.target as HTMLSelectElement;
        // console.log("Movie list type change!", selectElement?.value) 
        //Esto que hacemos aquí se llama casting. Usamos el as para forzar el tipado, para q sea como MovieListType
        setCurrentListType(selectElement.value as MovieListType);
    });
}



export function addEventListenerGridBtn() {
    const elem: HTMLElement | null = document.getElementById("btn-grid");
    if(elem===null)throw new Error ('El button element id does not exist.');
    elem?.addEventListener('click', (event: Event)=>{
        if(appElem) appElem.innerHTML= '';
        
        setCurrentListMode(MovieLayoutMode.Grid)
        // console.log('Button grid mode clicked')
    })

    
}

export function addEventListenerListBtn() {
    const elem: HTMLElement | null = document.getElementById("btn-list");
    if(elem===null)throw new Error ('El button element id does not exist.');
    elem?.addEventListener('click', (event: Event)=>{
        if(appElem) appElem.innerHTML= '';
        
        setCurrentListMode(MovieLayoutMode.List)
        
    })
   
}


export function addEvenListenerDetailsCard(){
    const elem: HTMLElement | null = document.getElementById("app");
    elem?.addEventListener('click', (event: Event) => {
        if(appElem) appElem.innerHTML= '';
        const idElement= event.target as HTMLElement;
        const idMovie = idElement.getAttribute('data-test-id');

        if(idMovie===null)throw new Error ('El id no es válido.');
        fetchMovieDetailsData(+idMovie);
        // const idElement= event.target as HTMLElement;
        // if(idElement !== undefined || idElement !== null){
        //    const idMovie = idElement.getAttribute('data-test-id');
           
        //    console.log(idMovie);
        //     fetchMovieDetailsData(idMovie);
        // }else{
        //     console.log( 'El elemento id no está definido');
        // }
        
        // console.log(idElement);
        //Tomar valor ID de la imagen
        // const imgEle = document.querySelector('img');
        // const idImg= imgEle?.getAttribute('data-test-id'); 
        //usar function similar a firsloading para pasarle como parametro el id q obtendo
        // return idImg;
    })
}



