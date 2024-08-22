import AboutPage from '../component/aboutpage';
import Mybotton, { myVariable } from '../component/mybutton';
import Products from '../component/products';
import Profile from '../component/profile';
import iniad from '../images/iniad.jpg';
import styles from './index.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <img className={styles.iniad} src={iniad.src} alt="iniad" />
      <h1>Welcome to my app</h1>
      <p>{myVariable}</p>
      <AboutPage />
      <Mybotton />
      <Profile />
      <Products />
    </div>
  );
};
export default Home;
