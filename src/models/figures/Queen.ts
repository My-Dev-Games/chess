import Figure, { FigureNames } from './Figure';
import blackLogo from '../../assets/black-queen.png';
import whiteLogo from '../../assets/white-queen.png';
import Colors from '../Colors';
import Cell from '../Cell';

class Queen extends Figure {
  constructor(color: Colors) {
    super(color);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.QUEEN;
  }

  canMove(target: Cell, self?: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    if (self?.figure?.id === this.id) {
      return self.isEmptyVertical(target)
        || self.isEmptyHorizontal(target)
        || self.isEmptyDiagonal(target);
    }

    return false;
  }
}

export default Queen;
