import { configureStore, combineReducers } from '@reduxjs/toolkit';
import newsReducer from './slices/newsSlice';

const rootReducer = combineReducers({
  news: newsReducer
})

export const store =  configureStore({
  reducer: rootReducer,
});
