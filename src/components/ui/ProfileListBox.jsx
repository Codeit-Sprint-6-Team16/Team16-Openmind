import ToggleMenuContainer from '../containers/ToggleMenuContainer';
import styles from '../css/ProfileListBox.module.css';
import PaginationBar from '@ui/PaginationBar';
import ProfileList from '@ui/ProfileList';

const ProfileListBox = ({ profileList, handleOrder }) => {
  return (
    <>
      <div className={styles.title_wrapper}>
        <h2 className={styles.title}>누구에게 질문할까요?</h2>
        <ToggleMenuContainer onClick={handleOrder} />
      </div>
      <ProfileList profileList={profileList} />
      <PaginationBar />
    </>
  );
};

export default ProfileListBox;
