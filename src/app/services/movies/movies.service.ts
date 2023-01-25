import {Injectable} from '@angular/core';
import { ReplaySubject } from 'rxjs';
import * as internal from 'stream';
import {MovieLists} from '../../models/movie.model';
import { StorageService } from '../storage/storage.service';

export interface Movie {
  id: number;
  description: string;
  name: string;
  favorite_count: number;
  item_count: number;
  iso_639_1: string;
  list_type: string;
  poster_path?: string;
}

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

  public detail: MovieLists = {
    id:550,
    page: 1,
    results: [
      {
        description: "Pick one and then one or two alternates",
        favorite_count: 0,
        id: 7213,
        item_count: 1358,
        iso_639_1: "en",
        list_type: "movie",
        name: "Movie Night",
        poster_path: "/p60VSQL7usdxztIGokJPpHmKWdU.jpg"
      },
    ],
    total_pages:18,
    total_results:358
  };

  private privateMovies: Movie[] = [
    {
      description: "Your favorite and classic movies of the 1990s",
      favorite_count: 0,
      id: 6968,
      item_count: 482,
      iso_639_1: "en",
      list_type: "movie",
      name: "1990",
      poster_path: "/5R68Xn4EG0g5qlaQxpE89zGrtes.jpg"
    },
    {
      description: "All the movies I own on vhs/dvd/bluray or digital.",
      favorite_count: 0,
      id: 9660,
      item_count: 3299,
      iso_639_1: "en",
      list_type: "movie",
      name: "My Film Collection",
      poster_path: "/3TsnEEkBRfQ1b7Gi2FTsuxHFUZq.jpg"
    },
    {
      description: "",
      favorite_count: 0,
      id: 8085,
      item_count: 23,
      iso_639_1: "en",
      list_type: "movie",
      name: "Twists and Shouts",
      poster_path: "/drzZQfdyoAq7pXq4EPI2aZKyGD5.jpg"
    },
    {
      description: "",
      favorite_count: 0,
      id: 12031,
      item_count: 475,
      iso_639_1: "fr",
      list_type: "movie",
      name: "Films",
    },
    {
      description: "List maintained by Movie Collection, the iOS app.",
      favorite_count: 0,
      id: 1718,
      item_count: 610,
      iso_639_1: "en",
      list_type: "movie",
      name: "Movie Collection",
    },
    {
      description: "",
      favorite_count: 0,
      id: 11052,
      item_count: 478,
      iso_639_1: "en",
      list_type: "movie",
      name: "Movies",
    },
    {
      description: "Weekly Box Office Nº1 from 1982",
      favorite_count: 0,
      id: 5576,
      item_count: 647,
      iso_639_1: "es",
      list_type: "movie",
      name: "Weekly Box Office Nº1 from 1982",
      poster_path: "/yTpKlgaNw3fEBndyDYPg3hRloR5.jpg"
    },
    {
      description: "",
      favorite_count: 0,
      id: 4023,
      item_count: 1072,
      iso_639_1: "it",
      list_type: "movie",
      name: "Dvd collection",
      poster_path: "/sHGO5Ct2Vo0KPVnSEmSf3Zo5MIl.jpg"
    },
    {
      description: "Películas para recomendar",
      favorite_count: 0,
      id: 10354,
      item_count: 33,
      iso_639_1: "en",
      list_type: "movie",
      name: "Peliculones",
    },
    {
      description: "",
      favorite_count: 0,
      id: 10141,
      item_count: 304,
      iso_639_1: "en",
      list_type: "movie",
      name: "R3ST",
    },
    {
      description: "",
      favorite_count: 0,
      id: 5829,
      item_count: 396,
      iso_639_1: "de",
      list_type: "movie",
      name: "Criss Filme",
      poster_path: "/gnNU653Lm0cCpdYDaOgjTREf6JI.jpg"
    },
    {
      description: "movies that I've watched",
      favorite_count: 0,
      id: 6357,
      item_count: 1690,
      iso_639_1: "en",
      list_type: "movie",
      name: "watched",
      poster_path: "/7o7fCNaruJGrTjWpmmK2jj8rE7Q.jpg"
    },
    {
      description: "",
      favorite_count: 0,
      id: 9267,
      item_count: 121,
      iso_639_1: "en",
      list_type: "movie",
      name: "Dangerous Hill Classics",
      poster_path: "/f7KYM1uO8f2duhoSY3Bps55mIe.jpg"
    },
    {
      description: "List maintained by Movie Collection, the iOS app.",
      favorite_count: 0,
      id: 3136,
      item_count: 185,
      iso_639_1: "en",
      list_type: "movie",
      name: "Movie Collection",
      poster_path: "/koLwUfgmlT2kr0twamPJ8l6eQIp.jpg"
    },
    {
      description: "",
      favorite_count: 0,
      id: 4557,
      item_count: 591,
      iso_639_1: "hu",
      list_type: "movie",
      name: "Watched",
      poster_path: "/43pgav2uIG0ZNGdcaZX1v073ITv.jpg"
    },
    {
      description: "",
      favorite_count: 0,
      id: 12467,
      item_count: 13,
      iso_639_1: "en",
      list_type: "movie",
      name: "Bradd",
    },
    {
      description: "",
      favorite_count: 0,
      id: 4280,
      item_count: 390,
      iso_639_1: "it",
      list_type: "movie",
      name: "MY COLLECTION",
      poster_path: "/noLXB6fiDAl9uC6O2W26kCDXIFl.jpg"
    },
    {
      description: "Movies that I have watched.",
      favorite_count: 0,
      id: 10482,
      item_count: 567,
      iso_639_1: "en",
      list_type: "movie",
      name: "Watched",
    },
    {
      description: "DVDs I have",
      favorite_count: 0,
      id: 11773,
      item_count: 1158,
      iso_639_1: "en",
      list_type: "movie",
      name: "DVD Collection",
    },
  ];

  private privateServiceSubject = new ReplaySubject<Movie[]>(1);

  

  constructor(
  ) {
  }

  get movies(): Movie[] {
    return this.privateMovies;
  }


}

