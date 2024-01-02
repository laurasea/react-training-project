import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { MovieInfo } from "../../shared/types/MovieInfo";

interface MovieInfoState {
  movieInfo: MovieInfo;
  loading: boolean;
  error: string | null;
}

const initialState: MovieInfoState = {
  movieInfo: {
    imdbID: "",
    Title: "",
    Genre: "",
    Plot: "",
    Poster: "",
    imdbRating: 0,
    Director: "",
    Response: "",
    Error: ""
  },
  loading: false,
  error: null,
};

export const movieInfoSlice = createSlice({
  name: "movieInfo",
  initialState,
  reducers: {
    getMovieInfoStart(state) {
      state.loading = true;
    },
    getMovieInfoSuccess(state, action: PayloadAction<MovieInfo>) {
      state.movieInfo = action.payload;
      state.loading = false;
      state.error = null;
    },
    getMovieInfoFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getMovieInfoStart, getMovieInfoSuccess, getMovieInfoFailure } =
  movieInfoSlice.actions;

export const selectMovie = (state: RootState) => state.movieInfo.movieInfo;
export const selectLoading = (state: RootState) => state.movieInfo.loading;
export const selectError = (state: RootState) => state.movieInfo.error;

export default movieInfoSlice.reducer;
