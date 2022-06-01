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
}

export default Cell;
