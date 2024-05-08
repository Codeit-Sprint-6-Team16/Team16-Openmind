import QuestionCount from './QuestionCount';
import styles from '@css/QuestionFeed.module.css';
import Feed from '@ui/Feed';

function QuestionFeed() {
  return (
    <div className={styles.boxWrap}>
      <QuestionCount />
      <Feed />
    </div>
  );
}

export default QuestionFeed;
