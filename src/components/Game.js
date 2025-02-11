import React, { useState, useEffect } from 'react';
import Grid from './Grid';
import ScoreBoard from './ScoreBoard';

const Game = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [grid, setGrid] = useState(new Array(9).fill(false));

  const handleMoleClick = (index) => {
    if (grid[index]) {
      setScore(score + 1);
    }
  };

  useEffect(() => {
    const highlightMole = () => {
      const newGrid = new Array(9).fill(false);
      const randomIndex = Math.floor(Math.random() * 9);
      newGrid[randomIndex] = true;
      setGrid(newGrid);
    };

    highlightMole();
    const moleTimer = setInterval(highlightMole, 1000);
    return () => clearInterval(moleTimer);
  }, []);

  const handleStartGame = () => {
    setIsGameStarted(true);
  };

  return (
    <div className="game">
      {!isGameStarted && (
        <button onClick={handleStartGame}>Start Game</button>
      )}
      <h1>Whack-a-Mole</h1>
      {isGameStarted && <ScoreBoard score={score} />}
      {isGameStarted && <Grid grid={grid} onMoleClick={handleMoleClick} />}
    </div>
  );
};

export default Game;
