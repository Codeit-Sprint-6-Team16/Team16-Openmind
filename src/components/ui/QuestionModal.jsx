import Button from './Button';
import Textarea from './Textarea';
import EscIcon from '@assets/images/ic_esc.svg';
import QuestionIcon from '@assets/images/ic_question.svg';
import sampleImage from '@assets/images/image_profile.svg';
import styles from '@css/QuestionModal.module.css';

function QuestionModal({
  profileImage = sampleImage,
  profileName = '아초는고양이',
  closeModal,
}) {
  return (
    <div className={styles.modalWrap}>
      <div className={styles.dim} onClick={closeModal}></div>
      <div className={styles.modal}>
        <div className={styles.modalTop}>
          <div className={styles.title}>
            <img src={QuestionIcon} alt="질문 아이콘" /> 질문을 작성하세요
          </div>
          <button type="button" onClick={closeModal}>
            <img src={EscIcon} alt="닫기" />
          </button>
        </div>
        <div className={styles.profileInfo}>
          <span>To.</span>
          <img src={profileImage} alt="프로필 이미지" />
          {profileName}
        </div>
        <Textarea placeholder={'질문을 입력해주세요'} />
        <Button variant={'fill'} size={'medium'}>
          질문 보내기
        </Button>
      </div>
    </div>
  );
}

export default QuestionModal;
