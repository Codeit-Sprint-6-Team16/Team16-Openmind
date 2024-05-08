// import AnswerFeedContainer from '@containers/AnswerFeedContainer';
import AnswerFeed from '@ui/AnswerFeed';
import QuestionProfile from '@ui/QuestionProfile';

function AnswerPage() {
  return (
    <main className="wrapper">
      <QuestionProfile />
      <div className="inner">
        {/* <AnswerFeedContainer /> */}
        <AnswerFeed />
      </div>
    </main>
  );
}

export default AnswerPage;
