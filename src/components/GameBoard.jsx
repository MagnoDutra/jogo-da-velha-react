const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const {
      square: { row, col },
      player: symbol,
    } = turn;
    gameBoard[row][col] = symbol;
  }
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(row, col) {
  //   setGameBoard((gb) => {
  //     const updatedBoard = [...gb.map((innerRow) => [...innerRow])];
  //     updatedBoard[row][col] = activePlayer;
  //     return updatedBoard;
  //   });

  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  disabled={playerSymbol}
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
