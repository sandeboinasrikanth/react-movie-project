import { createRoot } from 'react-dom/client';

import './App.css';
import reportWebVitals from './reportWebVitals';

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

  return(
    <div className="App">
      {/* component + view */}
      {students.map((student) => (
        <Message name={student.name} pic={student.pic} />
      ) )}

      {names.map((nm) =>( <Welcome name={nm} /> ) )}

    </div>

  )
  //jsx ends 
}
export default App;

function Welcome(props){
  return(
    <div>
      <h4>Hello {props.name} </h4>
    </div>
  )
}


// object Destructuring
function Message({pic, name}){
  return(
    <div>
      <img className='profile-pic' src={pic} alt={name} />
      <h4>Hello {name} </h4>
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

