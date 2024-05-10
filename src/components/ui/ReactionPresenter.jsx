import likeGray from '@assets/images/image_like_gray.svg';
import dislikeGray from '@assets/images/image_unlike_gray.svg';
import styles from '@css/Reaction.module.css';

const ReactionPresenter = ({ question }) => {
  return (
    <div className={styles.LikeDislike}>
      <button className={styles.reactionButton}>
        <img src={likeGray} alt="좋아요" />
        <p>좋아요 {question.like}</p>
      </button>
      <button className={styles.reactionButton}>
        <img src={dislikeGray} alt="싫어요" />
        <p>싫어요 {question.dislike}</p>
      </button>
    </div>
  );
};

export default ReactionPresenter;
