import useAlert from '../hooks/useAlert';
import useCount from '../hooks/useCount';
import styles from '../pages/index.module.css';
import LoginForm from './login';
function MyButton() {
  const { count, increment, decrement } = useCount();
  const { handleClick } = useAlert();
  return (
    <div className="styles.counter">
      <p className={styles.big}>Count:{count}</p>
      <div className={styles.coolButton}>
        <button onClick={() => decrement()}>Click me!</button>
        <button onClick={() => increment()}>Click Me!</button>
        <button onClick={() => handleClick()}>click Me!</button>
      </div>
      <hr color="black" />
      {count % 7 === 0 && count !== 0 && <LoginForm />}
    </div>
  );
}

export const myVariable = Math.sqrt(2);
export default MyButton;
export {};
// 何も送らないという意味
