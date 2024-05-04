import styles from '@css/CardList.module.css';
import Card from '@ui/Card';

const CardList = ({ profileList }) => {
  return (
    <div className={styles.CardList}>
      {profileList &&
        profileList.map((profile) => {
          return <Card profile={profile} />;
        })}
    </div>
  );
};

export default CardList;
