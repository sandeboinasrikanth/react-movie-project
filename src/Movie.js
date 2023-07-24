import { useState } from "react";
import { Counter } from "./Counter";
import { useNavigate } from "react-router-dom";

import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import InfoIcon from '@mui/icons-material/Info';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export function Movie({ movie , id }) {
  // conditional styling
  // const styles= {
  //   color: movie.rating > 8 ? "green": "red",
  // }

  const styles = {
    // rating > 8 => green
    color: movie.rating > 8 ? "green" : "red",
  };

  const [show, setShow] = useState(true);

  const paraStyles = {
    display: show ? "block" : "none",
  };

  const navigate = useNavigate();


  return (
    <div className="movie-container">
      <img className="movie-poster" src={movie.poster} alt={movie.name} />
      <div className="movie-specs">
        <h2 className="movie-name">{movie.name}</h2>
        <p style={styles} className="movie-rating">⭐{movie.rating}</p>
      </div>

      <IconButton color="primary" onClick={() => setShow(!show)}  aria-label="toggle-summary">
         { show ? <ExpandLessIcon/> : <ExpandMoreIcon/> }
      </IconButton>
      
      <IconButton color="primary" onClick={() => navigate(`/movies/${id}`)}  aria-label="movie-details">
        <InfoIcon/>
      </IconButton>

      {/* conditional Styling */}
      {/* <p style={paraStyles} className="movie-summary">{movie.summary}</p> */}

      {/* conditional Rendering */}
      { show ? <p style={paraStyles} className="movie-summary">{movie.summary}</p> : null}

      <Counter />
    </div>
  );
}
