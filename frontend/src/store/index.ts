import { configureStore, combineReducers } from '@reduxjs/toolkit';
import newsReducer from './slices/newsSlice';
import newsDetailsReducer from './slices/newsDetailsSlice';

const rootReducer = combineReducers({
  news: newsReducer,
  newsDetails: newsDetailsReducer
})

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
