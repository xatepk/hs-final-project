import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { ICities, IRooms } from "../../models/models";

interface HandbookState {
  loading: boolean
  cities: ICities[]
  rooms: IRooms[]
  error: string
}

const initialState: HandbookState = {
  loading: true,
  cities: [],
  rooms: [],
  error: ''
}

type PayloadData = [ICities[], IRooms[]]

export const handbookSlice = createSlice({
  name: 'handbook',
  initialState,
  reducers: {
    handbookFetching(state) {
      state.loading = true
    },
    handbookFetchingSuccess(state, action: PayloadAction<PayloadData>) {
      state.loading = false
      state.cities = action.payload[0]
      state.rooms = action.payload[1]
    },
    handbookFetchingError(state, action: PayloadAction<Error>) {
      state.loading = false
      state.error = action.payload.message
    }
  }
})

export default handbookSlice.reducer
