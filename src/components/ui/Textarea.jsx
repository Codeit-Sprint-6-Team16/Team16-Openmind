import styles from '@css/Textarea.module.css';

function Textarea({ placeholder = '', value, onChange }) {
  return (
    <>
      <textarea
        className={styles.textarea}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
    </>
  );
}

export default Textarea;
