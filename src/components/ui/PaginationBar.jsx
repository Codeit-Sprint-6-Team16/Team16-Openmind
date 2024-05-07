import styles from '../css/PaginationBar.module.css';

const PaginationBar = () => {
  const pages = [1, 2, 3, 4, 5];
  const currentPage = 1;

  return (
    <div className={styles.paginationBar}>
      <button className={styles.paginationButton}>{'<'}</button>
      {pages.map((page) => (
        <button
          key={page}
          className={
            currentPage === page
              ? styles.currentPageButton
              : styles.paginationButton
          }
        >
          {page}
        </button>
      ))}
      <button className={styles.paginationButton}>{'>'}</button>
    </div>
  );
};

export default PaginationBar;
