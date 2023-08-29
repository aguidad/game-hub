import ApiResponse from "src/types/ApiResponse";
import Platform from "src/types/Platform";

import APIClient from "./api-client";
import endpoints from "./endpoints";

export default new APIClient<ApiResponse<Platform>>(endpoints.platforms);
