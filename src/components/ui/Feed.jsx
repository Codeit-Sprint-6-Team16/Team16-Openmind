import styles from '@css/Feed.module.css';

function Feed({ children }) {
  return <div className={styles.box}>{children}</div>;
}

export default Feed;
