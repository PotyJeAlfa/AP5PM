import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies/movies.service";
import {MovieAccount,MovieChanges,MovieDetails,MovieExternalID,MovieImages,MovieLists} from "../../models/movie.model";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
/*
  movieAccount: MovieAccount;
  movieChanges: MovieChanges;
  movieDetails: MovieDetails;
  movieExternal: MovieExternalID;
  movieImages: MovieImages;
  movieList: MovieLists;
*/

  constructor(
    private moviesService: MoviesService
  ) {
  }

  ngOnInit() {
  }

}

