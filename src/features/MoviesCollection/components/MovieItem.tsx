import { Button } from 'react-bootstrap';
import { MyMovie } from '../../../shared/types/MyMovie';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export interface MovieItemProps {
  movie: MyMovie;
}

export const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  const [removed, setRemoved] = useState(false); 

  const handleRemoveFromLocalStorage = () => {
    localStorage.removeItem(`movie${movie.id}`);
    setRemoved(true);
  }
  
  return (
    <tr>
        <td>
            <Link to={`/${movie.id}/details`}>
            {movie.title}
            </Link>
        </td>
        <td>{movie.genre}</td>
        <td>{movie.director}</td>
        <td>{movie.viewingStatus}</td>
        <td> {removed == false ? (
          <Button variant="outline-danger" onClick={handleRemoveFromLocalStorage}>Remove From Collection</Button>
        ) : (
          <span style={{color: 'red'}}>Removed from Your Collection</span>
        )}
        </td>
    </tr>
  );
};
