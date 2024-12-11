import './styles/index.less';

import { useEffect, useRef, useState } from 'react';
import Spinner from '../shared/ui/Spinner/Spinner';
import PlayerInfo from '../widgets/PlayerInfo/PlayerInfo';
import ProgressBar from '../widgets/ProgressBar/ProgressBar';
import TournamentList from '../widgets/TournamentList/TournamentList';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [tournaments, setTournaments] = useState([]);
  const timerRef = useRef();

  useEffect(() => {
    setIsLoading(true);
    timerRef.current = setTimeout(() => {
      fetch('/data.json')
        .then((response) => response.json())
        .then((data) => {
          setTournaments(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Ошибка:', error);
          setIsLoading(false);
        });
    }, 2000);

    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div className="app">
      <div className="content-page">
        <div className="header">
          <h1 className="title">Poker</h1>
          <div className="spinner">
            {isLoading ? <Spinner /> : null}
          </div>
          <PlayerInfo />
          <ProgressBar />
        </div>
        <TournamentList tournaments={tournaments} />
      </div>
    </div>
  );
}

export default App;
