// import profileImg from '@assets/images/image_profile.svg';
import styles from '@css/AnswerPresenter.module.css';

const AnswerPresenter = ({ profile, question }) => {
  const { imageSource, name, createdAt } = profile;

  return (
    <div className={styles.FeedAnswerContent}>
      <div className={styles.section_image}>
        <img src={imageSource} />
      </div>
      <div>
        <div className={styles.section_profile}>
          <div className={styles.section_profile_name}>{name}</div>
          <p className={styles.section_weeks}>{createdAt}주전</p>
        </div>
        <div className={styles.section_content}>{question.answer.content}</div>
      </div>
    </div>
  );
};

export default AnswerPresenter;
