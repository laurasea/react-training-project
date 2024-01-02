import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MoviesList } from "../shared/types/Movie";
import { MovieInfo } from "../shared/types/MovieInfo";

const apikey = '';

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.omdbapi.com/",
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<MoviesList, string>({ 
      query: (searchText) => `?apikey=${apikey}&s=${searchText}&type=movie`
    }),
    getMovieInfoById: builder.query<MovieInfo, string>({ 
      query: (movieId) => `?apikey=${apikey}&i=${movieId}`
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieInfoByIdQuery } = moviesApi;
