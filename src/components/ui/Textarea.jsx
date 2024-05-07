import styles from '@css/Textarea.module.css';

function Textarea({ placeholder = '' }) {
  return (
    <>
      <textarea
        className={styles.textarea}
        placeholder={placeholder}
      ></textarea>
    </>
  );
}

export default Textarea;
