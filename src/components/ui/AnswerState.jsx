import styles from '../css/AnswerState.module.css';

const AnswerState = ({ profile }) => {
  const { id } = profile;

  return (
    <div className={`${styles.AnswerState} ${id ? styles.brown : styles.gray}`}>
      <p>{id ? '답변 완료' : '미답변'}</p>
    </div>
  );
};

export default AnswerState;
