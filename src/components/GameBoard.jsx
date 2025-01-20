const initialGameBoard = [
  ["X", "X", "O"],
  [null, null, null],
  [null, null, null],
];

function GameBoard() {
  return (
    <ol id="game-board">
      {initialGameBoard.map((row, i) => (
        <li key={i}>
          <ol>
            {row.map((playerSymbol, i) => (
              <li key={i}>
                <button>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
