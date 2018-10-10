import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../movie';
@Injectable({
  providedIn: 'root'
}) 
export class MoviesDBService {

  constructor() { }
  movies: Movie[]=[];

  add(message: Movie) {
    this.movies.push(message);
  }
  getmovies():  Movie[]  {
   return this.movies;
  }
  addmovies(name: Movie): void {
    if (!name) { return; }
   	this.movies.push(name);
  }
  setmovies(name: any): void {
   	this.movies.push(name);
  }
  getmoviesbyid(id: number): Movie {
    return this.movies[id];
  }
  updatemovies(movie: Movie, id: number): void {
    this.movies[id]= movie;
  }
  deletemovies( id: number): void {
      this.movies.splice(id, 1);
  }
}
