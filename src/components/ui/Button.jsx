import arrowRightIcon from '../../assets/images/ic_arrow_right.png';
import styles from '../css/Button.module.css';

const Button = ({ onClick, isDisabled, children, variant, type }) => {
  const buttonClassName = `${styles.button} ${styles[variant] || ''}`;

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={buttonClassName}
      onClick={onClick}
    >
      {children}
      {variant === 'outline' && (
        <img src={arrowRightIcon} alt="화살표 아이콘" />
      )}
    </button>
  );
};

export default Button;
