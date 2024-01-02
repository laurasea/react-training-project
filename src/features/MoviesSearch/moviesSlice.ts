import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { MoviesList } from "../../shared/types/Movie";

interface MoviesState {
  moviesList: MoviesList;
  loading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  moviesList: {
    Response: 'False',
    Search: [],
    Error: ''
  },
  loading: false,
  error: null,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getMoviesStart(state) {
      state.loading = true;
    },
    getMoviesSuccess(state, action: PayloadAction<MoviesList>) {
      state.moviesList = action.payload;
      state.loading = false;
      state.error = null;
    },
    getMoviesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getMoviesStart, getMoviesSuccess, getMoviesFailure } =
  moviesSlice.actions;

export const selectMovies = (state: RootState) => state.movies.moviesList;
export const selectLoading = (state: RootState) => state.movies.loading;
export const selectError = (state: RootState) => state.movies.error;

export default moviesSlice.reducer;
