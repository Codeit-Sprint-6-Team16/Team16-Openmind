import { Link } from 'react-router-dom';
import styles from '@pages/ListPage.module.css';
import ProfileListBoxContainer from '@containers/ProfileListBoxContainer';
import ReplyButtonContainer from '@containers/ReplyButtonContainer';
import Logo from '@ui/Logo';

function ListPage() {
  return (
    <main className="wrapper">
      <div className="inner">
        <div className={styles.header}>
          <Link to="/">
            <Logo logoSize={'small'} />
          </Link>
          <ReplyButtonContainer />
        </div>
        <ProfileListBoxContainer />
      </div>
    </main>
  );
}

export default ListPage;
