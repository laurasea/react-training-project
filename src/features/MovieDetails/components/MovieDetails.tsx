import { useParams } from "react-router-dom";
import { useGetMovieInfoByIdQuery } from '../../../features/moviesApi';
import { PersonalMovieRating } from './PersonalMovieRating';
import { MovieDescription } from "./MovieDescription";

const MovieDetails: React.FC = () => {
    const { movieId} = useParams();
    const { data: movieInfo, isLoading, isError, error } = useGetMovieInfoByIdQuery(String(movieId));

    if (isLoading) {
        return <div>Loading movie details...</div>;
    }
    if(movieInfo?.Response == 'False')
    {
        return <>
        <h5>Movie Details</h5>
        <br/>
        <div>API Response Error: {movieInfo.Error}</div>
        </>;
    }
    if (isError) {
        return <div className='p-3 mb-2 bg-secondary text-white'>
        <h5>Movie Details</h5>
        <br/>
        <div>Error while loading movie details: {error?.toString()}</div>
        </div>;
    }

    return (
        <div className='p-3 mb-2 bg-secondary text-white'>
            <h5>Movie Details</h5>
            <MovieDescription movieInfo={movieInfo!}></MovieDescription>
            <br></br>
            <PersonalMovieRating movieInfo={movieInfo!}></PersonalMovieRating>
        </div>
    );
  };
  
  export default MovieDetails;