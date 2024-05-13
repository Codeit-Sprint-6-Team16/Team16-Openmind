import styles from '@css/Input.module.css';
import personIcon from '@assets/ic_person.svg';

function Input({ name, onChangeHandler }) {
  return (
    <div className={styles.input}>
      <img src={personIcon} alt="사람 아이콘" />
      <input
        type="text"
        placeholder="이름을 입력하세요"
        value={name}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default Input;
