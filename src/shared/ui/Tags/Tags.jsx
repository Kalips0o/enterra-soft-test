import styles from './Tags.module.less';
import {
  FreeRollIcon,
  RapidIcon,
  BountyIcon,
  ProBountyIcon,
  KnockoutIcon,
  TagTimeIcon,
} from '../icons/tag-icons';

const Tags = ({ tags }) => {
  const tagsIcons = {
    Knockout: <KnockoutIcon />,
    Bounty: <BountyIcon />,
    ProBounty: <ProBountyIcon />,
    FreeRoll: <FreeRollIcon />,
    Rapid: <RapidIcon />,
    Time: <TagTimeIcon />,
  };

  return (
    <ul className={styles.tags}>
      {tags.map((tag) => (
        <li key={tag} className={`${styles.tagItem} ${tagsIcons[tag] ? '' : styles.tag}`}>
          {tagsIcons[tag] ?? tag}
        </li>
      ))}
    </ul>
  );
};

export default Tags;
