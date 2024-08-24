import useCount from '../hooks/useCount';
import styles from '../pages/index.module.css';
export default function MyButton() {
  const { count, increment } = useCount();
  return (
    <div>
      <div className={styles.coolButton}>
        <button onClick={increment}>Clicked {count} times</button>
      </div>
    </div>
  );
}
export const myVariable = Math.sqrt(2);
export {};
// 何も送らないという意味
