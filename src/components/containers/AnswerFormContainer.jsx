import React, { useContext, useState } from 'react';

import { postAnswer } from '@services/api/post';
import { patchAnswer } from '@services/api/putch';
import AnswerForm from '@ui/AnswerForm';
import { ButtonClickedContext } from '@utils/ButtonClickedContext';

const AnswerFormContainer = ({ question, profile }) => {
  const setButtonClicked = useContext(ButtonClickedContext);

  const [content, setContent] = useState('');
  const onChangeTextAreaHandler = (e) => {
    setContent(e.target.value);
  };
  const submitAnswer = async () => {
    try {
      const result = postAnswer(question.id, content);
      setContent('');
    } catch (error) {
      if (error.name === 'TypeError') alert(error.message);
      else if (error.name === 'HttpError') alert(error.status);
    } finally {
      setButtonClicked(true);
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
      setButtonClicked(true);
    }
  };
  const submitEditedAnswerHandler = () => {
    submitEditedAnswer();
  };
  const submitAnswerHandler = () => {
    submitAnswer();
  };
  //  조건부 렌더링
  return (
    <div>
      <AnswerForm
        profile={profile}
        content={content}
        onChange={onChangeTextAreaHandler}
        onClick={submitAnswerHandler}
      />
    </div>
  );
};

export default AnswerFormContainer;
