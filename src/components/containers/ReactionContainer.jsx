import { useState } from 'react';

import { postReaction } from '@services/api/post';
import Reaction from '@ui/Reaction';

function ReactionContainer({ question }) {
  const [updatedQuestion, setUpdatedQuestion] = useState(question);

  const sendReaction = async (type) => {
    try {
      const response = await postReaction(question.id, type);
      setUpdatedQuestion(response);
    } catch (error) {
      if (error.name === 'TypeError') {
        return console.log(error.name);
      } else if (error.name) {
        console.log(error.status);
      }
    }
  };

  const onClickHandler = (type) => {
    sendReaction(type);
  };

  return (
    updatedQuestion && (
      <Reaction question={updatedQuestion} onClick={onClickHandler} />
    )
  );
}

export default ReactionContainer;
