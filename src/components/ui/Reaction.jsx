import likeGray from '@assets/images/image_like_gray.svg';
import likeSkyblue from '@assets/images/image_like_skyblue.svg';
import unlikeBlack from '@assets/images/image_unlike_black.svg';
import unlikeGray from '@assets/images/image_unlike_gray.svg';
import styles from '@css/Reaction.module.css';

const Reaction = ({ question, onClick }) => {
  const { like, dislike } = question;

  return (
    <div className={styles.LikeDislike}>
      <div
        className={`${styles.like} ${like === 0 ? styles.gray : styles.skyblue}`}
      >
        {like === 0 ? (
          <button
            type="button"
            onClick={() => {
              onClick('like');
            }}
          >
            <img
              className={styles.image}
              src={likeGray}
              alt="좋아요버튼비활성화"
            />
            <p>좋아요</p>
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              onClick('like');
            }}
          >
            <img
              className={styles.image}
              src={likeSkyblue}
              alt="좋아요버튼활성화"
            />
            <p>좋아요 {like}</p>
          </button>
        )}
      </div>
      <div
        className={`${styles.unlike} ${dislike === 0 ? styles.gray : styles.black}`}
      >
        {dislike === 0 ? (
          <button
            type="button"
            onClick={() => {
              onClick('dislike');
            }}
          >
            <img
              className={styles.image}
              src={unlikeGray}
              alt="싫어요비활성화"
            />
            <p>싫어요</p>
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              onClick('dislike');
            }}
          >
            <img
              className={styles.image}
              src={unlikeBlack}
              alt="싫어요활성화"
            />
            <p>싫어요 {dislike}</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default Reaction;
