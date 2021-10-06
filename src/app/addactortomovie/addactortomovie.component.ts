import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-addactortomovie',
  templateUrl: './addactortomovie.component.html',
  styleUrls: ['./addactortomovie.component.css']
})
export class AddactortomovieComponent implements OnInit {
  fullName: string = "";
  bYear: number = 0;
  actorId: string = "";
  title: string = "";
  year: number = 0;
  movieId: string = "";
  actorsDB: any[]= [];
  moviesDB: any[] = [];
  x: any;
  i: any;

  constructor(private dbService: DatabaseService, private router: Router) { }

  ngOnInit(): void {
    this.onGetActors();
    this.onGetMovies();
  }
  onSelectUpdateActor(item: any) {
    this.fullName = item.name;
    this.bYear = item.bYear;
    this.actorId = item._id;
  }

  onSelectUpdateMovie(item: any) {
    this.title = item.title;
    this.year = item.year;
    this.movieId = item.movieId;
  }

  onAddActorToMovie() {
    let actorObj = { id: this.x._id };
      let movieObj = { id: this.i._id };
      this.dbService.addActorToMovie(actorObj, this.i._id).subscribe(result => {
        this.dbService.addMovieToActor(movieObj, this.x._id).subscribe(result => {
          this.onGetMovies();
        });
        this.onGetMovies();
      })
  }

  onGetActors() {
    return this.dbService.getActors().subscribe((data: any) => {
      this.actorsDB = data;
    });
  }
  onGetMovies() {
    return this.dbService.getMovies().subscribe((data: any) => {
      this.moviesDB = data;
    });
  }
}
