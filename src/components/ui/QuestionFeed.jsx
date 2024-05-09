import QuestionCount from './QuestionCount';
import Reaction from './Reaction';
import styles from '@css/QuestionFeed.module.css';
import Feed from '@ui/Feed';

function QuestionFeed({ questionList, questionCount }) {
  console.log(questionList);

  return (
    <div className={styles.boxWrap}>
      <Feed questionList={questionList}>
        <QuestionCount questionCount={questionCount} />
      </Feed>
    </div>
  );
}

export default QuestionFeed;
