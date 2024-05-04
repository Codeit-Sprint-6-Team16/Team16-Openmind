import { Link } from 'react-router-dom';

import styles from '../components/css/ListPage.module.css';
import Logo from '../components/ui/Logo';

// import CardList from '@ui/CardList';

function ListPage() {
  return (
    <main className="wrapper">
      <div className="inner">
        <div className={styles.header}>
          <Link to="/">
            <Logo />
          </Link>
          {/* <Button /> */}
        </div>
        {/* <div>
          <CardList />
        </div> */}
        <h2>누구에게 질문할까요?</h2>
      </div>
    </main>
  );
}

export default ListPage;
