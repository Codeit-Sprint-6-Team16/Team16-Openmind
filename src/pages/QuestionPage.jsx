import styles from './css/QuestionPage.module.css';
import QuestionModalContainer from '@containers/QuestionModalContainer';
import FeedBox from '@ui/FeedBox';
import QuestionFeed from '@ui/QuestionFeed';
import QuestionProfile from '@ui/QuestionProfile';

function QuestionPage() {
  return (
    <main className="wrapper">
      <QuestionProfile />
      <div className="inner">
        <FeedBox>
          <QuestionFeed />
          <div className={styles.right}>
            <QuestionModalContainer />
          </div>
        </FeedBox>
      </div>
    </main>
  );
}

export default QuestionPage;
