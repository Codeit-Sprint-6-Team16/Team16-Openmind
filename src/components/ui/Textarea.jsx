import styles from '@css/Textarea.module.css';

function Textarea({ placeholder = '', content, onChange }) {
  return (
    <>
      <textarea
        className={styles.textarea}
        placeholder={placeholder}
        value={content}
        onChange={onChange}
      ></textarea>
    </>
  );
}

export default Textarea;
