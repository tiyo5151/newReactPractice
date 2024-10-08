import { useState } from 'react';

const useCount = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  console.log(count);
  return { count, increment, decrement };
};

export default useCount;
