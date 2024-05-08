import styles from './css/AnswerPage.module.css';
import AnswerFeedContainer from '@containers/AnswerFeedContainer';
import Button from '@ui/Button';
import QuestionFeed from '@ui/QuestionFeed';
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
