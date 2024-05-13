import messageIconBrown from '@assets/images/image_messages_icon_brown.svg';
import styles from '@css/QuestionCount.module.css';

const QuestionCount = ({ profile }) => {
  return (
    <div className={styles.QuestionCount}>
      <img src={messageIconBrown} />
      <p>
        {profile.questionCount === 0 || profile.questionCount === undefined
          ? `아직 질문이 없습니다`
          : `${profile.questionCount}개의 질문이 있습니다`}
      </p>
    </div>
  );
};

export default QuestionCount;
