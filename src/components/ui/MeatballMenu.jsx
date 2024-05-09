import meatballImg from '../../assets/images/ic_meatball.svg';
import styles from '../css/ToggleMenu.module.css';

const MEATBALL_OPTIONS = {
  EDIT: { label: '수정하기', value: 'edit' },
  DELETE_ANSWER: { label: '답변 삭제', value: 'deleteAnswer' },
  REJECT_ANSWER: { label: '답변 거절', value: 'rejectAnswer' },
  DELETE_QUESTION: { label: '질문 삭제', value: 'deleteQuestion' },
};

const MeatballMenu = ({ isOpen, onClick, onToggleMenu }) => {
  return (
    <div className={styles.toggleMenu}>
      <button className={styles.MeatballButton} onClick={onToggleMenu}>
        <img src={meatballImg} alt="미트볼 메뉴"></img>
      </button>

      {isOpen && (
        <ul className={styles.popup}>
          <li
            className={styles.disabled}
            onClick={() => onClick(MEATBALL_OPTIONS.EDIT.value)}
          >
            수정하기
          </li>
          <li
            className={styles.disabled}
            onClick={() => onClick(MEATBALL_OPTIONS.DELETE_ANSWER.value)}
          >
            삭제
          </li>
          <li
            className={styles.disabled}
            onClick={() => onClick(MEATBALL_OPTIONS.REJECT_ANSWER.value)}
          >
            답변 거절
          </li>
          <li
            className={styles.disabled}
            onClick={() => onClick(OPTIONS.DELETE_QUESTION.value)}
          >
            질문 삭제
          </li>
        </ul>
      )}
    </div>
  );
};

export default MeatballMenu;
