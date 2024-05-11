import Button from './Button';
import Feed from './Feed';
import FeedBox from './FeedBox';
import QuestionCount from './QuestionCount';
import AnswerBoxContainer from '@containers/AnswerBoxContainer';
import styles from '@css/AnswerFeed.module.css';

function AnswerFeed({ questionList, profile, removeIdHandler }) {
  return (
    <FeedBox>
      <div className={styles.right}>
        <Button variant={'round'} size={'small'} onClick={removeIdHandler}>
          삭제하기
        </Button>
      </div>
      <Feed>
        {profile && <QuestionCount profile={profile} />}
        {questionList?.map((question) => (
          <AnswerBoxContainer
            question={question}
            profile={profile}
            key={question.id}
          />
        ))}
      </Feed>
    </FeedBox>
  );
}

export default AnswerFeed;
