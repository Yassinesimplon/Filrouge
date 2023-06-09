import Axios from "axios";

export const fetcher = (url) =>
  Axios.get(url)
    .then((res) => res.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });