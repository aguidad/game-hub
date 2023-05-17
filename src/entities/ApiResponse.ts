export default interface ApiResponse<T> {
  count: number;
  results: T[];
}
