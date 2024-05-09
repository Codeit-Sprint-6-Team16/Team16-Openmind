import styles from '../css/AnswerState.module.css';

const AnswerState = ({ question }) => {
  const { answer } = question;

  return (
    <div
      className={`${styles.AnswerState} ${answer === null ? styles.gray : styles.brown}`}
    >
      <p>{answer === null ? '미답변' : '답변 완료'}</p>
    </div>
  );
};

export default AnswerState;
