import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICities } from "../../models/models"

interface CitiesState {
  loading: boolean,
  error: string,
  cities: ICities[]

}

const initialState: CitiesState = {
  loading: false,
  error: '',
  cities: []
}

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<ICities[]>) {
      state.loading = false;
      state.cities = action.payload;
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    }
  }
})


export default citiesSlice.reducer;
