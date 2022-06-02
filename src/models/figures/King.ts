import Figure, { FigureNames } from './Figure';
import blackLogo from '../../assets/black-king.png';
import whiteLogo from '../../assets/white-king.png';
import Colors from '../Colors';
import Cell from '../Cell';

class King extends Figure {
  constructor(color: Colors) {
    super(color);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }

  canMove(target: Cell, self: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    const absX = Math.abs(target.x - self.x);
    const absY = Math.abs(target.y - self.y);
    return (absX === 1 && absY === 1)
      || (absX === 1 && absY === 0)
      || (absX === 0 && absY === 1);
  }
}

export default King;
