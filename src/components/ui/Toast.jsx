import styles from '../css/Toast.module.css';

function Toast({ children }) {
  return (
    <>
      <div className={styles.toast}>
        <p>{children}</p>
      </div>
    </>
  );
}

export default Toast;
