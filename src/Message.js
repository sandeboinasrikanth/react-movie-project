import { Counter } from "./Counter";

// object Destructuring
export function Message({ pic, name }) {
  return (
    <div>
      <img className='profile-pic' src={pic} alt={name} />
      <h4>Hello {name} </h4>
      <Counter />
    </div>
  );
}
