import { useState } from "react";
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';


//hook - make react listen change
//hook - function - 'use' - useState
// const [state, setState] = useState(InitialValue);
// state - refers to - Current value 
// setState - function - updateState - informing react that state is changed

export function Counter() {
    // console.log(Counter)
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

 // onClick & all event listeners - camelcase
  const incrementLike = () => setLike(like + 1) ;
  const incrementDisLike = () => setDislike(dislike + 1);
  return (
    <div className="counter-container">
      {/* <button className="like-button" onClick={incrementLike}>👍 {like}</button> */}
      <IconButton 
          onClick={incrementLike}  
          color="primary" 
          aria-label="movie-details">
          <Badge  badgeContent={like} color="primary">
            👍
        </Badge>
      </IconButton>

      {/* <button className="dislike-button" onClick={incrementDisLike}>👎{dislike}</button> */}
      <IconButton 
          onClick={incrementDisLike}  
          color="primary" 
          aria-label="movie-details">
          <Badge  badgeContent={dislike} color="secondary">
          👎
        </Badge>
      </IconButton>


      
    </div>
  );
}



// function add(x,y){
//   return x+y;
// }
// function sum(a,b){
//   add(a,b);
// }
// setTimeout(function() => {
//   console.log(10);
// },1000)
// callback => event completes trigger an action 
