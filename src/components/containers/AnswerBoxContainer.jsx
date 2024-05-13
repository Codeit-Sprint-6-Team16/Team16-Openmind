import { useContext, useState } from 'react';

import { deleteAnswer, deleteQuestion } from '@api/delete';
import { alertError } from '@api/error';
import { postAnswer } from '@api/post';
import AnswerBox from '@ui/AnswerBox';
import { ButtonClickedContext } from '@utils/ButtonClickedContext';

const AnswerBoxContainer = ({ question, profile }) => {
  const [editMode, setEditMode] = useState(false);
  const setButtonClicked = useContext(ButtonClickedContext);

  const removeQuestion = async () => {
    try {
      await deleteQuestion(question.id);
    } catch (error) {
      alertError(error);
    } finally {
      setButtonClicked(true);
    }
  };

  const removeAnswer = async () => {
    try {
      await deleteAnswer(question.answer.id);
    } catch (error) {
      alertError(error);
    } finally {
      setButtonClicked(true);
    }
  };

  const rejectAnswer = async () => {
    try {
      await postAnswer(question.id, '답변 거절됨', true);
    } catch (error) {
      alertError(error);
    } finally {
      setButtonClicked(true);
    }
  };

  const meatballMenuHandler = (optionsValue) => {
    switch (optionsValue) {
      case 'edit':
        editAnswerHandler();
        break;
      case 'deleteAnswer':
        removeAnswerHandler();
        break;
      case 'rejectAnswer':
        rejectQuestionHandler();
        break;
      case 'deleteQuestion':
        removeQuestionHandler();
        break;

      default:
        break;
    }
  };

  const editAnswerHandler = () => {
    if (question.answer !== null) {
      setEditMode(true);
    }
  };
  const removeQuestionHandler = () => {
    removeQuestion();
  };
  const removeAnswerHandler = () => {
    if (!question.isRejected && question.answer !== null) {
      removeAnswer();
    }
  };
  const rejectQuestionHandler = () => {
    if (!question.answer) {
      return rejectAnswer();
    }
    alert('답변이 존재 합니다.');
  };

  return (
    <AnswerBox
      setEditMode={setEditMode}
      editMode={editMode}
      question={question}
      profile={profile}
      meatballMenuHandler={meatballMenuHandler}
    />
  );
};

export default AnswerBoxContainer;
