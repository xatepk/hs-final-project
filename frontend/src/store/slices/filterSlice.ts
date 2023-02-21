import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilter } from "../../models/models";

interface FilterState {
  city: string,
  rooms: string,
  priceMin: number,
  priceMax: number,
  area: string
}

const initialState: FilterState = {
  city: '',
  rooms: '',
  priceMin: 0,
  priceMax: 0,
  area: ''
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
      state.area = action.payload.area
    },
  }
})

export default filterSlice.reducer
