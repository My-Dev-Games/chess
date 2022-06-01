import Figure, { FigureNames } from './Figure';
import blackLogo from '../../assets/black-rook.png';
import whiteLogo from '../../assets/white-rook.png';
import Colors from '../Colors';

class Rook extends Figure {
  constructor(color: Colors) {
    super(color);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.ROOK;
  }
}

export default Rook;
