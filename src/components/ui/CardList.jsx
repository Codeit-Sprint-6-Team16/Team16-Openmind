import styles from '@css/CardList.module.css';
import Card from '@ui/Card';

const CardList = () => {
  return (
    <div className={styles.CardList}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardList;
