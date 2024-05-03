import styles from '../components/css/ListPage.module.css';
import CardList from '@ui/CardList';

function ListPage() {
  return (
    <div className={styles.ListPage}>
      <CardList />
      <CardList />
      <CardList />
      <CardList />
      <CardList />
      <CardList />
      <CardList />
      <CardList />
    </div>
  );
}

export default ListPage;
