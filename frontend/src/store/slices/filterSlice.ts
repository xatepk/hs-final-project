import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilter } from "../../models/models";

interface FilterState {
  city: string,
  rooms: number,
  priceMin: number,
  priceMax: number
}

const initialState: FilterState = {
  city: '',
  rooms: 0,
  priceMin: 0,
  priceMax: 0
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterSaving(state, action: PayloadAction<IFilter>) {
      state.city = action.payload.city
      state.rooms = action.payload.rooms
      state.priceMin = action.payload.priceMin
      state.priceMax = action.payload.priceMax
    },
  }
})

export default filterSlice.reducer
