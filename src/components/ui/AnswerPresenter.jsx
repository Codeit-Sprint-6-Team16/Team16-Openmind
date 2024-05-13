import { elapsedTime } from '@utils/calculateTimeDifference';
import styles from '@css/AnswerPresenter.module.css';

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
          <p className={styles.section_elapsed_time}>
            {elapsedTime(createdAt)}
          </p>
        </div>
        {
          <div
            className={
              question.answer.isRejected
                ? styles.isRejected
                : styles.section_content
            }
          >
            {question.answer?.content}
          </div>
        }
      </div>
    </div>
  );
};

export default AnswerPresenter;
