import { Apiconfig } from "../models/api-config.interface";
import { ApiSearchconfig } from "../models/api-search-config.interface";
import { MovieDetailsData } from "../models/movie-details-data.interface";
import { MovieListType } from "../models/movie-type.enum";
import { movieDetailsMapper } from "./mappers/movie-details.mapper";
import { movieMapper } from "./movies.mapper";

export function config() {
  return {
    baseUrl: "https://api.themoviedb.org/3/",
    langIso: "es-ES",
    apiKey: "15d2ea6d0dc1d476efbca3eba2b9bbfb",
  };
}

export function getMovieListUrl(
  config: Apiconfig,
  type: MovieListType,
  page = 1
) {
  let url = config.baseUrl;
  url += `movie/${type}`;
  url += `?language=${config.langIso}`;
  url += `page=${page}`;
  url += `&api_key=${config.apiKey}`;
  return url;
}

export function getMovieDetailsUrl(config: Apiconfig, movieId: number) {
  let url = config.baseUrl;
  url += `movie/${movieId}`;
  url += `?language=${config.langIso}`;
  url += `&api_key=${config.apiKey}`;
  url += `&append_to_response=credits`;
  return url;
}

export function getMovieSearchUrl(config: Apiconfig, query: string, page = 1) {
  let url = config.baseUrl;
  url += `search/movie`;
  url += `?query=${query}`;
  url += `&language=${config.langIso}`;
  url += `&page=${page}`;
  url += `&api_key=${config.apiKey}`;
  return url;
}

export async function fetchMovieListData(type: MovieListType) {
  const apiConfig = config();
  const url = getMovieListUrl(apiConfig, type);
  const response = await fetch(url);
  const data = await response.json();
  const movies: any[] = data?.results ?? [];
  return movies.map((movie) => movieMapper(movie));
}

export async function fetchMovieDetailsData(
  idMovie: number
): Promise<MovieDetailsData> {
  const apiConfig = config();
  const url = getMovieDetailsUrl(apiConfig, idMovie);
  const response = await fetch(url);
  const movieData = await response.json();

  return movieDetailsMapper(movieData);
}

export async function fetchSearchMovie(query: string) {
  const apiConfig = config();
  const url = getMovieSearchUrl(apiConfig, query);
  const response = await fetch(url);
  const data = await response.json();
  const movies: any[] = data?.results ?? [];
  return movies.map((movie) => movieMapper(movie));
}
// export async function fecthSearchMovie(query: string) {
//     if(query?.length > 0){

//         const url = getMovieDetailsUrl(apiConfig, movieId);
//     const response = await fetch(url);
//     const data = await response.json();
//     const movies: any [] = data?.results ?? [];

//     }

// }

// funtion getSearchMovieUrl(config:Apiconfig, query){
//     let url= config.baseUrl;
//     url += `/search/movie`;
//     url +=
//     url += `?language=${config.langIso}`;
//     url += `&api_key=${config.apiKey}`;
//     url += `&append_to_response=credits`;
//     return url
// }
