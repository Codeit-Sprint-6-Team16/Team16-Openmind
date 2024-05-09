import AnswerFeedContainer from '@containers/AnswerFeedContainer';
import QuestionProfile from '@ui/QuestionProfile';

function AnswerPage() {
  return (
    <main className="wrapper">
      <QuestionProfile />
      <div className="inner">
        <AnswerFeedContainer />
      </div>
    </main>
  );
}

export default AnswerPage;
