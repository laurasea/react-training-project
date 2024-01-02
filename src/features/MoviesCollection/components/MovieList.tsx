import { Table } from "react-bootstrap";
import { MyMovie } from "../../../shared/types/MyMovie";
import { MovieItem } from "./MovieItem";

export interface MovieListProps {
  movies: MyMovie[];
}

export const MovieList: React.FC<MovieListProps> = ({ movies }) => {

    const movieItems = movies?.length > 0 ? movies.map((movie) => (
      <MovieItem 
        key={movie.id}
        movie={movie} />
    )) : null;
  
  return (
    <Table striped bordered hover variant="dark" responsive="md">
        <thead>
        <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Director</th>
            <th>Viewing Status</th>
            <th></th>
        </tr>
        </thead>
        <tbody>{movieItems}</tbody>
    </Table>
    );
};
