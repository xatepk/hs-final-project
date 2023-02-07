import { configureStore, combineReducers } from '@reduxjs/toolkit';
import newsReducer from './slices/newsSlice';
import newsDetailsReducer from './slices/newsDetailsSlice';
import apartmentsReducer from './slices/apartmentsSlice';
import citiesReducer from './slices/citiesSlice';
import authReducer from './slices/authSlice';
import handbookReducer from './slices/handbookSlice';
import filterReducer from './slices/filterSlice';

const rootReducer = combineReducers({
  news: newsReducer,
  newsDetails: newsDetailsReducer,
  apartments: apartmentsReducer,
  cities: citiesReducer,
  auth: authReducer,
  handbook: handbookReducer,
  filter: filterReducer
})

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
