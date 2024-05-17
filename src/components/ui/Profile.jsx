import styles from '@css/Profile.module.css';

const Profile = ({ profile }) => {
  return (
    <div className={styles.Profile}>
      {profile && <img src={profile.imageSource} />}
      {profile && <p>{profile.name}</p>}
    </div>
  );
};

export default Profile;
