import styles from '@css/FeedBox.module.css';

function FeedBox({ children }) {
  return <div className={styles.box}>{children}</div>;
}

export default FeedBox;
