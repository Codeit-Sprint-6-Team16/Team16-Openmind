import AnswerPresenter from './AnswerPresenter';
import AnswerState from './AnswerState';
import QuestionName from './QuestionName';
import Reaction from './Reaction';

const QuestionBox = () => {
  return (
    <div>
      <AnswerState />
      <QuestionName />
      <AnswerPresenter />
      <Reaction />
    </div>
  );
};

export default QuestionBox;
