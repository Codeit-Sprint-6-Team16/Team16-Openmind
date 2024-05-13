import { Link } from 'react-router-dom';
import styles from '@css/SnsLink.module.css';
import facebookImage from '@assets/image_facebook.svg';
import kakaoImage from '@assets/image_kakao.svg';
import linkImage from '@assets/image_link.svg';

const SnsLink = ({ onClick }) => {
  return (
    <>
      <div className={styles.SnsLink}>
        <img src={linkImage} onClick={onClick} />
        <Link to="https://www.kakaocorp.com/page/service/service/KakaoTalk">
          <img src={kakaoImage} />
        </Link>
        <Link to="https://www.facebook.com/">
          <img src={facebookImage} />
        </Link>
      </div>
    </>
  );
};

export default SnsLink;
