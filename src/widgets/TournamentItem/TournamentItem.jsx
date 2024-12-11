import { useState } from 'react';
import styles from './TournamentItem.module.less';
import Button from '../../shared/ui/Button/Button';
import Tags from '../../shared/ui/Tags/Tags';
import {
  PinIcon, PlayersIcon, TimeIcon, TourneyIcon,
} from '../../shared/ui/icons';

const TournamentItem = (props) => {
  const {
    cancel,
    tags,
    title,
    isSelected,
    date,
    reward,
    players,
  } = props;

  const [isItemSelected, setIsItemSelected] = useState(isSelected);

  const onItemHandler = () => {
    setIsItemSelected(!isItemSelected);
  };

  const onButtonClick = (e) => {
    e.stopPropagation();
  };

  return (
    <li
      className={`${styles.item} ${isItemSelected && !cancel ? styles.selected : ''}`}
      onClick={onItemHandler}
    >
      <div className={`${styles.label} ${cancel ? styles.canceled : ''}`}>
        {cancel ? 'Canceled' : 'Registering'}
      </div>
      <div className={styles['item-wrapper']}>

        <div className={styles.header}>
          <div className={styles.inner}>
            <div className={styles['inner-top']}>
              {isItemSelected ? <PinIcon /> : null}
              <Tags tags={tags} />
            </div>
            <p className={styles.title}>{title}</p>
          </div>
          <Button onClick={onButtonClick} isCanceled={cancel} />
        </div>

        <div className={styles.footer}>
          <div>
            <TimeIcon />
            <span>{date}</span>
          </div>
          <div>
            <PlayersIcon />
            <span>
              {players.count}
              /
              {players.all}
            </span>
          </div>
          <div>
            <TourneyIcon />
            <span>{reward}</span>
          </div>
        </div>

      </div>
    </li>
  );
};

export default TournamentItem;
