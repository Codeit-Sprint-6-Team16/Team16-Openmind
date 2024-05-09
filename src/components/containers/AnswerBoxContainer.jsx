import { useState } from 'react';

import { deleteAnswer } from '@services/api/delete';
import { patchAnswer } from '@services/api/putch';
import AnswerBox from '@ui/AnswerBox';

const AnswerBoxContainer = ({ question, profile }) => {
  const [isLoading, setIsLoading] = useState(false);
  /* 
  받아야 될 데이터
  id": 9937,
  "subjectId": 6023,
  "content": "무슨색깔이야",
  "like": 2147483647,
  "dislike": 2147483647,
  "createdAt": "2024-05-08T05:36:04.711508Z",
  "answer": {        
        "id": 4442,
        "questionId": 9937,
        "content": "파란색",
        "isRejected": false,
        "createdAt": "2024-05-08T07:44:04.230049Z"
      }
  "rejected"
  */

  // Loading이 끝나면 이 컴퍼너트 부터 재 렌더링
  const removeAnswer = async () => {
    try {
      setIsLoading(true);
      const result = await deleteAnswer(question.answer.id);
    } catch (error) {
      if (error.name === 'TypeError') alert(error.message);
      else if (error.name === 'HttpError') alert(error.status);
    } finally {
      setIsLoading(false);
    }
  };
  const rejectAnswer = async () => {
    try {
      setIsLoading(true);
      const result = await patchAnswer({
        answerId: question.id,
        content: question.content,
        isRejected: true,
      });
    } catch (error) {
      if (error.name === 'TypeError') alert(error.message);
      else if (error.name === 'HttpError') alert(error.status);
    } finally {
      setIsLoading(false);
    }
  };

  const editAnswerHandler = () => {
    if (!question.isRejected && question.answer !== null) {
      // setTextarea(answer.content)
    }
  };
  const removeAnswerHandler = () => {
    if (!question.isRejected && question.answer !== null) {
      removeAnswer();
    }
  };
  const rejectQuestionHandler = () => {
    if (!question.isRejected) {
      rejectAnswer();
    }
  };

  // answer 데이터의 여부에 따라 조건부 렌더링
  return (
    <AnswerBox
      question={question}
      profile={profile}
      removeAnswerHandler={removeAnswerHandler}
      rejectQuestionHandler={rejectQuestionHandler}
    />
  );
};

export default AnswerBoxContainer;
