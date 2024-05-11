import { useState } from 'react';

import Button from './Button';
import Textarea from './Textarea';
// import image from '@assets/images/image_profile.svg';
import styles from '@css/AnswerForm.module.css';

function AnswerForm({ profile, onClick, onChange, content, isRejected }) {
  const { imageSource, name } = profile;

  return (
    <div className={styles.AnswerForm}>
      <div className={styles.section_image}>
        <img src={imageSource} />
      </div>
      <div className={styles.formBox}>
        <div className={styles.section_name}>{name}</div>
        {isRejected ? (
          <div className={styles.isRejected}>답변 거절</div>
        ) : (
          <div className={styles.form}>
            <Textarea
              value={content}
              placeholder="답변을 입력해주세요"
              onChange={onChange}
            />
            <Button variant={'fill'} isDisabled={!content} onClick={onClick}>
              답변 완료
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AnswerForm;
