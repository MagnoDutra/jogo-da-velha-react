import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  const [turn, setTurn] = useState(0);
  const playerTurnSymbol = turn % 2 == 0 ? "X" : "O";

  function handleSelectSquare() {
    setTurn((turn) => turn + 1);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            playerTurn={playerTurnSymbol}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            playerTurn={playerTurnSymbol}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayer={playerTurnSymbol}
        />
      </div>
      LOG
    </main>
  );
}

export default App;
