import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-deletemovie',
  templateUrl: './deletemovie.component.html',
  styleUrls: ['./deletemovie.component.css']
})
export class DeletemovieComponent implements OnInit {
  moviesDB: any[] = [];
  constructor(private dbService: DatabaseService, private router: Router) {}

  // Get all movies
  onGetMovies() {
    this.dbService.getMovies().subscribe((data: any) => {
      this.moviesDB = data;
    });
  }
  onDeleteMovie(item: any) {
    this.dbService.deleteMovie(item._id).subscribe(result => {
      console.log(item._id)
      this.onGetMovies();
      this.router.navigate(["/listmovies"]);
    })
  }
  //Delete Actor
  // onDeleteActor(item: any) {
  //   this.dbService.deleteActor(item._id).subscribe(result => {
  //     this.onGetActors();
  //     this.router.navigate(["/listactors"]);
  //   });
  // }
  ngOnInit(): void {
    this.onGetMovies();
  }

}
