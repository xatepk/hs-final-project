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

export const fetchApartmentsByCity = (city: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(apartmentsSlice.actions.fetching());
      const response = await axios.get<IApartments[]>(`apartments/${city}`);
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

export const fetchSaveApartment = (id:string, token:string) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  return async (dispatch: AppDispatch) => {
    try {
      dispatch(apartmentsSlice.actions.fetching());
      const response = await axios.patch<IApartments>(`/apartments/${id}/likes`,{}, config);
      dispatch(apartmentsSlice.actions.updateLikedSuccess(response.data));

    } catch (err) {
      dispatch(apartmentsSlice.actions.fetchError(err as Error));
    }
  }
}


