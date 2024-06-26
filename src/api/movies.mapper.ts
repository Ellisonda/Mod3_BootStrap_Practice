import { baseUrlImg, defaultValue } from "../data/default";
import { MovieListData } from "../models/movie-list-data.interface";



// export function moviesMapper(moviesData: any[]): MovieListData[] {
    
//     if(moviesData === null || moviesData=== undefined)throw new Error('Param "data" is not defined');
//     const {id, title, overview, vote_average, release_date, poster_path}= moviesData;
//     return moviesData.map((movie)=> moviesMapper(movie));
// }

export function movieMapper(data: any): MovieListData{
    const {id, title, overview, vote_average, release_date, poster_path}= data;
    return {
        id: id ?? -1,
        title: title??defaultValue,
        overview: overview ?? defaultValue,
        rate:vote_average ?? defaultValue,
        year: release_date?.split('-')?.shift() ?? -1,
        poster: poster_path ? baseUrlImg+ poster_path : '' 
    };
}