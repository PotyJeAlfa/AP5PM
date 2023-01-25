
export interface WMovieLists{
  description: string;
    favorite_count: number;
    id: number;
    item_count: number;
    iso_639_1: string;
    list_type: string;
    name: string;
    poster_path?: string
}

export interface MovieLists {
id: number;
page: number;
results: WMovieLists[];
total_pages: number;
total_results: number;
};

export interface MovieListsDetailSearch {
  original_language:string;
  original_title:string;
  id:number;
}

export interface MovieListsSearch {
  results?:MovieListsDetailSearch[];
}

export interface Library {
  description: string;
  original_language: string;
  original_title: string;
  id: number;
  budget: number;
}