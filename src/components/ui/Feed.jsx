import AnswerBox from './AnswerBox';
import QuestionBox from './QuestionBox';
import styles from '@css/Feed.module.css';

function Feed() {
  return (
    <div className={styles.box}>
      내용이 들어갑니다.
      <QuestionBox />
      <AnswerBox />
    </div>
  );
}

export default Feed;
