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
          <Button variant={'outline'}>답변하러 가기</Button>
        </div>
        <h2 className={styles.title}>누구에게 질문할까요?</h2>
        <ProfileListBoxContainer />
      </div>
    </main>
  );
}

export default ListPage;
