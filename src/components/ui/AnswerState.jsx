import styles from '../css/AnswerState.module.css';

const AnswerState = ({ question }) => {
  const { answer } = question;

  return (
    <div
      className={`${styles.AnswerState} ${answer === null ? styles.gray : question.answer.isRejected ? styles.red : styles.brown}`}
    >
      <p>
        {answer === null
          ? '미답변'
          : question.answer.isRejected
            ? '답변 거절'
            : '답변 완료'}
      </p>
    </div>
  );
};

export default AnswerState;
