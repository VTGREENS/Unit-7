import { Button, Table } from "reactstrap"
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode"
import FullWidthButton from "../Buttons/FullWidthButton";

const MovieTable = (props) => {
  const decoded = props.token ? jwt_decode(props.token) : "";
  const navigate = useNavigate();
    async function deleteMovie(id){
        const url =`http://localhost:4000/movie/${id}`;

        let myHeaders = new Headers()
        myHeaders.append("Authorization", props.token);

        let requestOptions = {
            headers: myHeaders,
            method:"DELETE"
        }
        try {
            let response = await fetch(url, requestOptions)
            let data = await response.json();
            console.log(data);
            props.fetchMovies();
            
        } catch (error) {
            console.log(error.message);
            
        }
       
    }
    return ( 
        <>
    <Table striped>
  <thead>
    <tr>
      <th>Movie Title</th>
      <th>Description</th>
      <th>Year</th>
      <th>In Theaters</th>
      <th>Rating</th>
      <th>Edit/Delete</th>
    </tr>
  </thead>
  <tbody>
    {props.movies.map((movie) => (
    <tr key={movie._id}>
      <th scope="row">{movie.movieTitle}</th>
      <td>{movie.movieDescription}</td>
      <td>{movie.movieYear}</td>
      <td>{movie.isCurrentlyInTheaters ? "Yes" : "No"}</td>
      <td>{movie.rating}</td>

       {/* Disables unless owner */}
      {/* <td>
      <FullWidthButton>
                  <Button
                    disabled={decoded.id !== movie.owner_id._id}
                    color="warning"
                    onClick={() => navigate(`/movie/${movie._id}`)}
                  >
                    Edit
                  </Button>
                </FullWidthButton>
              </td> */}

      {decoded.id === movie.owner_id ? (
      <>
      {" "}
      <td>
        <Button color="danger" onClick={() => deleteMovie(movie._id)}>Delete</Button>
        <Button color="primary" onClick={() => navigate(`/movie/update/${movie._id}`)}>Edit</Button>
        </td>
      </>
      )
    : null}
    </tr>
        ))}
  </tbody>
</Table>
</>
     );
}
 
export default MovieTable;