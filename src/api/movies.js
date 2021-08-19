import axios from "axios";
import { API_V3_HOST, API_KEY } from "../constants/api";

export const getPopularList = async () =>
  await axios.get(
    `${API_V3_HOST}/movie/popular?api_key=${API_KEY}&language=ru`
  );

export const getTopList = async () =>
  await axios.get(
    `${API_V3_HOST}/movie/top_rated?api_key=${API_KEY}&language=ru`
  );
