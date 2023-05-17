import Genre from "./Genre";

export interface GameQuery {
  genre: Genre;
  platform: Platform;
  orderBy: string;
  searchText: string;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface GamesApiResponse {
  count: number;
  results: Game[];
}

export default interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {
    platform: Platform;
  }[];
  metacritic: number;
  genres: Genre[];
  rating_top: number;
}
