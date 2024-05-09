import styles from '@css/QuestionName.module.css';
import { timeDifference } from '@utils/calculateTimeDifference';

const QuestionName = ({ question }) => {
  const { createdAt, content } = question;
  return (
    <div className={styles.QuestionName}>
      <div className={styles.weeks_ago}>
        질문 · {timeDifference(createdAt)}주전
      </div>
      <div className={styles.question_content}>{content}</div>
    </div>
  );
};

export default QuestionName;
