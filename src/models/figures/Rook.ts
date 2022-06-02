import Figure, { FigureNames } from './Figure';
import blackLogo from '../../assets/black-rook.png';
import whiteLogo from '../../assets/white-rook.png';
import Colors from '../Colors';
import Cell from '../Cell';

class Rook extends Figure {
  constructor(color: Colors) {
    super(color);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.ROOK;
  }

  canMove(target: Cell, self: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    return self.isEmptyVertical(target)
      || self.isEmptyHorizontal(target);
  }
}

export default Rook;
