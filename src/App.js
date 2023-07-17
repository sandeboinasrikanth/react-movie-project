import { useState } from "react";
import './App.css';

import {Welcome, double} from './Welcome';   // named import
// import Welcome from "./Welcome";   // default import

console.log(double)


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

  const movieList = [
    {
      name: "Vikram",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      rating: 8.4,
      summary:
        "Members of a black ops team must track and eliminate a gang of masked murderers."
    },
    {
      name: "RRR",
      poster:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."
    },
    {
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
    },
    {
      name: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
    },
    {
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
      "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8
    },
    {
      name: "The Avengers",
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
    },
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans."
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
    },
    {
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
    }
  ];
  

  return(
    <div className="App">
      {/* component + loop */}

      {/* {students.map((student) => (
        <Message name={student.name} pic={student.pic} />
      ) )} */}


      {/* {names.map((nm) =>( <Welcome name={nm} /> ) )} */}

      {/* <Counter/> */}

      {/* <Movie/> */}

      {/* <div className="movie-list">
        {movieList.map((mv , index) =>(
        <Movie key={index} movie={mv} /> 
        ))}
      </div> */}

      <Welcome name="vishal 👌👍👍" />

      <AddColor/>


    </div>

  )
  //jsx ends 
}
export default App;


function AddColor(){
  const [color, setColor]= useState("deepskyblue");

  const styles ={
    backgroundColor: color,
  }

  const INITIAL_COLOR_LIST = ["Deepskyblue", "orange", "crimson"];
  const [colorList, setColorList] = useState(INITIAL_COLOR_LIST );

  return(
    <div>
      <input 
        value={color} 
        onChange={(event) => setColor(event.target.value)} 
        style={styles} 
        placeholder="Enter a color"
      />

      <button onClick={() => setColorList([ ...colorList, color ])}>Add Color</button>

      {colorList.map((clr, index) => (
        <ColorBox key={index} color={clr} />
      ))}
      
    </div>
  )

}

function ColorBox({color}){
  const styles={
    backgroundColor: color,
    height: "50px",
    width: "400px",
    marginTop: "10px",
  }

return(
  <div style={styles}></div>
)

}


function Movie({movie} ){

  // conditional styling
  // const styles= {
  //   color: movie.rating > 8 ? "green": "red",
  // }

  const styles = {
    // rating > 8 => green
    color: movie.rating  > 8 ? "green" : "red",
  }

  const [show, setShow]= useState(true)

  const paraStyles ={
    display : show ? "block":"none",
  }
 
   
  return(
    <div className="movie-container">
      <img className="movie-poster" src={movie.poster} alt={movie.name} />
      <div className="movie-specs">
        <h2 className="movie-name">{movie.name}</h2>
        <p style={styles} className="movie-rating">⭐{movie.rating}</p>
      </div>

      <button onClick={() => setShow(!show)}>Toggle Summary</button>

      {/* conditional Styling */}
      <p style={paraStyles} className="movie-summary">{movie.summary}</p>

      {/* conditional Rendering */}
      {/* { show ? <p style={paraStyles} className="movie-summary">{movie.summary}</p> : null} */}

      <Counter/>
    </div>
  )
}



//hook - make react listen change
//hook - function - 'use' - useState

// const [state, setState] = useState(InitialValue);
// state - refers to - Current value 
// setState - function - updateState - informing react that state is changed



function Counter(){
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

// onClick & all event Listners - camelCase
  return(
    <div className="counter-container">
      <button className="like-button" onClick={() => setLike(like+1)}>👍 {like}</button>
      <button className="dislike-button" onClick={() => setDislike(dislike+1)}>👎{dislike}</button>
    </div>
  )
}





// object Destructuring
function Message({pic, name}){
  return(
    <div>
      <img className='profile-pic' src={pic} alt={name} />
      <h4>Hello {name} </h4>
      <Counter/>
    </div>
  )
}




// //Defined the component - logic + view
// function Message(props){
//   // console.log(props)
//   // const name = props.name;
//   return(
//     <div>
//       <img className='profile-pic' src={props.pic} alt={props.name} />
//       <h4>Hello {props.name} </h4>
//     </div>
//   )
// }

// <></>  - React fragment - helps in styling & performance

// {} template syntax

// jsx - javascript XML

// webpack + babel

// JSX -> js
// className
// class- keyword


//props - properties - pass aruguments to component
/* <Message name="Divyashree" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GUDwHChr7e6YqvVyqj8IX7FjnYxDlze_zg&usqp=CAU" />
    <Message name="Mayuri"  pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIowiTvupIDXVcDEnmpeWkig90a4kXRgwW8g&usqp=CAU" />
    <Message name="Netravathi" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6vzyHNIvYb53V0VqnpFIPmwO0zdpFWZR_EQ&usqp=CAU" />
      */



//Create Component
// function -> Component
// 1.First Letter Capital
// 2.It should have one jsx Element


// hooks
/* <button onClick={() => {like++; console.log(like)}}>Like</button> */


// Callback => event completes triggers the action


// const [color, setColor]= useState("deepskyblue")
// const styles ={
//   backgroundColor: color || "deepskyblue",
// }

