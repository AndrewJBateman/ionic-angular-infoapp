import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {environment} from '../../environments/environment';

// Typescript custom enum for search types (optional)
export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

  const url = '';
  const apiKey = '';
  console.log(url);
  console.log(apiKey);

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  url = environment.API_URL;
  apiKey = environment.API_KEY;
  //  Constructor of the Service with Dependency Injection
  //  @param http The standard Angular HttpClient to make requests
  constructor(private http: HttpClient) { }

  // Get data from the Omdb Api
  // map the result to return only the results that we need
  // @param {string} title Search Term
  // @param {SearchType} type movie, series, episode or empty
  // @returns Observable with the search results
  searchData(title: string, type: SearchType): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`)
      .pipe(
        map(results => results['search'])
      );
  }

  // Get the detailed information for an ID using the "i" parameter
  // @param {string} id imdbID to retrieve information
  // @returns Observable with detailed information
  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }

}
