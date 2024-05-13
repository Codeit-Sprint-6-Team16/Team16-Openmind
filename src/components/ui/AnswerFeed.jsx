import AnswerBoxContainer from '@containers/AnswerBoxContainer';
import styles from '@css/AnswerFeed.module.css';
import Button from '@ui/Button';
import EmptyItemImage from '@ui/EmptyItemImage';
import Feed from '@ui/Feed';
import FeedBox from '@ui/FeedBox';
import QuestionCount from '@ui/QuestionCount';

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
        {!profile.questionCount ? <EmptyItemImage /> : null}
      </Feed>
    </FeedBox>
  );
}

export default AnswerFeed;
