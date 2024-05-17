import { elapsedTime } from '@utils/calculateTimeDifference';
import styles from '@css/QuestionName.module.css';

const QuestionName = ({ question }) => {
  const { createdAt, content } = question;
  return (
    <div className={styles.QuestionName}>
      <div className={styles.elapsed_time}>질문 · {elapsedTime(createdAt)}</div>
      <div className={styles.question_content}>{content}</div>
    </div>
  );
};

export default QuestionName;
