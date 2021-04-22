export interface OmdbSearchResult {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface OmdbDetailResponse {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Website?: string;
  Ratings?: OmdbRating[];
  DVD?: string;
  BoxOffice?: string;
  Production?: string;
  Type: string;
  Response: 
  string;
}

export interface OmdbRating {
  Source: string;
  Value: string;
}