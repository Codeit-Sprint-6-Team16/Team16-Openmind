import likeGray from '@assets/images/image_like_gray.svg';
import likeSkyblue from '@assets/images/image_like_skyblue.svg';
import unlikeBlack from '@assets/images/image_unlike_black.svg';
import unlikeGray from '@assets/images/image_unlike_gray.svg';
import styles from '@css/Reaction.module.css';

const Reaction = ({ question, onClick }) => {
  // const { like = 12, dislike = 3 } = question;
  const { like, dislike } = question;

  return (
    <div className={styles.LikeDislike}>
      <button
        type="button"
        className={`${styles.reactionButton} ${like > 0 ? styles.skyblue : ''}`}
        onClick={() => {
          onClick('like');
        }}
      >
        <img src={like > 0 ? likeSkyblue : likeGray} alt="좋아요" />
        <p>좋아요 {like > 0 ? like : ''}</p>
      </button>
      <button
        type="button"
        className={`${styles.reactionButton} ${dislike > 0 ? styles.black : ''}`}
        onClick={() => {
          onClick('dislike');
        }}
      >
        <img src={dislike > 0 ? unlikeBlack : unlikeGray} alt="싫어요" />
        <p>싫어요 {dislike > 0 ? dislike : ''}</p>
      </button>
    </div>
  );
};

export default Reaction;
