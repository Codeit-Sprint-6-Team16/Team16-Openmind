import styles from './css/AnswerPage.module.css';
import Button from '@ui/Button';
import FeedList from '@ui/FeedList';
import ProfileBox from '@ui/ProfileBox';

function AnswerPage() {
  return (
    <main className="wrapper">
      <ProfileBox />
      <div className="inner">
        <div className={styles.boxWrap}>
          <div className={styles.right}>
            <Button variant={'round'}>삭제하기</Button>
          </div>
          <FeedList />
        </div>
      </div>
    </main>
  );
}

export default AnswerPage;
