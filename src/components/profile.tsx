import profile from '../images/67896.jpg';
import styles from '../pages/index.module.css';
const user = {
  name: 'Tiyo',
  description: 'I am a INIAD student.',
  imageWidth: 400,
  imageHeight: 260,
};

export default function Profile(): React.ReactElement {
  return (
    <div className={styles.parent}>
      <div className={styles.child1}>
        <img
          className={styles.avatar}
          src={profile.src}
          alt={`Photo of ${user.name}`}
          style={{
            width: user.imageWidth,
            height: user.imageHeight,
          }}
        />
      </div>
      <div className={styles.child2}>
        <h1> {user.name}</h1>
        <p>{user.description}</p>
      </div>
    </div>
  );
}
