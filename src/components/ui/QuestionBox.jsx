import AnswerPresenter from './AnswerPresenter';
import AnswerState from './AnswerState';
import QuestionName from './QuestionName';
import ReactionContainer from '@containers/ReactionContainer';

const QuestionBox = ({ question, profile }) => {
  return (
    <div>
      <AnswerState question={question} />
      <QuestionName question={question} />
      {question.answer && (
        <AnswerPresenter question={question} profile={profile} />
      )}
      <ReactionContainer question={question} />
    </div>
  );
};

export default QuestionBox;
