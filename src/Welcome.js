// 1. named import/exports  - preffered - multiple exports
// 2. default import / exports - only one export per file

//named export
function Welcome(props){
  // console.log(props)
  return(
    <div>
      <h4>Hello {props.name} </h4>
    </div>
  )
}

const double =(n) =>  n*2;


// End of the file
export { Welcome, double };


// default export
// export default Welcome;