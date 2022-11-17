import { AppDispatch } from "../index";
import axios from "../../axios"
import { INews } from "../../models/models";
import { newsSlice } from "../slices/newsSlice";

export const fetchNews = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(newsSlice.actions.fetching);
      const response = await axios.get<INews[]>('news');
      dispatch(newsSlice.actions.fetchSuccess(response.data));

    } catch (err) {
      dispatch(newsSlice.actions.fetchError(err as Error));
    }
  }
}
