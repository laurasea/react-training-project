import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "../features/moviesApi";
import moviesReducer from "../features/MoviesSearch/moviesSlice";
import movieInfoReducer from "../features/MovieDetails/movieInfoSlice";

const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    movies: moviesReducer,
    movieInfo: movieInfoReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
