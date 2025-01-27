import Icon from './Icon';

const PlayersIcon = ({ className }) => (
  <Icon className={className}>
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.7">
        <path d="M7 6C8.10457 6 9 5.10457 9 4C9 2.89543 8.10457 2 7 2C5.89543 2 5 2.89543 5 4C5 5.10457 5.89543 6 7 6Z" fill="currentColor" />
        <path d="M7 7C5.93913 7 4.92172 7.28973 4.17158 7.80545C3.42143 8.32118 3 9.02065 3 9.75V11H11V9.75C11 9.02065 10.5786 8.32118 9.82842 7.80545C9.07828 7.28973 8.06087 7 7 7Z" fill="currentColor" />
      </g>
    </svg>
  </Icon>
);

export default PlayersIcon; 