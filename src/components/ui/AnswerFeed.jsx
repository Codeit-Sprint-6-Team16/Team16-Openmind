import AnswerPresenter from './AnswerPresenter';
import AnswerState from './AnswerState';
import MeatballMenu from './MeatballMenu';
import QuestionCount from './QuestionCount';
import QuestionName from './QuestionName';
import styles from '@css/AnswerFeed.module.css';
import Button from '@ui/Button';
import Feed from '@ui/Feed';

function AnswerFeed() {
  return (
    <div className={styles.boxWrap}>
      <div className={styles.right}>
        <Button variant={'round'}>삭제하기</Button>
      </div>
      <Feed>
        <QuestionCount />
        <AnswerState />
        <MeatballMenu />
        <QuestionName />
        <AnswerPresenter />
      </Feed>
    </div>
  );
}

export default AnswerFeed;
