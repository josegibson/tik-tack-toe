import React from 'react';
import { useState } from 'react';
import Board from './Board';

function App() {

  const [player, setPlayer] = useState('X');
  const [gameStatus, setGameStatus] = useState('active');


  const getMessage = () => {
    switch (gameStatus) {
      case 'draw':
        return 'It\'s a Draw!';

      case 'active':
        return `Player ${player}'s turn`;

      case 'reset':
        setGameStatus('active');
        setPlayer('X');
        return 'Game has been reset';
      
      default:
        return `Player ${gameStatus} wins!`;
        break;
    }
  }

  const playerToggle = () => {
    setPlayer(player === 'X' ? 'O' : 'X');
  }

  return (
    <div className="App">
      <h1>Tick-Tack-Toe</h1>
      <div className='container'>
        <h2>{getMessage()}</h2>
      </div>
      <Board player={player} handlePlayerToggle={playerToggle} handleGameStatusUpdate={setGameStatus} gameStatus={gameStatus}/>
    </div>
  );
}

export default App;
