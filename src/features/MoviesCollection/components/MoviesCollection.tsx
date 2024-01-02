import { MovieList } from "./MovieList";
import { MyMovie } from "../../../shared/types/MyMovie";
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export interface MoviesCollectionProps {
    movies: MyMovie[];
  }

export const MoviesCollection: React.FC<MoviesCollectionProps> = ({ movies }) => {
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleTitleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      const filtered = movies.filter(movie => movie.title.toLowerCase().includes(value.toLowerCase()));
      setFilteredMovies(filtered);
  };

  const handleDirectorFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const filtered = movies.filter(movie => movie.director.toLowerCase().includes(value.toLowerCase()));
    setFilteredMovies(filtered);
  };

  const handleStatusFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const filtered = value == "All" ? movies : movies.filter(movie => movie.viewingStatus.includes(value));
    setFilteredMovies(filtered);
  };  
  
  return (
        <div>
          <h5>Movies Filtering</h5>
          <Row>
              <Col>
                <Form.Control type="text" placeholder="Filter by title" onChange={handleTitleFilter}/>
              </Col>
              <Col>
                <Form.Control type="text" placeholder="Filter by director" onChange={handleDirectorFilter}/>
              </Col>
              <Col>
              <Form.Select onChange={handleStatusFilter}>
                <option value="All">All</option>
                <option value="Unwatched">Unwatched only</option>
                <option value="Watched">Watched only</option>
              </Form.Select>
              </Col>
          </Row>
          <br/>
          <br/>
          <h5>List of Movies</h5>
          <MovieList movies={filteredMovies} />
        </div>
      );
}