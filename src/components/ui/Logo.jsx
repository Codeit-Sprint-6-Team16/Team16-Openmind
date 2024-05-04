import LogoIcon from '../../assets/images/logo.png';
import styles from '@css/Logo.module.css';

function Logo({ logoSize }) {
  return (
    <img src={LogoIcon} alt="로고 아이콘" className={`${styles[logoSize]}`} />
  );
}

export default Logo;
