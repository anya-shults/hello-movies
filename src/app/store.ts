import { configureStore } from '@reduxjs/toolkit';
import favoriteShowsReducer from '../features/favoriteShows/favoriteShowsSlice';

export const store = configureStore({
  reducer: {
    favoriteShows: favoriteShowsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
