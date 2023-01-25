import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Library, MovieListsSearch, WMovieLists} from 'src/app/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) {
  }
  searchMovieList(nameMovie : string) : Observable<MovieListsSearch>{
    const url = environment.api.baseUrl + nameMovie;
    console.log(url);
    return this.http.get<MovieListsSearch>(url);
  }

  searchMovieID(id : number) : Observable<Library>{
    const url = environment.api.baseUrlID + id + environment.api.key;
    console.log(url);
    return this.http.get<Library>(url);
  }
}
