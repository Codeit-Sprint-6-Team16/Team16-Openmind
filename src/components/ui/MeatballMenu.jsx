import meatballImg from '../../assets/images/ic_meatball.svg';
import styles from '../css/ToggleMenu.module.css';

const MeatballMenu = ({ isOpen, onToggleMenu, removeAnswerHandler }) => {
  return (
    <div className={styles.meatballMenu}>
      <button className={styles.MeatballButton} onClick={onToggleMenu}>
        <img src={meatballImg} alt="미트볼 메뉴"></img>
      </button>

      {isOpen && (
        <ul className={styles.popup}>
          <li className={styles.disabled} onClick={removeAnswerHandler}>
            수정하기
          </li>
          <li className={styles.disabled} onClick={removeAnswerHandler}>
            답변삭제
          </li>
          <li className={styles.disabled} onClick={removeAnswerHandler}>
            답변거절
          </li>
          <li className={styles.disabled} onClick={removeAnswerHandler}>
            질문삭제
          </li>
        </ul>
      )}
    </div>
  );
};

export default MeatballMenu;
