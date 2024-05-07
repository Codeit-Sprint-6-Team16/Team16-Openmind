import React, { useState } from 'react';

import { postAnswer } from '@services/api/post';

const AnswerContentContainer = ({ questionId, profile }) => {
  const [content, setContent] = useState('');
  const submitAnswer = async () => {
    try {
      const result = postAnswer(questionId, content);
      setContent('');
    } catch (error) {
      if (error.name === 'TypeError') alert(error.message);
      else if (error.name === 'HttpError') alert(error.status);
    }
  };
  const submitAnswerHandler = () => {
    submitAnswer();
  };

  return <div></div>;
};

export default AnswerContentContainer;
