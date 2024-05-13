import OrderMenuContainer from '@containers/OrderMenuContainer';
import PaginationBar from '@ui/PaginationBar';
import ProfileList from '@ui/ProfileList';
import styles from '@css/ProfileListBox.module.css';

const ProfileListBox = ({
  profileList,
  onOrderClick,
  onPaginationClick,
  pages,
  currentPage,
  order,
}) => {
  return (
    <>
      <div className={styles.title_wrapper}>
        <h2 className={styles.title}>누구에게 질문할까요?</h2>
        <OrderMenuContainer onClick={onOrderClick} order={order} />
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
