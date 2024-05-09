import AnswerState from './AnswerState';
import QuestionName from './QuestionName';
import AnswerPresenterContainer from '@containers/AnswerPresenterContainer';
import ReactionContainer from '@containers/ReactionContainer';

const QuestionBox = ({ question }) => {
  // const { id, subjectId, content, like, dislike, createdAt, team, answer } =
  //   question;

  return (
    <div>
      <AnswerState question={question} />
      <QuestionName question={question} />
      <AnswerPresenterContainer question={question} />
      <ReactionContainer question={question} />
    </div>
  );
};

export default QuestionBox;
