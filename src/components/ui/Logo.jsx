import styles from '@css/Logo.module.css';
import LogoIcon from '@assets/logo.png';

function Logo({ logoSize }) {
  return (
    <img src={LogoIcon} alt="로고 아이콘" className={`${styles[logoSize]}`} />
  );
}

export default Logo;
