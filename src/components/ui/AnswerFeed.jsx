import Button from './Button';
import Feed from './Feed';
import FeedBox from './FeedBox';
import FeedCard from './FeedCard';
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
  console.log(questionList);
  const count = {
    questionCount: 5,
  };

  return (
    <FeedBox>
      <div className={styles.right}>
        <Button variant={'round'} size={'small'} onClick={removeIDhandler}>
          삭제하기
        </Button>
      </div>
      <Feed>
        <QuestionCount profile={count} />
        <FeedCard>
          {questionList?.map((question) => (
            <AnswerBoxContainer
              setIsLoading={setIsLoading}
              question={question}
              profile={profile}
              key={question.id}
              setButtonClicked={setButtonClicked}
            />
          ))}
        </FeedCard>
      </Feed>
    </FeedBox>
  );
}

export default AnswerFeed;
