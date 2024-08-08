import useCount from '../hooks/useCount';
function Mybotton() {
  const { count, increment, decrement } = useCount();
  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={() => decrement()} className="decrementButtomn">
        Click me!
      </button>
      <button onClick={() => increment()} className="incrementButton">
        Click Me!
      </button>
    </div>
  );
}

export const myVariable = Math.sqrt(2);
export default Mybotton;
export {};
// 何も送らないという意味
