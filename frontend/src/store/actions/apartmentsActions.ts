import { AppDispatch } from "..";
import axios from "../../axios";
import { IApartments, ICities } from "../../models/models";
import { apartmentsSlice } from "../slices/apartmentsSlice";
import { citiesSlice } from "../slices/citiesSlice";

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

export const fetchCities = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(citiesSlice.actions.fetching());
      const response = await axios.get<ICities[]>('cities');
      dispatch(citiesSlice.actions.fetchSuccess(response.data));

    } catch (err) {
      dispatch(citiesSlice.actions.fetchError(err as Error));
    }
  }
}
