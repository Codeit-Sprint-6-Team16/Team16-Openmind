import EmptyItemImage from './EmptyItemImage';
import FeedBox from './FeedBox';
import QuestionBox from './QuestionBox';
import QuestionCount from './QuestionCount';
import QuestionModalContainer from '@containers/QuestionModalContainer';
import styles from '@css/QuestionFeed.module.css';
import Feed from '@ui/Feed';

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
