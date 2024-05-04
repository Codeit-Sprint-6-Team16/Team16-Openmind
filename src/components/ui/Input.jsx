import personIcon from '../../assets/images/icon_person.svg';
import styles from '../css/Input.module.css';

function Input() {
  return (
    <div className={styles.input}>
      <img src={personIcon} alt="사람 아이콘" />
      <input type="text" placeholder="이름을 입력하세요" />
    </div>
  );
}

export default Input;
