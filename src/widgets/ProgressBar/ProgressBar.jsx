import styles from './ProgressBar.module.less';

const ProgressBar = () => (
  <div className={styles.wrapper}>
    <div className={styles.progressBar}>
      <div className={styles.progress} />
    </div>
    <span className={styles.loading}>Loading 70%</span>
  </div>
);

export default ProgressBar;
