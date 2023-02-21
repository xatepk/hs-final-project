import { INews } from "../../models/models";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NewsState {
  loading: boolean,
  error: string,
  news: INews[],
  filteredNews: INews[]

}

const initialState: NewsState ={
  loading: false,
  error: '',
  news: [],
  filteredNews: []
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<INews[]>) {
      state.loading = false;
      state.news = action.payload;
      state.filteredNews = action.payload;
    },
    searchNews: (state, action: PayloadAction<String>) => {
      const filteredNews = state.news.filter((news) =>
        news.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        filteredNews:
          action.payload.length > 0 ? filteredNews : [...state.news]
      };
    },

    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    }
  }
})

export default newsSlice.reducer;
