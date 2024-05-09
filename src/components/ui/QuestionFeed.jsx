import FeedBox from './FeedBox';
import FeedCard from './FeedCard';
import QuestionBox from './QuestionBox';
import QuestionCount from './QuestionCount';
import styles from '@css/QuestionFeed.module.css';
import Feed from '@ui/Feed';

function QuestionFeed({ questionList, profile }) {
  // console.log(questionList);

  return (
    <FeedBox>
      <Feed>
        <QuestionCount profile={profile} />
        <FeedCard>
          {questionList?.map((question) => (
            <QuestionBox
              question={question}
              profile={profile}
              key={question.id}
            />
          ))}
        </FeedCard>
      </Feed>
    </FeedBox>
  );
}

export default QuestionFeed;
