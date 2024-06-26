import styles from '@css/Reaction.module.css';
import likeGray from '@assets/image_like_gray.svg';
import dislikeGray from '@assets/image_unlike_gray.svg';

const ReactionPresenter = ({ question }) => {
  return (
    <div className={styles.Reaction}>
      <button className={styles.reactionButton}>
        <img src={likeGray} alt="좋아요" />
        <p>좋아요 {question.like > 0 ? question.like : ''}</p>
      </button>
      <button className={styles.reactionButton}>
        <img src={dislikeGray} alt="싫어요" />
        <p>싫어요 {question.dislike > 0 ? question.dislike : ''}</p>
      </button>
    </div>
  );
};

export default ReactionPresenter;
