import styles from '@css/AnswerPresenter.module.css';

// import { timeDifference } from '@utils/calculateTimeDifference';

const AnswerPresenter = ({ question, profile }) => {
  const { imageSource, name, createdAt } = profile;

  return (
    <div className={styles.AnswerPresenter}>
      <div className={styles.section_image}>
        <img src={imageSource} />
      </div>
      <div>
        <div className={styles.section_profile}>
          <div className={styles.section_profile_name}>{name}</div>
          <p className={styles.section_weeks}>{createdAt}일전</p>
        </div>
        <div className={styles.section_content}>{question.answer?.content}</div>
      </div>
    </div>
  );
};

export default AnswerPresenter;
