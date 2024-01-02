import { Button, Form } from "react-bootstrap"
import { MyMovie } from "../../../shared/types/MyMovie"
import { ChangeEvent, useEffect, useState } from "react"
import { MovieInfo } from "../../../shared/types/MovieInfo"
import { ViewingStatus } from "../../../shared/enums/ViewingStatusEnum"

export interface PersonalMovieRatingProps {
    movieInfo: MovieInfo
  }

export const PersonalMovieRating: React.FC<PersonalMovieRatingProps> = ({ movieInfo }) => {
    const ratingValues = Array.from({length: 10}, (_, index) => index+1);
    const [myMovie, setMyMovie] = useState<MyMovie>({id: movieInfo.imdbID, title: movieInfo.Title, 
        genre: movieInfo.Genre, director: movieInfo.Director, viewingStatus: ViewingStatus.Unwatched, 
        personalRating: 1, notes: ''});
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        const storedMovie = localStorage.getItem(`movie${movieInfo.imdbID}`);
        if(storedMovie) {
            const parsedMovie = JSON.parse(storedMovie);
            setMyMovie(parsedMovie);
        }
    }, [movieInfo.imdbID]);
    
    const handleDataChange = (event: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setMyMovie((prevData) => ({ ...prevData, [name]: value}));
    }

    const handleSaveToLocalStorage = () => {
        localStorage.setItem(`movie${movieInfo.imdbID}`, JSON.stringify(myMovie));
        setMessage('Saved!');
    }
    
    const handleRemoveFromLocalStorage = () => {
        localStorage.removeItem(`movie${movieInfo.imdbID}`);
        setMyMovie((prevData) => ({ ...prevData, notes: '', personalRating: 1, viewingStatus: ViewingStatus.Unwatched}));
        setMessage('Removed!');
    }

    return (
        <div>
            <h5>Personal Rating</h5>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Viewing Status</Form.Label>
                    <Form.Select name="viewingStatus" value={myMovie.viewingStatus} onChange={handleDataChange}>
                        <option value="Unwatched">Unwatched</option>
                        <option value="Watched">Watched</option>
                    </Form.Select>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Your Rating</Form.Label>
                    <Form.Select name="personalRating" value={myMovie.personalRating} onChange={handleDataChange}>
                        {ratingValues.map((val) => (
                            <option key={val}>{val}</option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your Notes</Form.Label>
                    <Form.Control as="textarea" name="notes" value={myMovie.notes} onChange={handleDataChange as (event: ChangeEvent<HTMLTextAreaElement>) => void} rows={2}></Form.Control> 
                </Form.Group>
            </Form>
            <Button onClick={handleSaveToLocalStorage}>Save Personal Rating</Button>{' '}
            <Button variant="danger" onClick={handleRemoveFromLocalStorage}>Remove From Collection</Button>
            <div>{message}</div>
        </div>
    )
}