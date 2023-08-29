import ApiResponse from "src/types/ApiResponse";
import Genre from "src/types/Genre";

import APIClient from "./api-client";
import endpoints from "./endpoints";

export default new APIClient<ApiResponse<Genre>>(endpoints.genres);
