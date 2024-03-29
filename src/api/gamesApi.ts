import ApiResponse from "src/types/ApiResponse";
import Game from "src/types/Game";

import APIClient from "./api-client";
import endpoints from "./endpoints";

export default new APIClient<ApiResponse<Game>>(endpoints.games);
