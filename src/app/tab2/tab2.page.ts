import { Component } from '@angular/core';
import { StorageService } from '../services/storage/storage.service';
import {Observable , of} from 'rxjs';
import { Library } from '../models/movie.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  listMovies$: Observable<Library> [] = [];

  constructor(
    private storageService: StorageService,
  ) {
  }

  async initLibrary(){
    this.listMovies$ = [];
    let tmp = await this.storageService.getData("library");
    if(tmp != null){
      tmp.forEach(async (element: Library) => {
        await this.listMovies$.push(of(element));
      });
      //await this.listMovies$.push(tmp);
    }
    console.log(this.listMovies$);
  }

  ionViewWillEnter(){
    this.initLibrary();
  }

}
