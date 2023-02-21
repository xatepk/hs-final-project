import { AppDispatch } from "..";
import axios from "../../axios";
import { IApartments, ICities, IRooms } from "../../models/models";
import { apartmentsSlice } from "../slices/apartmentsSlice";
import { handbookSlice } from "../slices/handbookSlice";

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

export const fetchHandbooks = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(handbookSlice.actions.handbookFetching())
      const response = await Promise.all([
        axios.get<ICities[]>('cities'),
        axios.get<IRooms[]>('rooms'),
      ])
      dispatch(handbookSlice.actions.handbookFetchingSuccess([
        response[0].data,
        response[1].data,
      ]))
    } catch (e) {
      dispatch(handbookSlice.actions.handbookFetchingError(e as Error))
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

export const fetchSavedApartments = (token:string) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  return async (dispatch: AppDispatch) => {
    try {
      dispatch(apartmentsSlice.actions.fetching());
      const response = await axios.get<IApartments[]>(`/saved`, config);
      console.log(response)
      dispatch(apartmentsSlice.actions.fetchSavedApatrments(response.data));

    } catch (err) {
      dispatch(apartmentsSlice.actions.fetchError(err as Error));
    }
  }
}


