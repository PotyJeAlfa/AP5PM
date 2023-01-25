import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Movie, MoviesService} from 'src/app/services/movies/movies.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  movies: Movie[];

  form: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private moviesService: MoviesService,
    private fb: FormBuilder
  ) {
    // set places from service getter
    // movies service se musí ještě upravit (funkce movies)
    this.movies = this.moviesService.movies;

    // create form hardcoded
    this.form = this.fb.group({
      ch1: [this.movies[0].homepage, []],
      ch2: [this.movies[1].homepage, []],
      ch3: [this.movies[2].homepage, []],
      ch4: [this.movies[3].homepage, []],
      ch5: [this.movies[4].homepage, []],
      ch6: [this.movies[5].homepage, []]
    });

    this.form.valueChanges.subscribe(data => {
      // set every hardcoded place to save active state
      this.moviesService.setHome(0, data.ch1);
      this.moviesService.setHome(1, data.ch2);
      this.moviesService.setHome(2, data.ch3);
      this.moviesService.setHome(3, data.ch4);
      this.moviesService.setHome(4, data.ch5);
      this.moviesService.setHome(5, data.ch6);
    });
  }

  ngOnInit() {
  }

  async dismiss() {
    // dismiss modal
    await this.modalCtrl.dismiss();
  }
  
}

