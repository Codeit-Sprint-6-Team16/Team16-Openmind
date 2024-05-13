import React, { useContext, useEffect, useState } from 'react';

import { alertError } from '@api/error';
import { patchAnswer } from '@api/patch';
import { postAnswer } from '@api/post';
import AnswerForm from '@ui/AnswerForm';
import AnswerPresenter from '@ui/AnswerPresenter';
import { ButtonClickedContext } from '@utils/ButtonClickedContext';

const AnswerFormContainer = ({ question, profile, editMode, setEditMode }) => {
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
      alertError(error);
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
      alertError(error);
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
      setContent(question.answer.content);
    }

    return () => {
      setContent('');
    };
  }, [editMode]);

  return (
    <div>
      {!question?.answer && (
        <AnswerForm
          profile={profile}
          isRejected={question.answer?.isRejected}
          content={content}
          onChange={onChangeTextAreaHandler}
          onClick={submitAnswerHandler}
        />
      )}
      {question.answer && !editMode && (
        <AnswerPresenter profile={profile} question={question} />
      )}
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
