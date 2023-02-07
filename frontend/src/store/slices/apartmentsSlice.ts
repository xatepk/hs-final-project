import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IApartments, IFilter } from "../../models/models"

interface ApartmentsState {
  loading: boolean,
  error: string,
  apartments: IApartments[],
  apartmentsContainer: IApartments[],
  savedApartments: IApartments[]

}

const initialState: ApartmentsState = {
  loading: false,
  error: '',
  apartments: [],
  apartmentsContainer: [],
  savedApartments: []
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
      state.apartmentsContainer = action.payload;
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
    fetchSavedApatrments(state, action: PayloadAction<IApartments[]>) {
      state.loading = false;
      state.savedApartments = action.payload;
    },

    updateLikedSuccess(state, action: PayloadAction<IApartments>) {
      state.loading = false;

      const itemToReplace = state.apartments.findIndex(({_id}) => _id === action.payload._id);
      if (itemToReplace > -1) {
        state.apartments[itemToReplace] = action.payload;
      }
    },

    apartmentsFilter(state, action: PayloadAction<IFilter>) {
      state.apartments = state.apartmentsContainer
      .filter(i => i.city.includes(action.payload.city))
      .filter(i => i.rooms.toString().includes(action.payload.rooms.toString()))


    }
  }
})


export default apartmentsSlice.reducer;
