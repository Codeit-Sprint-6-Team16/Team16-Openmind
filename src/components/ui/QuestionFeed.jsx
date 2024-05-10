import FeedBox from './FeedBox';
import QuestionBox from './QuestionBox';
import QuestionCount from './QuestionCount';
import styles from '@css/QuestionFeed.module.css';
import Feed from '@ui/Feed';

function QuestionFeed({ questionList, profile }) {
  return (
    <FeedBox>
      <Feed>
        <QuestionCount profile={profile} />
        {questionList.map((question) => (
          <QuestionBox
            question={question}
            profile={profile}
            key={question.id}
          />
        ))}
      </Feed>
    </FeedBox>
  );
}

export default QuestionFeed;
