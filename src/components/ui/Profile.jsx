import { Link } from 'react-router-dom';

import Logo from './Logo';
import styles from '@css/Profile.module.css';

function Profile() {
  return (
    <div className={styles.profileWrap}>
      <div className={styles.center}>
        <Link to="/">
          <Logo logoSize={'small'} />
        </Link>
        {/* <ProfileImage />
        <IconList /> */}
      </div>
    </div>
  );
}

export default Profile;
