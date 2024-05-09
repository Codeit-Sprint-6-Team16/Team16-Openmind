import arrowUpImg from '../../assets/images/ic_arrow_up.svg';
import styles from '../css/ToggleMenu.module.css';

const OPTIONS = {
  NAME: { label: '이름순', value: 'name' },
  NEWEST: { label: '최신순', value: 'newest' },
};

const ToggleMenu = ({ isOpen, onClick, onToggleMenu, order }) => {
  return (
    <div className={styles.toggleMenu}>
      <button className={styles.iconButton} onClick={onToggleMenu}>
        <span className={styles.iconText}>
          {order === 'name' ? '이름순' : '최신순'}
        </span>
        <img src={arrowUpImg} alt="화살표 이미지"></img>
      </button>
      {isOpen && (
        <ul className={styles.popup}>
          <li className={styles.disabled}>
            <button onClick={() => onClick(OPTIONS.NEWEST.value)}>
              최신순
            </button>
          </li>
          <li className={styles.disabled}>
            <button onClick={() => onClick(OPTIONS.NAME.value)}>이름순</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ToggleMenu;
