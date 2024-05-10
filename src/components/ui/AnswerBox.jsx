import AnswerState from './AnswerState';
import MeatballMenu from './MeatballMenu';
import QuestionName from './QuestionName';
import ReactionPresenter from './ReactionPresenter';
import AnswerFormContainer from '@containers/AnswerFormContainer';
import MeatballMenuContainer from '@containers/MeatballMenuContainer';
import styles from '@css/AnswerBox.module.css';

const AnswerBox = ({ question = {}, meatballMenuHandler }) => {
  return (
    <>
      <div className={styles.answerTop}>
        <AnswerState question={question} />
        <MeatballMenuContainer onClick={meatballMenuHandler} />
      </div>
      <QuestionName question={question} />
      <AnswerFormContainer />
      <ReactionPresenter />
    </>
  );
};

export default AnswerBox;
