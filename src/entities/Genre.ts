export interface GenresApiResponse {
  count: number;
  results: Genre[];
}

export default interface Genre {
  id: number;
  name: string;
  image_background: string;
}
