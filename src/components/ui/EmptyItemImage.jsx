import emptyImage from '@assets/images/image_empty.png';
import styles from '@css/EmptyItemImage.module.css';

function EmptyItemImage() {
  return <img className={styles.image} src={emptyImage}></img>;
}

export default EmptyItemImage;