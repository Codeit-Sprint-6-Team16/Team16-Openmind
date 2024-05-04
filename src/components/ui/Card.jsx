import testMessageimg from '../../assets/images/image_messages_test.svg';
import testprofileimg from '../../assets/images/image_test.svg';
import styles from '@css/Card.module.css';

const Card = () => {
  return (
    <div className={styles.Card}>
      <div className={styles.card_profile}>
        <img src={testprofileimg} />
        <p>아초는고양이</p>
      </div>
      <div className={styles.card_content}>
        <img src={testMessageimg} />
        <span className={styles.card_content_text}>받은 질문</span>
        <span>9개</span>
      </div>
    </div>
  );
};

export default Card;
