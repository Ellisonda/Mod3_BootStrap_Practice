import { defaultValue } from "../../data/default";
import { MovieDetailsData } from "../../models/movie-details-data.interface";
import { MovieListData } from "../../models/movie-list-data.interface";

 




export function movieDetailsMapper(data: any): MovieDetailsData{
    const {id, title, director, overview, vote_average, release_date, poster_path, cast, crew}= data;
    return {
        id: id ?? -1,
        title: title??defaultValue,
        director: director ?? defaultValue,
        overview: overview ?? defaultValue,
        rate:vote_average ?? defaultValue,
        year: Number(release_date.split('-').join() ?? -1),
        poster: poster_path ?? defaultValue,
        cast: cast?? defaultValue,
        crew: crew?? defaultValue,
        backdrop:poster_path
    };
}


// export function movieDetailsMappper(): MovieDetailsData {
//     return {
//         // id,
//         // title,
//         // cast: movieCastMapper(credits.cast)
//     }
// }

// function movieCastMapper(cast: any) {

// }

//todo MovieDetailsCastData