export default function useAlert() {
  const handleClick = () => {
    alert('YOU CLICKED ME!');
  };
  return { handleClick };
}
