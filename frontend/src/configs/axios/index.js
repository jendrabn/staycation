import axios from "axios";
import { BASE_API_URL } from "../index";
import errorResponseHandler from "./errorResponseHandler";

const instance = axios.create({
  baseURL: `${BASE_API_URL}/api/v1`,
});

instance.interceptors.response.use(
  (response) => response,
  errorResponseHandler
);

export default instance;
