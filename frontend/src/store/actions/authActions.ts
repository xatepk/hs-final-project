import { AppDispatch } from ".."
import axios from "../../axios"
import { IAuth, IAuthResponse } from "../../models/models"
import { authSlice } from "../slices/authSlice"

export const register = (data: IAuth) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post<IAuthResponse>(`signup`, data);
      console.log(response);
      dispatch(authSlice.actions.loginSuccess({
        access: response.data.token,
        username: data.username
      }))
    } catch (e) {
      console.log('Error register', e)
    }
  }
}

export const login = (data: IAuth) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post<IAuthResponse>(`signin`, data)
      dispatch(authSlice.actions.loginSuccess({
        access: response.data.token,
        username: data.username
      }))
    } catch (e) {
      console.log('Error Login', e)
    }
  }
}
