import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard({ onSelectSquare, activePlayer }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(row, col) {
    setGameBoard((gb) => {
      const updatedBoard = [...gb.map((innerRow) => [...innerRow])];
      updatedBoard[row][col] = activePlayer;
      return updatedBoard;
    });

    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
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
