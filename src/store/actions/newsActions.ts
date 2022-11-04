import { AppDispatch } from "../index";
import axios from "../../axios"

export const fetchNews = () => {
  return async (dispatch: AppDispatch) => {
    try {

      const response = await axios.get('news');
      console.log(response);

    } catch (err) {
      console.log(err);
    }
  }
}
