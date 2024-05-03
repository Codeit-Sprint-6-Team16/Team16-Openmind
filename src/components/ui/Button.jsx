import arrowRightIcon from '../../assets/images/ic_arrow_right.png';
import styles from '../css/Button.module.css';

const Button = ({ onClick, children, variant }) => {
  const buttonClassName = `${styles.button} ${styles[variant] || ''}`;

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
      {variant === 'outline' && (
        <img src={arrowRightIcon} alt="화살표 아이콘" />
      )}
    </button>
  );
};

export default Button;
