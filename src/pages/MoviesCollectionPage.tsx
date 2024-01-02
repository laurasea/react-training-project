import React from "react";
import { MoviesCollection } from "../features/MoviesCollection/components/MoviesCollection";
import { MyMovie } from "../shared/types/MyMovie";

const MoviesCollectionPage: React.FC = () => {

    const keys = Object.keys(localStorage).filter((key) => key.includes('movie'));
    const movies = keys.map((key) => {
        const movie = localStorage.getItem(key);
        return movie ? JSON.parse(movie) : null
    }) as MyMovie[];    
    
  return (
    <div className='p-3 mb-2 bg-secondary text-white'>
      <h3>Your Movies Collection</h3>
      <MoviesCollection movies={movies} />      
    </div>
  );
};

export default MoviesCollectionPage;
