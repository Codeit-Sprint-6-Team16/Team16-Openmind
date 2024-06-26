import { Link } from 'react-router-dom';
import styles from '@css/ProfileCard.module.css';
import messageIcon from '@assets/image_messages_icon.svg';

const ProfileCard = ({ profile }) => {
  return (
    <Link to={`/post/${profile.id}`} className={styles.ProfileCard}>
      <div className={styles.section_profile}>
        <img src={profile.imageSource} />
        <p>{profile.name}</p>
      </div>
      <div className={styles.section_content}>
        <img src={messageIcon} />
        <span className={styles.section_content_text}>받은 질문</span>
        <span>{profile.questionCount}</span>
      </div>
    </Link>
  );
};

export default ProfileCard;
