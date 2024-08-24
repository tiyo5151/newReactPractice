import { useState } from 'react';
import styles from '../pages/index.module.css';
import LoginForm from './login';

export default function SyncButton() {
  const [count, setCount] = useState<number>(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <div className={styles.coolButton}>
        <MyButton count={count} onClick={handleClick} />
        <MyButton count={count} onClick={handleClick} />
      </div>
      {count % 7 === 0 && count !== 0 && <LoginForm />}
    </div>
  );
}

interface MyButtonProps {
  count: number;
  onClick: () => void;
}

function MyButton({ count, onClick }: MyButtonProps) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}
