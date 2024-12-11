import styles from './TournamentList.module.less';
import TournamentItem from '../TournamentItem/TournamentItem';

const TournamentList = ({ tournaments }) => (
  <ul className={styles.list}>
    {tournaments.map((tournament, index) => (
      <TournamentItem key={index} {...tournament} />
    ))}
  </ul>
);

export default TournamentList;
