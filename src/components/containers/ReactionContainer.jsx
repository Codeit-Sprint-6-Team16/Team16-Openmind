import { useState } from 'react';

import { alertError } from '@api/error';
import { postReaction } from '@api/post';
import Reaction from '@ui/Reaction';

function ReactionContainer({ question }) {
  const [like, setLike] = useState(question.like);
  const [dislike, setDislike] = useState(question.dislike);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const sendReaction = async (type) => {
    try {
      const response = await postReaction(question.id, type);
      type === 'like' ? setLike(response.like) : setDislike(response.dislike);
    } catch (error) {
      alertError(error);
    }
  };

  const onClickHandler = (type) => {
    if (like !== 2147483647 && dislike !== 2147483647) {
      sendReaction(type);
      if (type === 'like') setIsLiked(true);
      if (type === 'dislike') setIsDisliked(true);
    }
  };

  return (
    typeof like === 'number' &&
    typeof dislike === 'number' && (
      <Reaction
        like={like}
        dislike={dislike}
        isLiked={isLiked}
        isDisLiked={isDisliked}
        onClick={onClickHandler}
      />
    )
  );
}

export default ReactionContainer;
