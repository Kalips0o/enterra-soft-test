import SpinnerSvg from './Spinner.svg';
import styles from './Spinner.module.less';

const Spinner = () => (
  <img src={SpinnerSvg} alt="Loading spinner" className={styles.spinner} />
);

export default Spinner;
