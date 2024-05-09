import AnswerState from './AnswerState';
import MeatballMenu from './MeatballMenu';
import QuestionName from './QuestionName';
import ReactionPresenter from './ReactionPresenter';
import AnswerFormContainer from '@containers/AnswerFormContainer';
import styles from '@css/AnswerBox.module.css';

const AnswerBox = ({ question = {} }) => {
  return (
    <>
      <div className={styles.answerTop}>
        <AnswerState question={question} />
        <MeatballMenu />
      </div>
      <QuestionName question={question} />
      <AnswerFormContainer />
      <ReactionPresenter />
    </>
  );
};

export default AnswerBox;
