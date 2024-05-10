import React, { useState } from 'react';

import { postAnswer } from '@services/api/post';
import AnswerForm from '@ui/AnswerForm';

const AnswerFormContainer = ({}) => {
  /*
  "rejected"
  "subjectId": 6023,
  "answer": null
  수정모드나 새로 작성하는 그를 경우로 대비해야 될 듯 
  */
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

  return (
    <div>
      <AnswerForm />
    </div>
  );
};

export default AnswerFormContainer;
