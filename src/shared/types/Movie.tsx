//API model
export interface MoviesList {
  Response: string;
  Search: Search[];
  Error: string;
}

//API model
export interface Search {
  imdbID: string;
  Title: string;
  Year: string;
}