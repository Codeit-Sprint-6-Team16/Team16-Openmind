import { Link } from 'react-router-dom';

import styles from './css/ListPage.module.css';
import ProfileListBoxContainer from '@containers/ProfileListBoxContainer';

import Button from '@ui/Button';
import Logo from '@ui/Logo';

function ListPage() {
  return (
    <main className="wrapper">
      <div className="inner">
        <div className={styles.header}>
          <Link to="/">
            <Logo logoSize={'small'} />
          </Link>
          <Button variant={'outline'} size={'large'}>
            답변하러 가기
          </Button>
        </div>
        <ProfileListBoxContainer />
      </div>
    </main>
  );
}

export default ListPage;
