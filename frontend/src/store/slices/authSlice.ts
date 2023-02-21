import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean
  access: string
  username: string
  id: string
}

const ACCESS_KEY = 'dc-access'
const USERNAME_KEY = 'dc-username'
const EXPIRES_KEY = 'dc-expires'
const USERID_KEY = 'ds-userid'

function getInitialState(): AuthState {
  const expiresIn = localStorage.getItem(EXPIRES_KEY) ?? null

  if (expiresIn && new Date() > new Date(expiresIn)) {
    return {
      isAuthenticated: false,
      access: '',
      username: '',
      id: ''
    }
  }

  return {
    isAuthenticated: Boolean(localStorage.getItem(ACCESS_KEY) ?? ''),
    access: localStorage.getItem(ACCESS_KEY) ?? '',
    username: localStorage.getItem(USERNAME_KEY) ?? '',
    id: localStorage.getItem(USERID_KEY) ?? ''
  }
}

const initialState: AuthState = getInitialState()

interface AuthPayload {
  access: string
  username: string
  id: string
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false
      state.access = ''
      state.username = ''
      state.id = ''
      localStorage.removeItem(ACCESS_KEY)
      localStorage.removeItem(USERNAME_KEY)
      localStorage.removeItem(EXPIRES_KEY)
      localStorage.removeItem(USERID_KEY)
    },
    loginSuccess(state, action: PayloadAction<AuthPayload>) {
      state.access = action.payload.access
      state.username = action.payload.username
      state.id = action.payload.id
      state.isAuthenticated = Boolean(action.payload.access)

      const tokenExpires = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)

      localStorage.setItem(ACCESS_KEY, action.payload.access)
      localStorage.setItem(USERNAME_KEY, action.payload.username)
      localStorage.setItem(EXPIRES_KEY, tokenExpires.toString())
      localStorage.setItem(USERID_KEY, action.payload.id)
    }
  }
})

export default authSlice.reducer
