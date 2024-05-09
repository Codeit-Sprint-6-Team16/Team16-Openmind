import AnswerBox from '@ui/AnswerBox';

const AnswerBoxContainer = ({ question, profile }) => {
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

  const editAnswerHandler = () => {
    if (!question.isRejected && question.answer !== null) {
      // setTextarea(answer.content)
    }
  };
  const removeAnswerHandler = () => {};
  const rejectAnswerHandler = () => {};

  // answer 데이터의 여부에 따라 조건부 렌더링
  return <AnswerBox />;
};

export default AnswerBoxContainer;
