import { INews } from "../../models/models";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NewsState {
  loading: boolean,
  error: string,
  news: INews[]

}

const initialState: NewsState ={
  loading: false,
  error: '',
  news: []
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
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    }
  }
})

export default newsSlice.reducer;
