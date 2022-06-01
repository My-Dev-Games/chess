import React from 'react';
import cn from 'classnames';
import Cell from '../models/Cell';

interface CellProps {
  cell: Cell
  selected: boolean
  click: (cell: Cell) => void
}

function CellComponent({ cell, selected, click }: CellProps) {
  return (
    <div
      tabIndex={0}
      role="button"
      onClick={() => click(cell)}
      className={cn('cell', cell.color, selected && 'selected')}
      style={{ background: cell.available && cell.figure ? 'green' : '' }}
    >
      {cell.available && !cell.figure && <div className="available" />}
      {
        cell.figure?.logo
        && <img src={cell.figure.logo} alt={cell.figure.name} />
      }
    </div>
  );
}

export default React.memo(CellComponent);
