import QuestionFeedContainer from '@containers/QuestionFeedContainer';
import QuestionProfile from '@ui/QuestionProfile';

function QuestionPage() {
  return (
    <main className="wrapper">
      <QuestionProfile />
      <div className="inner">
        <QuestionFeedContainer />
      </div>
    </main>
  );
}

export default QuestionPage;
