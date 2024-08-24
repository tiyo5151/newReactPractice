import styles from '../pages/index.module.css';

const LoginForm = () => {
  return (
    <div className={styles.loginForm}>
      <h2>ログイン</h2>
      <form>
        <div className={styles.formGroup}>
          <label htmlFor="username">ユーザー名：</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">パスワード：</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
};

export default LoginForm;
