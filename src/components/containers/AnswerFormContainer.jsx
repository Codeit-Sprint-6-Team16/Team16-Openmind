import React, { useContext, useEffect, useState } from 'react';

import { postAnswer } from '@services/api/post';
import { patchAnswer } from '@services/api/putch';
import AnswerForm from '@ui/AnswerForm';
import AnswerPresenter from '@ui/AnswerPresenter';
import { ButtonClickedContext } from '@utils/ButtonClickedContext';

const AnswerFormContainer = ({ question, profile, editMode, setEditMode }) => {
  console.log(question);
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
        answerId: question.answer.id,
        content: content,
        isRejected: false,
      });
    } catch (error) {
      if (error.name === 'TypeError') alert(error.message);
      else if (error.name === 'HttpError') alert(error.status);
    } finally {
      setButtonClicked(true);
      setEditMode(false);
    }
  };
  const submitEditedAnswerHandler = () => {
    submitEditedAnswer();
  };
  const submitAnswerHandler = () => {
    submitAnswer();
  };
  useEffect(() => {
    if (editMode) {
      console.log(editMode);
      setContent(question.answer.content);
    }
  }, [editMode]);
  //  조건부 렌더링
  return (
    <div>
      {!question?.answer && (
        <AnswerForm
          profile={profile}
          isRejected={question.answer.isRejected}
          content={content}
          onChange={onChangeTextAreaHandler}
          onClick={submitAnswerHandler}
        />
      )}
      {question.answer && !editMode && <div>{<AnswerPresenter />}</div>}
      {editMode && (
        <AnswerForm
          profile={profile}
          content={content}
          onChange={onChangeTextAreaHandler}
          onClick={submitEditedAnswerHandler}
        />
      )}
    </div>
  );
};

export default AnswerFormContainer;
