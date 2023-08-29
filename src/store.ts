import { create } from "zustand";

import { GameQuery } from "src/types/Game";

interface GameQueryStore {
  gameQuery: GameQuery;
  setSelectedGenre: (id: number) => void;
  setSelectedPlatform: (id: number) => void;
  setSearchText: (searchText: string) => void;
  onSorting(orderBy: string): void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {} as GameQuery,
  setSearchText: (searchText) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, searchText } })),
  setSelectedGenre: (id) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genre: id } })),
  setSelectedPlatform: (id) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platform: id } })),
  onSorting: (orderBy) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, orderBy } })),
}));

export default useGameQueryStore;
