import styles from '@css/FeedList.module.css';
import Feed from '@ui/Feed';

function FeedList() {
  return (
    <div className={styles.boxWrap}>
      <Feed />
    </div>
  );
}

export default FeedList;
