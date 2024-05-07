import styles from '@css/IdForm.module.css';

function IdForm({ children }) {
  return <div className={styles.form}>{children}</div>;
}

export default IdForm;
