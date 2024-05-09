// import AnswerPresenter from './AnswerPresenter';
// import AnswerState from './AnswerState';
// import MeatballMenu from './MeatballMenu';
// import QuestionName from './QuestionName';
import Button from './Button';
import Feed from './Feed';
import FeedBox from './FeedBox';
import QuestionCount from './QuestionCount';
import styles from '@css/AnswerFeed.module.css';

function AnswerFeed() {
  const count = {
    questionCount: 5,
  };

  return (
    <FeedBox>
      <div className={styles.right}>
        <Button variant={'round'} size={'small'}>
          삭제하기
        </Button>
      </div>
      <Feed>
        <QuestionCount profile={count} />
        {/* <AnswerState />
        <MeatballMenu />
        <QuestionName />
        <AnswerPresenter /> */}
      </Feed>
    </FeedBox>
  );
}

export default AnswerFeed;
