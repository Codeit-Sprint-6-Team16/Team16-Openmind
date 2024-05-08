import QuestionCount from './QuestionCount';
import styles from '@css/QuestionFeed.module.css';
import Feed from '@ui/Feed';

function QuestionFeed({ questionList }) {
  return (
    <div className={styles.boxWrap}>
      <Feed>
        <QuestionCount questionList={questionList} />
      </Feed>
    </div>
  );
}

export default QuestionFeed;
