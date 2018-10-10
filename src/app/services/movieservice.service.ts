import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Movie } from '../movie';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  private moviesapi = 'http://www.omdbapi.com/?i=tt3896198&apikey=9844614a'; 
  constructor(private http: HttpClient) { }

  getMoviesapi(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesapi)
         .pipe(
        tap(res => console.log('fetched Movies')),
        catchError(this.handleError('getMovies', []))
      );

  }
    private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
 
}
