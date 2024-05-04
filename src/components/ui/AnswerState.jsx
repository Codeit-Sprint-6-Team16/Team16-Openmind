import styles from '../css/AnswerState.module.css';

// props로 isAnswerState 이라는 불린 값을 받는다고 가정
const AnswerState = ({ isAnswerState }) => {
  return (
    <div
      className={`${styles.AnswerState} ${isAnswerState ? styles.brown : styles.gray}`}
    >
      <p>{isAnswerState ? '답변 완료' : '미답변'}</p>
    </div>
  );
};

export default AnswerState;
