import { Link } from 'react-router-dom';

import Logo from './Logo';
import Profile from './Profile';
import ToastContainer from '@containers/ToastContainer';
import styles from '@css/QuestionProfile.module.css';

function QuestionProfile() {
  return (
    <div className={styles.profileWrap}>
      <div className={styles.center}>
        <Link to="/">
          <Logo logoSize={'small'} />
        </Link>
        <Profile />
        <ToastContainer />
      </div>
    </div>
  );
}

export default QuestionProfile;
