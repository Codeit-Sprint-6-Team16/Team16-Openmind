import AnswerPresenter from './AnswerPresenter';
import AnswerState from './AnswerState';
import FeedCard from './FeedCard';
import QuestionName from './QuestionName';
import ReactionContainer from '@containers/ReactionContainer';

const QuestionBox = ({ question, profile }) => {
  return (
    <FeedCard>
      <AnswerState question={question} />
      <QuestionName question={question} />
      {question.answer && (
        <AnswerPresenter question={question} profile={profile} />
      )}
      <ReactionContainer question={question} />
    </FeedCard>
  );
};

export default QuestionBox;
