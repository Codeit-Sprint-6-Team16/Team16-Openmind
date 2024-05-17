import styles from '@css/Loading.module.css';
import spinner from '@assets/spinner.gif';

function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.text}>
        Loading&nbsp;
        <div className={styles.loader}></div>
      </div>
      <img className={styles.spinner} src={spinner} alt="로딩중"></img>
    </div>
  );
}

export default Loading;
