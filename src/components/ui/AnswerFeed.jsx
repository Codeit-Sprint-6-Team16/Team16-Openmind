import Button from './Button';
import Feed from './Feed';
import FeedBox from './FeedBox';
import QuestionCount from './QuestionCount';
import AnswerBoxContainer from '@containers/AnswerBoxContainer';
import styles from '@css/AnswerFeed.module.css';

function AnswerFeed({
  questionList,
  profile,
  removeIDhandler,
  setIsLoading,
  setButtonClicked,
}) {
  return (
    <FeedBox>
      <div className={styles.right}>
        <Button variant={'round'} size={'small'} onClick={removeIdHandler}>
          삭제하기
        </Button>
      </div>
      <Feed>
        <QuestionCount profile={profile} />
        {questionList?.map((question) => (
          <AnswerBoxContainer
            setIsLoading={setIsLoading}
            question={question}
            profile={profile}
            key={question.id}
            setButtonClicked={setButtonClicked}
          />
        ))}
      </Feed>
    </FeedBox>
  );
}

export default AnswerFeed;
