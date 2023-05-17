import axios from "axios";
import endpoints from "./endpoints";

export default axios.create({
  baseURL: endpoints.BASE_URL,
  params: { key: "8576533b07664bae91b57dd71bcde3c6" },
});

// axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
