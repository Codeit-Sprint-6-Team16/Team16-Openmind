import { useState } from 'react';

import Button from './Button';
import Textarea from './Textarea';
// import image from '@assets/images/image_profile.svg';
import styles from '@css/AnswerForm.module.css';

function AnswerForm({ profile = {}, onClick, onChange, content }) {
  const { imageSource , name = '아초는고양이' } = profile;
  // const [value, setValue] = useState();

  return (
    <div className={styles.AnswerForm}>
      <div className={styles.section_image}>
        <img src={imageSource} />
      </div>
      <div className={styles.formBox}>
        <div className={styles.section_name}>{name}</div>
        <div className={styles.form}>
          <Textarea value={} placeholder="답변을 입력해주세요" />
          <Button variant={'fill'} isDisabled={}>
            답변 완료
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AnswerForm;
