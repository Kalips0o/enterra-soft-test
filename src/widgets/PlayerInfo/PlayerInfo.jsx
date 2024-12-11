import { useState } from 'react';
import styles from './PlayerInfo.module.less';
import profileImage from '../../assets/avatar.jpg';
import { VisibleIcon, UnvisibleIcon } from '../../shared/ui/icons';
import Stars from '../../shared/ui/Stars/Stars';

const PlayerInfo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.info}>
      <div className={styles.player}>
        <div className={styles.rating}>
          <p className={styles.name}>LongUserName</p>
          <Stars />
        </div>
        <img className={styles.avatar} src={profileImage} alt="Avatar." />
      </div>

      <div className={`${styles.balance} ${visible ? styles.green : ''}`} onClick={() => setVisible(!visible)}>
        <div className={styles.icon}>
          {visible ? <VisibleIcon /> : <UnvisibleIcon />}
        </div>
        <div>
          {visible ? (
            <span className={`${styles.show} ${visible ? '' : styles.hidden}`}>Show balance</span>
          ) : (
            <span className={`${styles.count} ${visible ? styles.hidden : ''}`}>
              $100,500.00
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
