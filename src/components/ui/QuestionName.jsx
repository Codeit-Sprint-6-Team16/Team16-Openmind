import styles from '@css/QuestionName.module.css';

const QuestionName = ({
  weeksAgo = 2,
  questionContent = '좋아하는 동물은?',
}) => {
  return (
    <div className={styles.QuestionName}>
      <div className={styles.weeks_ago}>질문 · {weeksAgo}주전</div>
      <div className={styles.question_content}>{questionContent}</div>
    </div>
  );
};

export default QuestionName;
