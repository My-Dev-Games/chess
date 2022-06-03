/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './App.css';
import BoardComponent from './components/BoardComponent';
import Board from './models/Board';
import Player from './models/Player';
import Colors from './models/Colors';
import LostFigures from './components/LostFigures';

function App() {
  const [board, setBoard] = useState(new Board());

  const [
    whitePlayer,
    // setWhitePlayer,
  ] = useState<Player>(new Player(Colors.WHITE));
  const [
    blackPlayer,
    // setBlackPlayer,
  ] = useState<Player>(new Player(Colors.BLACK));
  const [
    currentPlayer,
    setCurrentPlayer,
  ] = useState<Player | null>(null);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
    setCurrentPlayer(whitePlayer);
  }

  function swapPlayer() {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer,
    );
  }

  useEffect(() => {
    restart();
  }, []);

  return (
    <div className="app">
      <LostFigures title="Белые" figures={board.lostWhiteFigures} />
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <LostFigures title="Черные" figures={board.lostBlackFigures} />
    </div>
  );
}

export default App;
