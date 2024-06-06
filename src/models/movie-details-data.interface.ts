export interface MovieDetailsData {
    id: string;
    title: string;
    overview: string;
    rate: number;
    crew: MovieDetailsCrewData[];
    cast: MovieDetailsCastData[];
    director: string;
    year: number;
    poster: string;
    backdrop: string;
}

export interface MovieDetailsCastData {
    id:string;
    name:string;
    character: string;
    profile: string
}
export interface MovieDetailsCrewData {
    id:string;
    name:string;
    character: string;
    profile: string
}
