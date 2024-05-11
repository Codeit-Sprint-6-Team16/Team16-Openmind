import spinner from '@assets/spinner.gif';
import styles from '@css/Loading.module.css';

function Loading() {
  return (
    <div className={styles.loading}>
      <p className={styles.text}>
        Loading&nbsp;
        <div className={styles.loader}></div>
      </p>
      <img className={styles.spinner} src={spinner} alt="로딩중"></img>
    </div>
  );
}

export default Loading;
