import AboutPage from '../components/aboutPage';
import MyButton, { myVariable } from '../components/myButton';
import Products from '../components/products';
import Profile from '../components/profile';
import iniad from '../images/iniad.jpg';
import styles from './index.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <img className={styles.iniad} src={iniad.src} alt="iniad" />
      <h1>Welcome to my app</h1>
      <p>{myVariable}</p>
      <AboutPage />
      <h2>互いに独立</h2>
      <MyButton />
      <MyButton />
      <h2>互いに同期</h2>
      <Profile />
      <Products />
    </div>
  );
};
export default Home;
