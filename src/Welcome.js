// 1. named import/exports  - preffered - multiple exports
// 2. default import / exports - only one export per file

//named export
function Welcome(props){
  // console.log(props)
  return(
    <div>
      <hr />
      <h1>Hello {props.name} </h1>
    </div>
  )
}

  // export const double
const double =(n) =>  n*2;


// End of the file
export { Welcome, double };


// default export
// export default Welcome;