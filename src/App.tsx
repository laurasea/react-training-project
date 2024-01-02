// import './App.css'
// import data from './data/movieDetails.json';
// import data2 from './data/personalRating.json'
// import 'bootstrap/dist/css/bootstrap.min.css';
// //import { MoviesCollection } from './features/MovieList/components/MoviesCollection';
// import { MovieDescription } from './features/MovieDetails/components/MovieDescription';
// import { PersonalMovieRating } from './features/MovieDetails/components/PersonalMovieRating';
// import { MoviesSearch } from './features/MoviesSearch/components/SearchBar';


// function App() {
// return(
//   <>
//   <MoviesSearch></MoviesSearch>
//   </>
// )

//   // return (
//   //   <div className='p-3 mb-2 bg-secondary text-white'>
//   //       <MovieDescription movieInfo={data}></MovieDescription>
//   //       <br></br>
//   //       <PersonalMovieRating personalRating={data2}></PersonalMovieRating>
//   //   </div>
//   // )

//   // return (
//   //   <div className='p-3 mb-2 bg-secondary text-white'>
//   //     <h1>
//   //       Movies Collection
//   //     </h1>
//   //     <MoviesCollection movies={data} />      
//   //   </div>
//   // )
// }

import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;

