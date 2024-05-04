import testProfileImage from '../../assets/images/image_profile.svg';
import styles from '../css/Profile.module.css';

const Profile = ({
  profileImage = testProfileImage,
  profileName = '아초는고양이',
}) => {
  return (
    <div className={styles.Profile}>
      <img src={profileImage} />
      <p>{profileName}</p>
    </div>
  );
};

export default Profile;
