import AboutPage from '../components/aboutPage';
import MyButton, { myVariable } from '../components/myButton';
import Products from '../components/products';
import Profile from '../components/profile';
import SyncButton from '../components/syncButton';
import iniad from '../images/iniad.jpg';
import styles from './index.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <img className={styles.iniad} src={iniad.src} alt="iniad" />
      <h1>Welcome to my app</h1>
      <p>{myVariable}</p>
      <AboutPage />
      <h1>Counters that update separately</h1>
      <div className={styles.coolButton}>
        <MyButton />
        <MyButton />
      </div>
      <SyncButton />
      <Profile />
      <Products />
    </div>
  );
};
export default Home;
