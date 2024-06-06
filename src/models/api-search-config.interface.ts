

export interface ApiSearchconfig {
    baseUrl: string;
    search:string;
    query: string;
    langIso: string;
    apiKey: string;
};



// let url= config.baseUrl;
//     url += `/search/movie`;
//     url += `?query=${query}`;
//     url += `?language=${config.langIso}`;
//     url += `page=${page}`;
//     url += `&api_key=${config.apiKey}`;