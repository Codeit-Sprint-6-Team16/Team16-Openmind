import styles from './css/QuestionPage.module.css';
import QuestionModalContainer from '@containers/QuestionModalContainer';
import QuestionFeed from '@ui/QuestionFeed';
import QuestionProfile from '@ui/QuestionProfile';

function QuestionPage() {
  return (
    <main className="wrapper">
      <QuestionProfile />
      <div className="inner">
        <div className={styles.boxWrap}>
          <QuestionFeed />
          <div className={styles.right}>
            <QuestionModalContainer />
          </div>
        </div>
      </div>
    </main>
  );
}

export default QuestionPage;
