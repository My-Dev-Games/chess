import Figure, { FigureNames } from './Figure';
import Colors from '../Colors';
import blackLogo from '../../assets/black-bishop.png';
import whiteLogo from '../../assets/white-bishop.png';

class Bishop extends Figure {
  constructor(color: Colors) {
    super(color);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.BISHOP;
  }
}

export default Bishop;
