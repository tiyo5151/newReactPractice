import useCount from '../hooks/useCount';
import styles from '../pages/index.module.css';
import LoginForm from './login';
function Mybotton() {
  const { count, increment, decrement } = useCount();
  return (
    <div className="styles.counter">
      <p className={styles.big}>Count:{count}</p>
      <div className={styles.coolbutton}>
        <button onClick={() => decrement()}>Click me!</button>
        <button onClick={() => increment()}>Click Me!</button>
      </div>
      <hr color="black" />
      {count % 7 === 0 && <LoginForm />}
    </div>
  );
}

export const myVariable = Math.sqrt(2);
export default Mybotton;
export {};
// 何も送らないという意味
