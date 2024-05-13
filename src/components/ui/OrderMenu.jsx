import arrowUpImg from '@assets/ic_arrow_up.svg';
import styles from '@css/ToggleMenu.module.css';

const OrderMenu = ({ isOpen, onToggleMenu, onClick, order }) => {
  return (
    <div className={styles.orderMenu}>
      <button className={styles.orderButton} onClick={onToggleMenu}>
        <span className={styles.orderText}>
          {order === 'name' ? '이름순' : '최신순'}
        </span>
        <img src={arrowUpImg} alt="화살표 이미지"></img>
      </button>
      {isOpen && (
        <ul className={styles.popup}>
          <li className={styles.disabled} onClick={() => onClick('newest')}>
            최신순
          </li>
          <li className={styles.disabled} onClick={() => onClick('name')}>
            이름순
          </li>
        </ul>
      )}
    </div>
  );
};

export default OrderMenu;
