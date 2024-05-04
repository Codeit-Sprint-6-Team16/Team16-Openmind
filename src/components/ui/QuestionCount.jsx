import messageIconBrown from '../../assets/images/image_messages_icon_brown.svg';
import styles from '../css/QuestionCount.module.css';

const QuestionCount = ({ text = '3개의 질문이 있습니다' }) => {
  return (
    <div className={styles.QuestionCount}>
      <img src={messageIconBrown} />
      <p>{text}</p>
    </div>
  );
};

export default QuestionCount;
