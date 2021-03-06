import { v4 as uuidv4 } from 'uuid';
import Board from './Board';
import Figure, { FigureNames } from './figures/Figure';
import Colors from './Colors';
import Queen from './figures/Queen';

class Cell {
  readonly x: number;

  readonly y: number;

  readonly color: Colors;

  figure: Figure | null;

  board: Board;

  available: boolean;

  id: string;

  constructor(
    board: Board,
    x: number,
    y: number,
    color: Colors,
    figure: Figure | null,
  ) {
    this.board = board;
    this.x = x;
    this.y = y;
    this.color = color;
    this.figure = figure;
    this.available = false;
    this.id = uuidv4();
  }

  public moveFigure(target: Cell) {
    if (this.figure?.canMove(target, this)) {
      this.figure?.moveFigure(target, this);

      if (target.figure) {
        this.board.addLostFigure(target.figure);
      }

      if (
        this.figure?.name === FigureNames.PAWN
          && ((this.figure.color === Colors.WHITE && target.y === 0)
          || (this.figure.color === Colors.BLACK && target.y === 7))
      ) {
        const selfFigure = this.figure;
        target.figure = new Queen(selfFigure.color);
      } else {
        target.figure = this.figure;
      }

      this.figure = null;
    }
  }

  public isEmpty(): boolean {
    return this.figure === null;
  }

  public isEnemy(target: Cell): boolean {
    if (target.figure) {
      return target.figure?.color !== this.figure?.color;
    }
    return false;
  }

  public isEmptyVertical(target: Cell): boolean {
    if (this.x !== target.x) {
      return false;
    }

    const min = Math.min(this.y, target.y);
    const max = Math.max(this.y, target.y);

    for (let y = min + 1; y < max; y += 1) {
      if (!this.board.getCell(this.x, y).isEmpty()) {
        return false;
      }
    }
    return true;
  }

  public isEmptyHorizontal(target: Cell): boolean {
    if (this.y !== target.y) {
      return false;
    }

    const min = Math.min(this.x, target.x);
    const max = Math.max(this.x, target.x);

    for (let x = min + 1; x < max; x += 1) {
      if (!this.board.getCell(x, this.y).isEmpty()) {
        return false;
      }
    }
    return true;
  }

  public isEmptyDiagonal(target: Cell): boolean {
    const absX = Math.abs(target.x - this.x);
    const absY = Math.abs(target.y - this.y);

    if (absX !== absY) {
      return false;
    }

    const dx = this.x < target.x ? 1 : -1;
    const dy = this.y < target.y ? 1 : -1;

    for (let i = 1; i < absY; i += 1) {
      if (!this.board.getCell(this.x + dx * i, this.y + dy * i)?.isEmpty()) {
        return false;
      }
    }

    return true;
  }
}

export default Cell;
