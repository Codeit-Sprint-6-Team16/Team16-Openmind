import QuestionModalContainer from '@containers/QuestionModalContainer';
import EmptyItemImage from '@ui/EmptyItemImage';
import Feed from '@ui/Feed';
import FeedBox from '@ui/FeedBox';
import QuestionBox from '@ui/QuestionBox';
import QuestionCount from '@ui/QuestionCount';
import styles from '@css/QuestionFeed.module.css';

function QuestionFeed({ questionList, profile, loadProfile, loadQuestions }) {
  return (
    <FeedBox>
      <div className={styles.right}>
        <QuestionModalContainer
          profile={profile}
          loadProfile={loadProfile}
          loadQuestions={loadQuestions}
        />
      </div>
      <Feed>
        <QuestionCount profile={profile} />
        {questionList.map((question) => (
          <QuestionBox
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

export default QuestionFeed;
