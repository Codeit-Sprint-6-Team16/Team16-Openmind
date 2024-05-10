import likeGray from '@assets/images/image_like_gray.svg';
import likeSkyblue from '@assets/images/image_like_skyblue.svg';
import dislikeBlack from '@assets/images/image_unlike_black.svg';
import dislikeGray from '@assets/images/image_unlike_gray.svg';
import styles from '@css/Reaction.module.css';

const Reaction = ({ like, dislike, isLiked, isDisLiked, onClick }) => {
  const onClickLikeHandler = () => {
    onClick('like');
  };

  const onClickDislikeHandler = () => {
    onClick('dislike');
  };

  return (
    <div className={styles.LikeDislike}>
      <button
        type="button"
        className={`${styles.reactionButton} ${isLiked ? styles.skyblue : ''}`}
        onClick={onClickLikeHandler}
      >
        <img src={isLiked ? likeSkyblue : likeGray} alt="좋아요" />
        <p>좋아요 {like > 0 ? like : ''}</p>
      </button>
      <button
        type="button"
        className={`${styles.reactionButton} ${isDisLiked ? styles.black : ''}`}
        onClick={onClickDislikeHandler}
      >
        <img src={isDisLiked ? dislikeBlack : dislikeGray} alt="싫어요" />
        <p>싫어요 {dislike > 0 ? dislike : ''}</p>
      </button>
    </div>
  );
};

export default Reaction;
