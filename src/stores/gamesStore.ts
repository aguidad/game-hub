import { create } from "zustand";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {
    platform: Platform;
  }[];
  metacritic: number;
}

export interface Games {
  games: Game[];
  setGames: (games: Game[]) => void;
}

export default create<Games>((set) => ({
  games: [],
  setGames: (games) => set({ games }),
}));
