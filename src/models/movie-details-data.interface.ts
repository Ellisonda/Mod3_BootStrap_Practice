export interface MovieDetailsData {
    id: string;
    title: string;
    overview: string;
    rate: string;
    crew: MovieDetailsCrewData[];
    cast: MovieDetailsCastData[];
    director: string;
    year: string;
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

