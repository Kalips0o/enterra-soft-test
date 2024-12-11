import starIcon from '../../../assets/star.svg';
import styles from './Stars.module.less';

const Stars = () => (
  <div className={styles.stars}>
    <img src={starIcon} alt="Star" />
    <img src={starIcon} alt="Star" />
    <img src={starIcon} alt="Star" />
    <img src={starIcon} alt="Star" />
    <img src={starIcon} alt="Star" />
  </div>
);

export default Stars;
