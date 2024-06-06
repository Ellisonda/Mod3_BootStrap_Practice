import { chevronElem } from "../data/default";
import { firstLoading } from "../movie/movie";


export function hideToolbar() {
    const listTool= document.getElementById('list-toolbar');
    const detailsTool= document.getElementById('details-toolbar');
    listTool?.toggleAttribute('hidden');
    detailsTool?.toggleAttribute('hidden');
}

export function backToList() {
    chevronElem?.addEventListener('click', ()=>{
        firstLoading();
    });
}