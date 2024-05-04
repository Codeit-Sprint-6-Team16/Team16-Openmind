import styles from './css/QuestionPage.module.css';
import Button from '@ui/Button';
import FeedList from '@ui/FeedList';
import ProfileBox from '@ui/ProfileBox';

function QuestionPage() {
  return (
    <main className="wrapper">
      <ProfileBox />
      <div className="inner">
        <div className={styles.boxWrap}>
          <FeedList />
          <div className={styles.right}>
            <Button variant={'round'}>질문 작성하기</Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default QuestionPage;
