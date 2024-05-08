import styles from './css/AnswerPage.module.css';
import Button from '@ui/Button';
import QuestionFeed from '@ui/QuestionFeed';
import QuestionProfile from '@ui/QuestionProfile';

function AnswerPage() {
  return (
    <main className="wrapper">
      <QuestionProfile />
      <div className="inner">
        <div className={styles.boxWrap}>
          <div className={styles.right}>
            <Button variant={'round'}>삭제하기</Button>
          </div>
          <QuestionFeed />
        </div>
      </div>
    </main>
  );
}

export default AnswerPage;
