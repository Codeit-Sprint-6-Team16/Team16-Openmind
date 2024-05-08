import ToggleMenuContainer from '../containers/ToggleMenuContainer';
import styles from '../css/ProfileListBox.module.css';
import PaginationBar from '@ui/PaginationBar';
import ProfileList from '@ui/ProfileList';

const ProfileListBox = ({
  profileList,
  onOrderClick,
  onPaginationClick,
  pages,
  currentPage,
}) => {
  return (
    <>
      <div className={styles.title_wrapper}>
        <h2 className={styles.title}>누구에게 질문할까요?</h2>
        <ToggleMenuContainer onClick={onOrderClick} />
      </div>
      <ProfileList profileList={profileList} />
      {pages && pages[pages.length - 1] !== 1 && (
        <PaginationBar
          onClick={onPaginationClick}
          pages={pages}
          currentPage={currentPage}
        />
      )}
    </>
  );
};

export default ProfileListBox;
