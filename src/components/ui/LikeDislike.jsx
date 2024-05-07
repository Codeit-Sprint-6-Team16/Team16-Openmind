import likeGray from '@assets/images/image_like_gray.svg';
import likeSkyblue from '@assets/images/image_like_skyblue.svg';
import unlikeBlack from '@assets/images/image_unlike_black.svg';
import unlikeGray from '@assets/images/image_unlike_gray.svg';
import styles from '@css/LikeDislike.module.css';

const LikeDislike = ({ count = 12 }) => {
  return (
    <div className={styles.LikeDislike}>
      <div
        className={`${styles.like} ${count === 0 ? styles.gray : styles.skyblue}`}
      >
        {count === 0 ? (
          <>
            <img
              className={styles.image}
              src={likeGray}
              alt="좋아요버튼비활성화"
            />
            <p>좋아요</p>
          </>
        ) : (
          <>
            <img
              className={styles.image}
              src={likeSkyblue}
              alt="좋아요버튼활성화"
            />
            <p>좋아요 {count}</p>
          </>
        )}
      </div>
      <div
        className={`${styles.unlike} ${count === 0 ? styles.gray : styles.black}`}
      >
        {count === 0 ? (
          <>
            <img
              className={styles.image}
              src={unlikeGray}
              alt="싫어요비활성화"
            />
            <p>싫어요</p>
          </>
        ) : (
          <>
            <img
              className={styles.image}
              src={unlikeBlack}
              alt="싫어요활성화"
            />
            <p>싫어요 {count}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default LikeDislike;
