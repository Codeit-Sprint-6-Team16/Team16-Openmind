import styles from '@css/EmptyItemImage.module.css';
import emptyImage from '@assets/image_empty.png';

function EmptyItemImage() {
  return <img className={styles.image} src={emptyImage} />;
}

export default EmptyItemImage;
