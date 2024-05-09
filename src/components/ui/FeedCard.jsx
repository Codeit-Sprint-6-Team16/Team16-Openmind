import styles from '@css/FeedCard.module.css';

function FeedCard({ children }) {
  return <div className={styles.box}>{children}</div>;
}

export default FeedCard;
