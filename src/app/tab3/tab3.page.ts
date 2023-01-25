import { Component } from '@angular/core';
import { StorageService } from '../services/storage/storage.service';
import {Observable , of} from 'rxjs';
import { Library } from '../models/movie.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  listMovies$: Observable<Library> [] = [];

  constructor(
    private storageService: StorageService,
  ) {
  }

  async initWatchlist(){
    this.listMovies$ = [];
    let tmp = await this.storageService.getData("watchlist");
    if(tmp != null){
      tmp.forEach(async (element: Library) => {
        await this.listMovies$.push(of(element));
      });
      //await this.listMovies$.push(tmp);
    }
    console.log(this.listMovies$);
  }

  ionViewWillEnter(){
    this.initWatchlist();
  }

}
