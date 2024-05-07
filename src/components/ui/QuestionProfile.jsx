import { Link } from 'react-router-dom';

import Logo from './Logo';
import Profile from './Profile';
import SnsLink from './SnsLink';
import styles from '@css/QuestionProfile.module.css';

function QuestionProfile() {
  return (
    <div className={styles.profileWrap}>
      <div className={styles.center}>
        <Link to="/">
          <Logo logoSize={'small'} />
        </Link>
        <Profile />
        <SnsLink />
      </div>
    </div>
  );
}

export default QuestionProfile;
