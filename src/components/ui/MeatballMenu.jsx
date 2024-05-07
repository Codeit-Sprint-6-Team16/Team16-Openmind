import meatballImg from '../../assets/images/ic_meatball.svg';

const MEATBALL_OPTIONS = {
  EDIT: { label: '수정하기', value: 'edit' },
  DELETE_ANSWER: { label: '답변 삭제', value: 'deleteAnswer' },
  REJECT_ANSWER: { label: '답변 거절', value: 'rejectAnswer' },
  DELETE_QUESTION: { label: '질문 삭제', value: 'deleteQuestion' },
};

const MeatballMenu = ({ onClick }) => {
  return (
    <div className={styles.toggleMenu}>
      <button className={styles.MeatballButton} onClick={onToggleMenu}>
        <img src={meatballImg} alt="미트볼 메뉴"></img>
      </button>

      {isOpen && (
        <ul className={styles.popup}>
          <li className={styles.disabled}>
            <button onClick={() => onClick(MEATBALL_OPTIONS.EDIT.value)}>
              수정하기
            </button>
          </li>
          <li className={styles.disabled}>
            <button
              onClick={() => onClick(MEATBALL_OPTIONS.DELETE_ANSWER.value)}
            >
              답변 삭제
            </button>
          </li>
          <li className={styles.disabled}>
            <button
              onClick={() => onClick(MEATBALL_OPTIONS.REJECT_ANSWER.value)}
            >
              답변 거절
            </button>
          </li>
          <li className={styles.disabled}>
            <button onClick={() => onClick(OPTIONS.DELETE_QUESTION.value)}>
              질문 삭제
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MeatballMenu;
