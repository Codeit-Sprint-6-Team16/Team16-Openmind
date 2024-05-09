import { Link } from 'react-router-dom';

import styles from '/src/pages/css/MainPage.module.css';
import IdFormContainer from '@containers/IdFormContainer';
import Button from '@ui/Button';
import Logo from '@ui/Logo';

function MainPage() {
  return (
    <main className="wrapper">
      <div className={styles.mainWrap}>
        <div className="inner">
          <div className={styles.right}>
            <Button
              variant={'outline'}
              size={'small'}
              onClick={() => {
                location.href = '/list';
              }}
            >
              질문하러 가기
            </Button>
            <Link to="/">
              <Logo logoSize={'mobileSize'} />
            </Link>
          </div>
          <div className={styles.center}>
            <IdFormContainer />
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
