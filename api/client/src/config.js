import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://khaledmarasablog.herokuapp.com/api/",
});
