import { Link } from 'react-router-dom';

import Logo from './Logo';
import ProfileContainer from '@containers/ProfileContainer';
import ToastContainer from '@containers/ToastContainer';
import styles from '@css/QuestionProfile.module.css';

function QuestionProfile() {
  return (
    <div className={styles.profileWrap}>
      <div className={styles.center}>
        <Link to="/">
          <Logo logoSize={'small'} />
        </Link>
        <ProfileContainer />
        <ToastContainer />
      </div>
    </div>
  );
}

export default QuestionProfile;
