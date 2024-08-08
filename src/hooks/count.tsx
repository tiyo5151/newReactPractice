export default function useCount() {
  let count = 0;
  const increment = () => {
    count++;
  };
  return { count, increment };
}
