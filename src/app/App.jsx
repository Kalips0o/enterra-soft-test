import './styles/index.less';
import PlayerInfo from "../widgets/PlayerInfo/PlayerInfo";
import ProgressBar from "../widgets/ProgressBar/ProgressBar";
import TournamentItem from "../widgets/TournamentItem/TournamentItem";

function App() {

    return (
        <div className="app">
            <PlayerInfo/>
            <ProgressBar/>
            <TournamentItem/>
        </div>
    )
}

export default App
