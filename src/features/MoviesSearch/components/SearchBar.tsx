import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGetMoviesQuery } from "../../moviesApi";
import { useState } from "react";

export const MoviesSearch: React.FC = () => {
    const [searchedText, setSearchedText] = useState<string>('');
    const { data: moviesList, isLoading, isError, error } = useGetMoviesQuery(searchedText, {skip: searchedText == ''});

    const handleSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.value.length > 2) {
            setSearchedText(event.target.value);
        }        
    };

    if (isLoading) {
        return <div>Loading movies...</div>;
    }
    
    if (isError) {
        return <>
        <h5>Movies Search</h5>
        <br/>
        <div>Error while loading movies: {error?.toString()}</div>
        </>;
    }

    return (
        <div>
            <h5>Movies Search</h5>
            <Form.Control type="text" placeholder="Search for movies by title or release year" onChange={(handleSearchText)}/>
            <br/>
            {moviesList?.Response == 'False'
            ? <div>API Response Error: {moviesList.Error}</div>
            : <span/>}
            <ul>
                {moviesList?.Search?.length == 0
                ? <span>No movies found</span>
                : moviesList?.Search?.map(movie => (
                    <li key={movie.imdbID}>
                        <Link to={`/${movie.imdbID}/details`}>
                            {movie.Title} released in {movie.Year}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
      );
}