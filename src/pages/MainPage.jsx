import { Link } from 'react-router-dom';

import styles from '../components/css/MainPage.module.css';
import Input from '../components/ui/Input';
import Logo from '../components/ui/Logo';
import IdFormContainer from '@containers/IdFormContainer';

function MainPage() {
  return (
    <main className="wrapper">
      <div className={styles.mainWrap}>
        {/* <Button /> */}
        <div className={styles.center}>
          <Link to="/">
            <Logo />
          </Link>
          <IdFormContainer />
        </div>
      </div>
    </main>
  );
}

export default MainPage;
