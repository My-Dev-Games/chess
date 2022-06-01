import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Board from '../models/Board';
import CellComponent from './CellComponent';
import Cell from '../models/Cell';

interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
}

function BoardComponent({ board, setBoard }: BoardProps): JSX.Element {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);
  setBoard(board);

  function click(cell: Cell) {
    if (
      cell.figure
      && cell.x === selectedCell?.x
      && cell.y === selectedCell?.y
    ) {
      setSelectedCell(null);
    } else {
      setSelectedCell(cell);
    }
  }

  return (
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
  );
}

export default React.memo(BoardComponent);
