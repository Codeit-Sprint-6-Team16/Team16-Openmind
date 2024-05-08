import styles from './css/AnswerPage.module.css';
import AnswerFeed from '@ui/AnswerFeed';
import QuestionProfile from '@ui/QuestionProfile';

function AnswerPage() {
  return (
    <main className="wrapper">
      <QuestionProfile />
      <div className="inner">
        <AnswerFeed />
      </div>
    </main>
  );
}

export default AnswerPage;
