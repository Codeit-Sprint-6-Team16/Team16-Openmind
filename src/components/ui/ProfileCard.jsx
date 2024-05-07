import messageIcon from '../../assets/images/image_messages_icon.svg';
import styles from '@css/ProfileCard.module.css';

const ProfileCard = ({ profile }) => {
  return (
    <div className={styles.Card}>
      <div className={styles.card_profile}>
        <img src={profile.imageSource} />
        <p>{profile.name}</p>
      </div>
      <div className={styles.card_content}>
        <img src={messageIcon} />
        <span className={styles.card_content_text}>받은 질문</span>
        <span>{profile.questionCount}</span>
      </div>
    </div>
  );
};

export default ProfileCard;
