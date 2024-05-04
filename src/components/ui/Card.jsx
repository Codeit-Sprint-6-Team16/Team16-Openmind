import messageicon from '../../assets/images/image_messages_icon.svg';
import testprofileimg from '../../assets/images/image_test.svg';
import styles from '@css/Card.module.css';

const Card = ({ profile, name, content, count }) => {
  return (
    <div className={styles.Card}>
      <div className={styles.card_profile}>
        <img src={testprofileimg} />
        <p>아초는고양이</p>
      </div>
      <div className={styles.card_content}>
        <img src={messageicon} />
        <span className={styles.card_content_text}>받은 질문</span>
        <span>9개</span>
      </div>
    </div>

    // <div className={styles.Card}>
    //   <div className={styles.card_profile}>
    //   <img src={profile} />
    //   <p>{name}</p>
    //  </div>
    // <div className={styles.card_content}>
    //   <img src={messageicon} />
    //   <span className={styles.card_content_text}>{content}</span>
    //   <span>{count}</span>
    // </div>
    // </div>
  );
};

export default Card;
