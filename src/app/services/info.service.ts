import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

import { OmdbSearchResult, OmdbDetailResponse } from "../interfaces/interfaces";
import { environment } from "../../environments/environment";

// Typescript custom enum for search types (optional)
export enum SearchType {
  all = "",
  movie = "movie",
  series = "series",
  episode = "episode",
}

@Injectable({
  providedIn: "root",
})
export class InfoService {
  url = environment.API_URL;
  apiKey = environment.API_KEY;
  //  Constructor of the Service with Dependency Injection
  //  @param http The standard Angular HttpClient to make requests
  constructor(private http: HttpClient) {}

  // Get data from the Omdb Api
  // map the result to return only the results "Search" that we need
  // @param {string} title Search Term
  // @param {SearchType} type movie, series, episode or empty
  // @returns Observable with the search results
  searchData(title: string, type: SearchType): Observable<OmdbSearchResult> {
    return this.http
      .get<Observable<OmdbSearchResult>>(
        `${this.url}?&apikey=${this.apiKey}&s=${encodeURI(title)}&type=${type}`
      )
      .pipe(
        map((results) => {
          console.log("RAW: ", results);
          return results["Search"];
        })
      );
  }
  // Get detailed information using the "i" (not "id") parameter
  // @param {string} id imdbID to retrieve information
  // @returns Observable with detailed information
  getDetails(id: string): Observable<any> {
    return this.http
      .get<Observable<OmdbDetailResponse>>(
        `${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`
      ).pipe(tap(res => console.log("response: ", res)))
  }
}
