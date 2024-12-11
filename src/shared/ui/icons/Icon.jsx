import styles from './Icon.module.less';

const Icon = ({ className, children }) => (
  <span className={`${styles.icon} ${className || ''}`}>
    {children}
  </span>
);

export default Icon;
