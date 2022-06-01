import { v4 as uuidv4 } from 'uuid';
import Board from './Board';
import Figure from './figures/Figure';
import Colors from './Colors';

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
      // this.figure?.moveFigure(target);
      target.figure = this.figure;
      this.figure = null;
    }
  }

  public isEmpty() {
    return this.figure === null;
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
}

export default Cell;
