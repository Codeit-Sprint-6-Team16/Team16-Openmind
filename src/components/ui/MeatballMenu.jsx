import meatballImg from '@assets/ic_meatball.svg';
import styles from '@css/ToggleMenu.module.css';

const MeatballMenu = ({ isOpen, onToggleMenu, onClick }) => {
  return (
    <div className={styles.meatballMenu}>
      <button className={styles.MeatballButton} onClick={onToggleMenu}>
        <img src={meatballImg} alt="미트볼 메뉴"></img>
      </button>

      {isOpen && (
        <ul className={styles.popup}>
          <li
            className={`${styles['disabled-meatball']} ${styles['disabled-edit']}`}
            onClick={() => onClick('edit')}
          >
            수정하기
          </li>
          <li
            className={`${styles['disabled-meatball']} ${styles['disabled-x']}`}
            onClick={() => onClick('deleteAnswer')}
          >
            답변삭제
          </li>
          <li
            className={`${styles['disabled-meatball']} ${styles['disabled-x']}`}
            onClick={() => onClick('rejectAnswer')}
          >
            답변거절
          </li>
          <li
            className={`${styles['disabled-meatball']} ${styles['disabled-x']}`}
            onClick={() => onClick('deleteQuestion')}
          >
            질문삭제
          </li>
        </ul>
      )}
    </div>
  );
};

export default MeatballMenu;
