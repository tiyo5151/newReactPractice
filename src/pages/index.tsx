import AboutPage from '../component/aboutpage';
import Mybotton, { myVariable } from '../component/mybutton';
import styles from './index.module.css';
import iniad from './iniad.jpg';

const Home = () => {
  return (
    <div className={styles.container}>
      <img className={styles.iniad} src={iniad.src} alt="iniad" />
      <h1>Welcome to my app</h1>
      <p>{myVariable}</p>
      <AboutPage />
      <Mybotton />
    </div>
  );
};

export default Home;
