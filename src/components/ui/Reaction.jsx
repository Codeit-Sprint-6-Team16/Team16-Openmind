import { useState } from 'react';

import likeGray from '@assets/images/image_like_gray.svg';
import likeSkyblue from '@assets/images/image_like_skyblue.svg';
import dislikeBlack from '@assets/images/image_unlike_black.svg';
import dislikeGray from '@assets/images/image_unlike_gray.svg';
import styles from '@css/Reaction.module.css';

// const Reaction = ({ question, onClick }) => {
//   const { like, dislike } = question;
//   let likeColor = '';
//   let dislikeColor = '';
//   let likeImg = likeGray;
//   let unlikeImg = unlikeGray;

//   const onClickLikeHandler = () => {
//     onClick('like');
//     likeColor = styles.skyblue;
//     likeImg = likeSkyblue;
//   };

//   const onClickDislikeHandler = () => {
//     onClick('dislike');
//     dislikeColor = styles.black;
//     unlikeImg = unlikeBlack;
//   };

//   return (
//     <div className={styles.LikeDislike}>
//       <button
//         type="button"
//         className={`${styles.reactionButton} ${likeColor}`}
//         onClick={onClickLikeHandler}
//       >
//         <img src={likeImg} alt="좋아요" />
//         <p>좋아요 {like > 0 ? like : ''}</p>
//       </button>
//       <button
//         type="button"
//         className={`${styles.reactionButton} ${dislikeColor}`}
//         onClick={onClickDislikeHandler}
//       >
//         <img src={unlikeImg} alt="싫어요" />
//         <p>싫어요 {dislike > 0 ? dislike : ''}</p>
//       </button>
//     </div>
//   );
// };

const Reaction = ({ question, onClick }) => {
  const { like, dislike } = question;
  const [likeState, setLikeState] = useState(false);
  const [dislikeState, setDislikeState] = useState(false);

  const onClickLikeHandler = () => {
    onClick('like');
    setLikeState(true);
  };

  const onClickDislikeHandler = () => {
    onClick('dislike');
    setDislikeState(true);
  };

  return (
    <div className={styles.LikeDislike}>
      <button
        type="button"
        className={`${styles.reactionButton} ${likeState ? styles.skyblue : ''}`}
        onClick={onClickLikeHandler}
      >
        <img src={likeState ? likeSkyblue : likeGray} alt="좋아요" />
        <p>좋아요 {like > 0 ? like : ''}</p>
      </button>
      <button
        type="button"
        className={`${styles.reactionButton} ${dislikeState ? styles.black : ''}`}
        onClick={onClickDislikeHandler}
      >
        <img src={dislikeState ? dislikeBlack : dislikeGray} alt="싫어요" />
        <p>싫어요 {dislike > 0 ? dislike : ''}</p>
      </button>
    </div>
  );
};

export default Reaction;
