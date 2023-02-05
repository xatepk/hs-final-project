import { AppDispatch } from "../index";
import axios from "../../axios"
import { INews } from "../../models/models";
import { newsSlice } from "../slices/newsSlice";
import { newsDetailsSlice } from "../slices/newsDetailsSlice";

export const fetchNews = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(newsSlice.actions.fetching());
      const response = await axios.get<INews[]>('news');
      dispatch(newsSlice.actions.fetchSuccess(response.data));

    } catch (err) {
      dispatch(newsSlice.actions.fetchError(err as Error));
    }
  }
}

export const fetchNewsById = (id: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(newsDetailsSlice.actions.newsFetching());
      const response = await axios.get<INews>(`news/${id}`);
      dispatch(newsDetailsSlice.actions.newsFetchingSuccess(response.data));


    } catch (err) {
      dispatch(newsDetailsSlice.actions.newsFetchingError(err as Error));
    }
  }
}
