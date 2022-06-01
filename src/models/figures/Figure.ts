import { v4 as uuidv4 } from 'uuid';
import Colors from '../Colors';
import logo from '../assets/black-king.png';
import Cell from '../Cell';

export enum FigureNames {
  FIGURE = 'Фигура',
  KING = 'Король',
  KNIGHT = 'Конь',
  PAWN = 'Пешка',
  QUEEN = 'Ферзь',
  ROOK = 'Ладья',
  BISHOP = 'Слон',
}

class Figure {
  color: Colors;

  logo: typeof logo | null;

  name: FigureNames;

  id: string;

  constructor(color: Colors) {
    this.color = color;
    this.id = uuidv4();
    this.logo = null;
    this.name = FigureNames.FIGURE;
  }

  canMove(target: Cell, self?: Cell): boolean {
    if (target.figure?.color === this.color) {
      return false;
    }
    if (target.figure?.name === FigureNames.KING) {
      return false;
    }
    return true;
  }

  // moveFigure(target: Cell) {
  //
  // }
}

export default Figure;
