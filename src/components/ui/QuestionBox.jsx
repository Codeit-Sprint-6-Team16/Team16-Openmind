import ReactionContainer from '@containers/ReactionContainer';
import AnswerPresenter from '@ui/AnswerPresenter';
import AnswerState from '@ui/AnswerState';
import FeedCard from '@ui/FeedCard';
import QuestionName from '@ui/QuestionName';

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
