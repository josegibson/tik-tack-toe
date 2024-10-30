import React from "react";
import { useState } from "react";
import Tile from "./Tile";

function Board({ player, handlePlayerToggle, handleGameStatusUpdate, gameStatus}) {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const calculateGameStatus = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] !== null &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        handleGameStatusUpdate(squares[a]);
        return squares[a];
      }
    }

    if (squares.every((square) => square !== null)) {
      handleGameStatusUpdate("draw");
    }
  };

  const handleClick = (i) => {
    if (squares[i] !== null || gameStatus !== "active") {
      return;
    }
    const newSquares = squares.slice();
    newSquares[i] = player;
    setSquares(newSquares);
    handlePlayerToggle();
    calculateGameStatus(newSquares);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    handleGameStatusUpdate("reset");
  };

  return (
    <div>
      <div className="Board">
        <div className="row">
          <Tile value={squares[0]} onClick={() => handleClick(0)} />
          <Tile value={squares[1]} onClick={() => handleClick(1)} />
          <Tile value={squares[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="row">
          <Tile value={squares[3]} onClick={() => handleClick(3)} />
          <Tile value={squares[4]} onClick={() => handleClick(4)} />
          <Tile value={squares[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="row">
          <Tile value={squares[6]} onClick={() => handleClick(6)} />
          <Tile value={squares[7]} onClick={() => handleClick(7)} />
          <Tile value={squares[8]} onClick={() => handleClick(8)} />
        </div>
      </div>
      <button onClick={handleReset} className="reset-button">
        Reset
      </button>
    </div>
  );
}

export default Board;
