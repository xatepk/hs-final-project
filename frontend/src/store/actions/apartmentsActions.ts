import { AppDispatch } from "..";
import axios from "../../axios";
import { IApartments } from "../../models/models";
import { apartmentsSlice } from "../slices/apartmentsSlice";

export const fetchApartments = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(apartmentsSlice.actions.fetching());
      const response = await axios.get<IApartments[]>('apartments');
      dispatch(apartmentsSlice.actions.fetchSuccess(response.data));

    } catch (err) {
      dispatch(apartmentsSlice.actions.fetchError(err as Error));
    }
  }
}
