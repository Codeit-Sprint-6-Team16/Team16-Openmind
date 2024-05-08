import styles from '@css/QuestionFeed.module.css';
import Feed from '@ui/Feed';

function QuestionFeed() {
  return (
    <div className={styles.boxWrap}>
      <Feed />
    </div>
  );
}

export default QuestionFeed;
