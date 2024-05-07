import styles from '@css/ProfileList.module.css';
import ProfileCard from '@ui/ProfileCard';

const ProfileList = ({ profileList }) => {
  return (
    <div className={styles.ProfileList}>
      {profileList &&
        profileList.map((profile) => {
          return <ProfileCard profile={profile} key={profile.id} />;
        })}
    </div>
  );
};

export default ProfileList;
