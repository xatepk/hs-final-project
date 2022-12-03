import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IApartments } from "../../models/models"

interface ApartmentsState {
  loading: boolean,
  error: string,
  apartments: IApartments[]

}

const initialState: ApartmentsState = {
  loading: false,
  error: '',
  apartments: []
}

export const apartmentsSlice = createSlice({
  name: 'apartments',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<IApartments[]>) {
      state.loading = false;
      state.apartments = action.payload;
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    }
  }
})

export default apartmentsSlice.reducer;
