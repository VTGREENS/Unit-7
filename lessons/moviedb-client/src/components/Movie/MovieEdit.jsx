import { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label, Row, Col, Container, Alert } from "reactstrap";
import FullWidthButton from "../Buttons/FullWidthButton";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";



const MovieEdit = (props) => {
    const { id } = useParams();
    const [movieTitle, setMovieTitle] = useState("");
    const [movieDescription, setMovieDescription] = useState("");
    const [movieYear, setmovieYear] = useState("");
    const [isCurrentlyInTheaters, setIsCurrentlyInTheaters] = useState("");
    const [rating, setRating] = useState("");
    const [showSuccessMessage, setShowSuccessMessage] = useState();
    const [alertMessage, setAlertMessage] = useState("");
    const [alertColor, setAlertColor] = useState("danger");
    const navigate = useNavigate();
    
    async function handleSubmit(e) {
        e.preventDefault();
        let url =`http://localhost:4000/movie/update/${id}`;

        let bodyObject = JSON.stringify({movieTitle, movieDescription, movieYear, isCurrentlyInTheaters, rating});

        let myHeaders= new Headers()
        myHeaders.append("Authorization", props.token)
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            headers: myHeaders,
            body: bodyObject,
            method: "PUT"
        }
        try {
            const response = await fetch(url, requestOptions);
            const data = await response.json();
            console.log(data);
            if(data.message==="movie updated"){
                setShowSuccessMessage(true);
                setAlertColor("danger");
                setAlertMessage("Movie was updated");
                setTimeout(() => setShowSuccessMessage(false), 3000);
                // We are free to navigate to another page
                navigate("/movie");
                }else{
                    setShowSuccessMessage(false);
                    setAlertColor("danger");
                    setAlertMessage("Movie was not updated");
                    alert(data.message);
                }
            
        } catch (error) {
            console.log(error.message)
            
        }

    }
    const fetchMovie = async () => {
        const url = `http://localhost:4000/movie/${id}`;
        let myHeaders = new Headers();
        myHeaders.append("Authorization", props.token);
    
        const requestOptions = {
          method: "GET",
          headers: myHeaders,
        };
    
        try {
          const response = await fetch(url, requestOptions);
          const data = await response.json();
          setMovieTitle(data.movie.movieTitle);
          setMovieDescription(data.movie.movieDescription);
          setmovieYear(data.movie.movieYear);
          setIsCurrentlyInTheaters(data.movie.isCurrentlyInTheaters);
          setRating(data.movie.rating);
          console.log(data);
         
        } catch (err) {
          console.log(err.message);
        }
      };

      useEffect(() => {
        if (props.token) {
          fetchMovie();
        }
      }, [props.token]);

    

    return (  
    <>
        <Container>
            <Row>
                <Col md="4"><p>Please make your edits below</p>
                {showSuccessMessage ? (
              <Alert color="success">Movie has been updated.</Alert>
            ) : null} 
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label>Movie Title</Label>
                                <Input 
                                value={movieTitle} 
                                onChange={(e)=> setMovieTitle(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Movie Description</Label>
                                <Input 
                                type="textarea"
                                value={movieDescription} 
                                onChange={(e)=> setMovieDescription(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Movie Year</Label>
                                <Input
                                value={movieYear} 
                                onChange={(e)=> setmovieYear(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Currently Showing</Label>
                                <Input 
                                    type="select"
                                    value={isCurrentlyInTheaters}
                                    onChange={(e) => setIsCurrentlyInTheaters(e.target.value)}>
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
                                </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Rating</Label>
                                <Input 
                                    type="select"
                                    value={rating}
                                    onChange={(e) => setRating(e.target.value)}>
                                    <option value={5}>5</option>
                                    <option value={4}>4</option>
                                    <option value={3}>3</option>
                                    <option value={2}>2</option>
                                    <option value={1}>1</option>
                                </Input>
                        </FormGroup>
                        <FullWidthButton>
                            <Button type="submit" color="danger">Submit Movie</Button>
                        </FullWidthButton>
                    </Form>
                </Col>
            </Row>   
        </Container>
    </>

    );
}
 
export default MovieEdit;