import styles from '@css/PaginationBar.module.css';

const PaginationBar = ({ onClick, pages, currentPage }) => {
  return (
    <div className={styles.paginationBar}>
      <button
        className={styles.paginationButton}
        onClick={() => {
          onClick(currentPage !== 1 ? currentPage - 1 : null);
        }}
      >
        {'<'}
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => {
            onClick(page);
          }}
          className={
            currentPage === page
              ? styles.currentPageButton
              : styles.paginationButton
          }
        >
          {page}
        </button>
      ))}

      <button
        className={styles.paginationButton}
        onClick={() => {
          onClick(
            currentPage !== pages[pages.length - 1] ? currentPage + 1 : null,
          );
        }}
      >
        {'>'}
      </button>
    </div>
  );
};

export default PaginationBar;
