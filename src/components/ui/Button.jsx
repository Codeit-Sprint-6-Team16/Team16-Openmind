import arrowRightIcon from '../../assets/images/ic_arrow_right.svg';
import styles from '../css/Button.module.css';

const Button = ({ onClick, children, variant, size }) => {
  const buttonClassName = `${styles.button} ${styles[variant] || ''}`;
  const sizeClassName = `${styles[size] || ''}`;

  return (
    <button className={`${buttonClassName} ${sizeClassName}`} onClick={onClick}>
      {children}
      {variant === 'outline' && (
        <img src={arrowRightIcon} alt="화살표 아이콘" />
      )}
    </button>
  );
};

export default Button;
