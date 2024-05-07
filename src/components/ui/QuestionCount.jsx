import messageIconBrown from '../../assets/images/image_messages_icon_brown.svg';
import styles from '../css/QuestionCount.module.css';

const QuestionCount = ({ count = 0 }) => {
  return (
    <div className={styles.QuestionCount}>
      <img src={messageIconBrown} />
      <p>
        {count === 0 ? `아직 질문이 없습니다` : `${count}개의 질문이 있습니다`}
      </p>
    </div>
  );
};

export default QuestionCount;
