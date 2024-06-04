import { MovieListType } from "../models/movie-type.enum";


export function movieMapper(data: any) {
    const defaultValue = '(not defined)';
    if(data === null || data=== undefined)throw new Error('Param "data" is not defined');
    const {id, title, overview, vote_average, release_date, poster_path}= data;
    return {
        id,
        title: title??defaultValue,
        description:overview ?? defaultValue,
        rating:vote_average ?? defaultValue,
        year: Number(release_date.split('-').join() ?? -1),
        poster: poster_path
    }
}