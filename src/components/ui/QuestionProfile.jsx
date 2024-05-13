import { Link } from 'react-router-dom';

import ProfileContainer from '@containers/ProfileContainer';
import ToastContainer from '@containers/ToastContainer';
import styles from '@css/QuestionProfile.module.css';
import Logo from '@ui/Logo';

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
