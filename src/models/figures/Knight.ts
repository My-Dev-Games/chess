import Figure, { FigureNames } from './Figure';
import blackLogo from '../../assets/black-knight.png';
import whiteLogo from '../../assets/white-knight.png';
import Colors from '../Colors';
import Cell from '../Cell';

class Knight extends Figure {
  constructor(color: Colors) {
    super(color);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KNIGHT;
  }

  canMove(target: Cell, self: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    const absX = Math.abs(self.x - target.x);
    const absY = Math.abs(self.y - target.y);
    return (absX === 2 && absY === 1) || (absX === 1 && absY === 2);
  }
}

export default Knight;
