import { useContext, useState } from 'react';

import { deleteAnswer, deleteQuestion } from '@services/api/delete';
import { postAnswer } from '@services/api/post';
import AnswerBox from '@ui/AnswerBox';
import { ButtonClickedContext } from '@utils/ButtonClickedContext';

const AnswerBoxContainer = ({ question, profile }) => {
  const [editMode, setEditMode] = useState(false);
  const setButtonClicked = useContext(ButtonClickedContext);

  const removeQuestion = async () => {
    try {
      const result = await deleteQuestion(question.id);
    } catch (error) {
      if (error.name === 'TypeError') alert(error.message);
      else if (error.name === 'HttpError') alert(error.status);
    } finally {
      setButtonClicked(true);
    }
  };

  const removeAnswer = async () => {
    try {
      const result = await deleteAnswer(question.answer.id);
    } catch (error) {
      if (error.name === 'TypeError') alert(error.message);
      else if (error.name === 'HttpError') alert(error.status);
    } finally {
      setButtonClicked(true);
    }
  };

  const rejectAnswer = async () => {
    try {
      const result = await postAnswer(question.id, '답변 거절', true);
    } catch (error) {
      if (error.name === 'TypeError') alert(error.message);
      else if (error.name === 'HttpError') alert(error.status);
    } finally {
      setButtonClicked(true);
    }
  };

  const meatballMenuHandler = (optionsValue) => {
    switch (optionsValue) {
      case 'edit':
        console.log('edit');
        editAnswerHandler();
        break;
      case 'deleteAnswer':
        console.log('removeAnswer');
        removeAnswerHandler();
        break;
      case 'rejectAnswer':
        console.log('rejectQuestion');
        rejectQuestionHandler();
        break;
      case 'deleteQuestion':
        console.log('removeQuestion');
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
