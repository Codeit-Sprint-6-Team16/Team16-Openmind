import React, { useState } from 'react';

import { postAnswer } from '@services/api/post';
import AnswerForm from '@ui/AnswerForm';
import { patchAnswer } from '@services/api/putch';

const AnswerFormContainer = ({ question }) => {
  const [content, setContent] = useState('');
  const submitAnswer = async () => {
    try {
      const result = postAnswer(question.id, content);
      setContent('');
    } catch (error) {
      if (error.name === 'TypeError') alert(error.message);
      else if (error.name === 'HttpError') alert(error.status);
    } finally {
      window.location.reload();
    }
  };
  const submitEditedAnswer = async () => {
    try {
      const result = await patchAnswer({
        ...question.answer,
        content: content,
      });
    } catch (error) {
      if (error.name === 'TypeError') alert(error.message);
      else if (error.name === 'HttpError') alert(error.status);
    } finally {
      window.location.reload();
    }
  };
  const submitEditedAnswerHandler = () => {
    submitEditedAnswer();
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
