import { Link } from 'react-router-dom';

import facebookImage from '../../assets/images/image_facebook.svg';
import kakaoImage from '../../assets/images/image_kakao.svg';
import linkImage from '../../assets/images/image_link.svg';
import styles from '../css/SnsLink.module.css';

const SnsLink = () => {
  return (
    <div className={styles.SnsLink}>
      <img src={linkImage} />
      <Link to="https://www.kakaocorp.com/page/service/service/KakaoTalk">
        <img src={kakaoImage} />
      </Link>
      <Link to="https://www.facebook.com/">
        <img src={facebookImage} />
      </Link>
    </div>
  );
};

export default SnsLink;
