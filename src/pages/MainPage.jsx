import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import IdFormContainer from '@containers/IdFormContainer';
import styles from '@pages/MainPage.module.css';
import Button from '@ui/Button';
import Logo from '@ui/Logo';

function MainPage() {
  const navigate = useNavigate();
  return (
    <main className="wrapper">
      <div className={styles.mainWrap}>
        <div className="inner inner_main">
          <div className={styles.inner_order}>
            <div className={styles.right}>
              <Button
                variant={'outline'}
                size={'small'}
                onClick={() => navigate('/list')}
              >
                질문하러 가기
              </Button>
            </div>
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
