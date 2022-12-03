import { configureStore, combineReducers } from '@reduxjs/toolkit';
import newsReducer from './slices/newsSlice';
import newsDetailsReducer from './slices/newsDetailsSlice';
import apartmentsReducer from './slices/apartmentsSlice';

const rootReducer = combineReducers({
  news: newsReducer,
  newsDetails: newsDetailsReducer,
  apartments: apartmentsReducer
})

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
