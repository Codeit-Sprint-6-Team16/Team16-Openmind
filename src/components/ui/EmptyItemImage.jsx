import emptyImage from '@assets/image_empty.png';
import styles from '@css/EmptyItemImage.module.css';

function EmptyItemImage() {
  return <img className={styles.image} src={emptyImage} />;
}

export default EmptyItemImage;
