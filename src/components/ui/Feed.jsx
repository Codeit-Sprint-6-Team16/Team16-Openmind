import styles from '@css/Feed.module.css';

// function Feed({ questionList }) {
//   return (
//     <div className={styles.box}>
//       {questionList.map((question) => (
//         <QuestionBox question={question} key={question.id} />
//       ))}
//     </div>
//   );
function Feed({ children }) {
  return <div className={styles.box}>{children}</div>;
}

export default Feed;
