import QuestionBox from './QuestionBox';
import styles from '@css/Feed.module.css';

function Feed() {
  return (
    <div className={styles.box}>
      <QuestionBox />
    </div>
  );
}

export default Feed;
