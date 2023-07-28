import './App.css';

import {Welcome, double} from './Welcome';   // named import
// import Welcome from "./Welcome";   // default import
import { Movie } from "./Movie";
import { AddColor } from "./AddColor";
import { Message } from './Message';
import { useState } from 'react';

import { Routes, Route, Link, Navigate, useParams, useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


// console.log(double)


function App(){
  //js starts 

  // const time = 20;
  //js ends
  //jsx starts
  // Dry - Don't repeat yourself
  const names = ["Divyashree", "Mayuri" ,"Netravathi"]

  const students = [
    {
      name:"Divyashree" , 
      pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GUDwHChr7e6YqvVyqj8IX7FjnYxDlze_zg&usqp=CAU" ,
    },
    {
      name:"Mayuri", 
      pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIowiTvupIDXVcDEnmpeWkig90a4kXRgwW8g&usqp=CAU" ,
    },
    {
      name:"Netravathi" , 
      pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6vzyHNIvYb53V0VqnpFIPmwO0zdpFWZR_EQ&usqp=CAU" ,

    }
  ]

  const INITIAL_MOVIE_LIST = [

    {
    
    "name": "RRR",
    "poster":
    "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    "rating": 8.8,
    "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
    },
    {
    "name": "Iron man 2",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    "rating": 7,
    "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
    },
    {
    
    "name": "No Country for Old Men",
    "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    "rating": 8.1,
    "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
    },
    {
    
    "name": "Jai Bhim",
    "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    "rating": 8.8,
    "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
    },
    {
    
    "name": "The Avengers",
    "rating": 8,
    "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {
    
    "name": "Interstellar",
    "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    "rating": 8.6,
    "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
    
    "name": "Baahubali",
    "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    "rating": 8,
    "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
    },
    {
    
    "name": "Ratatouille",
    "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    "rating": 8,
    "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
    }
    ]

  const [movieList, setMovieList] = useState(INITIAL_MOVIE_LIST);
  
  const navigate = useNavigate();

  return(
    <div className="App">
      {/* component + loop */}

      {/* {students.map((student) => (
        <Message name={student.name} pic={student.pic} />
      ) )} */}


      {/* {names.map((nm) =>( <Welcome name={nm} /> ) )} */}


      {/* <Counter/> */}

      {/* <Movie/> */}

      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/color-game" >Color-Game</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li> 
        </ul>
      </nav> */}

      <AppBar position="static">
        <Toolbar>
          <Button  color="inherit" onClick={()=> navigate("/")}>
            Home
          </Button>
          <Button  color="inherit" onClick={()=> navigate("/color-game")}>
            Color-Game
          </Button>
          <Button  color="inherit" onClick={()=> navigate("/movies")}>
            Movies
          </Button>
          <Button  color="inherit" onClick={()=> navigate("/movies/add")}>
            Add Movie
          </Button>
          
        </Toolbar>
      </AppBar>


      <section className="route-container">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/color-game' element={<AddColor/>} />
          <Route path='/movies' element={<MovieList movieList ={movieList} setMovieList={setMovieList} />} />
          <Route path='/movies/add' element={<AddMovie movieList ={movieList} setMovieList={setMovieList} />} />
        

          <Route path='/films' element={<Navigate replace to="/movies"/>} />

          <Route path='/404' element={<NotFound/>} />
          {/* redirecting * => 404 page */}
          <Route path='/*' element={<Navigate replace to="/404" />} />

          <Route path='/movies/:id' element={<MovieDetails movieList ={movieList} />} />
        </Routes>
      </section>

      

      {/* <Welcome name="vishal 👌👍👍" /> */}

      {/* <AddColor/> */}


    </div>

  )
  //jsx ends 
}
export default App;


function MovieDetails({movieList}){
  const {id} = useParams();
  console.log(id)

  const movie = movieList[id];

  const styles = {
    // rating > 8 => green
    color: movie.rating > 8 ? "green" : "red",
  };

  const [show, setShow] = useState(true);

  const paraStyles = {
    display: show ? "block" : "none",
  }

  const navigate = useNavigate();

  return(
    <div>
      <iframe 
        width="100%" 
        height="650" 
        src={movie.trailer}
        title="Jai Bhim - Official Telugu Trailer | Suriya | Amazon Prime Video" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
      </iframe>
      <div className='movie-details-container'>
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <p style={styles} className="movie-rating">⭐{movie.rating}</p>
        </div>
        <p style={paraStyles} className="movie-summary">{movie.summary}</p>
        {/* <button onClick={() => navigate(-1)} >Back</button> */}
        <Button onClick={() => navigate(-1)} variant="outlined" startIcon={<ArrowBackIosNewIcon />}>
            Back
        </Button>

      
      </div>
    </div>
  )
}


function NotFound(){
  return (
    <div>
      <img src='https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif' alt='404 Page Not Found'/>
    </div>
    
  )
}

function Home(){
  return(
    <h1>Welcome to Movie App +👍🙋‍♂️🙋‍♂️👌😎🍾</h1>
  )
}




function MovieList({movieList, setMovieList}){
  return(
    <div>
      <div className="movie-list">
        {movieList.map((mv , index) =>(
        <Movie key={index} movie={mv} id={index} /> 
        ))}
      </div>
    </div>
  )
}


function AddMovie({movieList, setMovieList}){
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  const addMovie = () => {
    // copy the movielist & add the newMovie to it  
    const newMovie = {
      Name: name ,
      Poster: poster,
      Rating: rating,
      Summary: summary,

    };

    setMovieList([...movieList, newMovie])
    console.log(newMovie);

  };

  return(
    <div className="add-movie-form">
        <TextField  onChange={(event) => setName(event.target.value)}   label="Name" variant="standard" />
        <TextField  onChange={(event) => setPoster(event.target.value)}    label="Poster" variant="standard" />
        <TextField  onChange={(event) => setRating(event.target.value)}    label="Rating" variant="standard" />
        <TextField  onChange={(event) => setSummary(event.target.value)}  label="Summary" variant="standard" />
        <Button onClick={addMovie} variant="outlined">Add Movie</Button>
      </div>
  )
}


// <> </>  => react fragment - helps in styling & performance
// {} =>template syntax
// jsx =>javascript XML 
// className 

// webpack + babel

// jsx => js
// className
// class - keyword */}


//react- router
// eco.com