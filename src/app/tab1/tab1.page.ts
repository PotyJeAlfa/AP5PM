import { Component } from '@angular/core';
import {ApiService} from '../services/api/api.service';
import {Observable , of} from 'rxjs';
import {ModalController} from '@ionic/angular';
import {Library, MovieListsSearch, WMovieLists} from '../models/movie.model';
import {Movie, MoviesService } from '../services/movies/movies.service';
import { StorageService } from '../services/storage/storage.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  movieList$: Observable<MovieListsSearch>[] = [];
  listMovies$ : Library[] = [];

  constructor(
    private apiService: ApiService,
    private modalCtrl: ModalController,
    private moviesService: MoviesService,
    private storageService: StorageService
  ) {

    //this.initMovieList();
  }


  search(event: any) {
    console.log(event.target.value);
    this.movieList$ = [];
    this.movieList$.push(this.apiService.searchMovieList(event.target.value));
  }

  async joinToLibrary(numberID : any){
    this.listMovies$ = [];
    var x : Observable<Library> = this.apiService.searchMovieID(numberID);
    let tmp = await this.storageService.getData("library");
    if(tmp != null){
      tmp.forEach(async (element: Library) => {
        await this.listMovies$.push(element);
      });
    }
    x.subscribe(neco => {
      
      let q : Library = {description : neco.description, 
        original_language : neco.original_language,
        original_title : neco.original_title,
        id : neco.id,
        budget : neco.budget};
      this.listMovies$.push(q);
      this.storageService.saveData("library", this.listMovies$);
      console.log(q);
  });
  }

  async joinToWatchlist(numberID : any){
    this.listMovies$ = [];
    var x : Observable<Library> = this.apiService.searchMovieID(numberID);
    let tmp = await this.storageService.getData("watchlist");
    if(tmp != null){
      tmp.forEach(async (element: Library) => {
        await this.listMovies$.push(element);
      });
    }
    x.subscribe(neco => {

      let q : Library = {description : neco.description, 
        original_language : neco.original_language,
        original_title : neco.original_title,
        id : neco.id,
        budget : neco.budget};
      this.listMovies$.push(q);
      this.storageService.saveData("watchlist", this.listMovies$);
      console.log(q);
  });
  }
}

