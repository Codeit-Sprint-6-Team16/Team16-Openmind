import { Link } from 'react-router-dom';

import styles from './css/MainPage.module.css';
import Button from '@ui/Button';
import Input from '@ui/Input';
import Logo from '@ui/Logo';

function MainPage() {
  return (
    <main className="wrapper">
      <div className={styles.mainWrap}>
        <div className="inner">
          <div className={styles.right}>
            <Button
              variant={'outline'}
              onClick={() => {
                location.href = '/list';
              }}
            >
              질문하러 가기
            </Button>
          </div>
          <div className={styles.center}>
            <Link to="/">
              <Logo />
            </Link>
            <form className={styles.form}>
              <Input />
              <Button variant={'fill'}>질문받기</Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
