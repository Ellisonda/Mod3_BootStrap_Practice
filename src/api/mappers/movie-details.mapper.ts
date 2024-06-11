import { baseUrlDetailsImg, baseUrlImg, defaultValue } from "../../data/default";
import { MovieDetailsData } from "../../models/movie-details-data.interface";
import { MovieListData } from "../../models/movie-list-data.interface";

 




export function movieDetailsMapper(data: any): MovieDetailsData{
    const {id, title, director, overview, vote_average, release_date, poster_path, credits, backdrop_path}= data;
    return {
        id: id ?? -1,
        title: title??defaultValue,
        director: director ?? defaultValue,
        overview: overview ?? defaultValue,
        rate:vote_average ?? defaultValue,
        year: Number(release_date.split('-').join() ?? -1),
        poster: baseUrlImg+poster_path ?? defaultValue,
        cast: movieCastMapper(credits?.cast?? defaultValue),
        crew: movieCrewMapper(credits?.crew?? defaultValue),
        backdrop:baseUrlDetailsImg+backdrop_path ?? defaultValue
    };
}




function movieCastMapper(cast: any[]) {
    return cast.map((actor)=>{
        const {id, name, character, profile_path: profile}= actor;
        return {id, name, character, profile};
    });
}

function movieCrewMapper(crew: any[]) {
    return crew.map((member)=>{
        const {id, name, character, profile_path: profile}= member;
        return {id, name, character, profile};
});
}
