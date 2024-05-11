import AnswerState from './AnswerState';
import FeedCard from './FeedCard';
import QuestionName from './QuestionName';
import ReactionPresenter from './ReactionPresenter';
import AnswerFormContainer from '@containers/AnswerFormContainer';
import MeatballMenuContainer from '@containers/MeatballMenuContainer';
import styles from '@css/AnswerBox.module.css';

const AnswerBox = ({
  profile,
  question = {},
  meatballMenuHandler,
  editMode,
  setEditMode,
}) => {
  return (
    <FeedCard>
      <div className={styles.answerTop}>
        <AnswerState question={question} />
        <MeatballMenuContainer onClick={meatballMenuHandler} />
      </div>
      <QuestionName question={question} />
      <AnswerFormContainer
        question={question}
        profile={profile}
        editMode={editMode}
        setEditMode={setEditMode}
      />
      <ReactionPresenter question={question} />
    </FeedCard>
  );
};

export default AnswerBox;
