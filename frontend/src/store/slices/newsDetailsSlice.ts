import {INews} from "../../models/models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface NewsDetailsState {
  news: INews | null
  loading: boolean
  error: string
}

const initialState: NewsDetailsState = {
  news: null,
  loading: false,
  error: ''
}

export const newsDetailsSlice = createSlice({
  name: 'newsDetails',
  initialState,
  reducers: {
    newsFetching(state) {
      state.loading = true
    },
    newsFetchingSuccess(state, action: PayloadAction<INews>) {
      state.loading = false
      state.error = ''
      state.news = action.payload
    },
    newsFetchingError(state, action: PayloadAction<Error>) {
      state.loading = false
      state.error = action.payload.message
    }
  }
})

export default newsDetailsSlice.reducer
