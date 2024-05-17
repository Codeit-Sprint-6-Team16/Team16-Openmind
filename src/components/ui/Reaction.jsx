import styles from '@css/Reaction.module.css';
import likeGray from '@assets/image_like_gray.svg';
import likeSkyblue from '@assets/image_like_skyblue.svg';
import dislikeBlack from '@assets/image_unlike_black.svg';
import dislikeGray from '@assets/image_unlike_gray.svg';

const Reaction = ({ like, dislike, isLiked, isDisLiked, onClick }) => {
  return (
    <div className={styles.Reaction}>
      <button
        type="button"
        className={`${styles.reactionButton} ${isLiked ? styles.skyblue : ''}`}
        onClick={() => {
          onClick('like');
        }}
      >
        <img src={isLiked ? likeSkyblue : likeGray} alt="좋아요" />
        <p>좋아요 {like > 0 ? like : ''}</p>
      </button>
      <button
        type="button"
        className={`${styles.reactionButton} ${isDisLiked ? styles.black : ''}`}
        onClick={() => {
          onClick('dislike');
        }}
      >
        <img src={isDisLiked ? dislikeBlack : dislikeGray} alt="싫어요" />
        <p>싫어요 {dislike > 0 ? dislike : ''}</p>
      </button>
    </div>
  );
};

export default Reaction;
