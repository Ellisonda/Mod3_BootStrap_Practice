import { MovieListType } from "../models/movie-type.enum";
import { movieMapper } from "./movieDataMapper";


export function config() {
    return {
        baseUrl:"https://api.themoviedb.org/3/",
        langIso:'es-ES',
        apiKey:"15d2ea6d0dc1d476efbca3eba2b9bbfb",
    }
};


export function getMovieListUrl(config, type: MovieListType, page = 1) {
    let url= config.baseUrl;
    url += `movie/${type}`;
    url += `?language=${config.langIso}`;
    url += `page=${page}`;
    url += `&api_key=${config.apiKey}`;
    return url
};

 export async function getMovieList() {
    try {
    const apiConfig = config();
    const url = getMovieListUrl(apiConfig, MovieListType.NowPlaying);
    const response = await fetch(url);
    const data = await response.json();
    const movies: any [] = data?.result?? [];
      return movies.map((movie)=>movieMapper(movie));
    }catch(error) {
        console.error('Something went wrong', error)
    }
}