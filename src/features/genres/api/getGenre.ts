import useGenres from "./getGenres";

const useGenre = (id?: number) => {
  const { data: genres } = useGenres();
  return genres?.results.find((p) => p.id === id);
};

export default useGenre;
