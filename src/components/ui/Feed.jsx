import QuestionBox from './QuestionBox';
import styles from '@css/Feed.module.css';

function Feed({ questionList }) {
  return (
    <div className={styles.box}>
      {questionList.map((question) => (
        <QuestionBox question={question} key={question.id} />
      ))}
    </div>
  );
}

export default Feed;
