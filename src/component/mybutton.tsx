import useCount from '../hooks/useCount';
import styles from '../pages/index.module.css';
function Mybotton() {
  const { count, increment, decrement } = useCount();
  return (
    <div className="styles.counter">
      <p className={styles.big}>Count:{count}</p>
      <div className={styles.coolbutton}>
        <button onClick={() => decrement()}>Click me!</button>
        <button onClick={() => increment()}>Click Me!</button>
      </div>
    </div>
  );
}

export const myVariable = Math.sqrt(2);
export default Mybotton;
export {};
// 何も送らないという意味
