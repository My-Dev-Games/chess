/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Board from '../models/Board';
import CellComponent from './CellComponent';
import Cell from '../models/Cell';
import Player from '../models/Player';

interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
  currentPlayer: Player | null
  swapPlayer: () => void
}

function BoardComponent({
  board,
  setBoard,
  currentPlayer,
  swapPlayer,
}: BoardProps): JSX.Element {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  function click(cell: Cell) {
    if (cell.figure && cell.figure?.color === currentPlayer?.color) {
      setSelectedCell(cell);
    } else if (
      selectedCell && selectedCell !== cell
      && selectedCell.figure?.canMove(cell, selectedCell)
    ) {
      selectedCell.moveFigure(cell);
      swapPlayer();
      setSelectedCell(null);
    }

    if (cell.x === selectedCell?.x && cell.y === selectedCell?.y) {
      setSelectedCell(null);
    }
  }

  useEffect(() => {
    board.highlightCells(selectedCell);
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }, [selectedCell]);

  return (
    <div>
      <h3>
        Текущий игрок:
        {' '}
        {currentPlayer?.color}
      </h3>
      <div className="board">
        {board.cells.map((row) => (
          <React.Fragment key={uuidv4()}>
            {row.map((cell) => (
              <CellComponent
                click={click}
                selected={
                cell.x === selectedCell?.x
                  && cell.y === selectedCell?.y
              }
                cell={cell}
                key={cell.id}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default React.memo(BoardComponent);
// export default BoardComponent;
