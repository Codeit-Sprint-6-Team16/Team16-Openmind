import styles from './css/QuestionPage.module.css';
import QuestionFeedContainer from '@containers/QuestionFeedContainer';
import QuestionModalContainer from '@containers/QuestionModalContainer';
import QuestionProfile from '@ui/QuestionProfile';

function QuestionPage() {
  return (
    <main className="wrapper">
      <QuestionProfile />
      <div className="inner">
        <QuestionFeedContainer />
        <div className={styles.right}>
          <QuestionModalContainer />
        </div>
      </div>
    </main>
  );
}

export default QuestionPage;
