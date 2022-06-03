import Figure, { FigureNames } from './Figure';
import blackLogo from '../../assets/black-pawn.png';
import whiteLogo from '../../assets/white-pawn.png';
import Colors from '../Colors';
import Cell from '../Cell';

class Pawn extends Figure {
  isFirstStep: boolean = true;

  constructor(color: Colors) {
    super(color);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.PAWN;
  }

  canMove(target: Cell, self: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    const direction = self.figure?.color === Colors.BLACK ? 1 : -1;
    const firstStepDirection = self.figure?.color === Colors.BLACK ? 2 : -2;

    if (((target.y === self.y + direction)
      || (target.y === self.y + firstStepDirection && this.isFirstStep))
      // ход только по прямой
      && target.x === self.x
      // запрещает ходить на врага
      && self.board.getCell(target.x, target.y).isEmpty()
    ) {
      return true;
    }

    if (target.y === self.y + direction
      && (target.x === self.x + 1 || target.x === self.x - 1)
      && self.isEnemy(target)
    ) {
      return true;
    }

    return false;
  }

  moveFigure(target: Cell) {
    super.moveFigure(target);
    this.isFirstStep = false;
  }
}

export default Pawn;
