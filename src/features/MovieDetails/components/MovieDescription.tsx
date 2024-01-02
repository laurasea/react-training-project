import { Col, Row } from "react-bootstrap"
import { MovieInfo } from "../../../shared/types/MovieInfo"

export interface DescriptionProps {
    movieInfo: MovieInfo
}
  
export const MovieDescription: React.FC<DescriptionProps> = ({ movieInfo }) => {
    return (
        <div>
            <Row>
                <Col sm={3}>
                    <img src={movieInfo.Poster} alt="image" />
                </Col>
                <Col sm={8}>
                    <h4>{movieInfo.Title}</h4>
                    <div>
                        <div>Genre: {movieInfo.Genre}</div>
                        <div>Description: {movieInfo.Plot}</div>
                        <div>Director: {movieInfo.Director}</div>
                        <div>Rating: {movieInfo.imdbRating}</div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}