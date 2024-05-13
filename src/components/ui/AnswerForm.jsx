import Button from '@ui/Button';
import Textarea from '@ui/Textarea';
import styles from '@css/AnswerForm.module.css';

function AnswerForm({ profile, onClick, onChange, content }) {
  const { imageSource, name } = profile;

  return (
    <div className={styles.AnswerForm}>
      <div className={styles.section_image}>
        <img src={imageSource} />
      </div>
      <div className={styles.form_box}>
        <div className={styles.section_name}>{name}</div>
        <div className={styles.form}>
          <Textarea
            content={content}
            placeholder="답변을 입력해주세요"
            onChange={onChange}
          />
          <Button variant={'fill'} isDisabled={!content} onClick={onClick}>
            답변 완료
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AnswerForm;
