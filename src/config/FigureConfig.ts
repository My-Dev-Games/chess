import Colors from '../models/Colors';
import Pawn from '../models/figures/Pawn';
import Figure, { FigureNames } from '../models/figures/Figure';
import Rook from '../models/figures/Rook';
import Knight from '../models/figures/Knight';
import Bishop from '../models/figures/Bishop';
import Queen from '../models/figures/Queen';
import King from '../models/figures/King';

export interface IPosition {
  x: number,
  y: number
}

export interface IConfig {
  color: Colors,
  positions: IPosition[],
}

interface IFigureConfig {
  name: FigureNames,
  instance: (color: Colors) => Figure
  configs: IConfig[]
}

function getPositionPawn(y: number): IPosition[] {
  const positions: IPosition[] = [];
  for (let i = 0; i < 8; i += 1) {
    positions.push({
      x: i,
      y,
    });
  }
  return positions;
}

const figureConfig: IFigureConfig[] = [
  {
    name: FigureNames.PAWN,
    instance: (color) => new Pawn(color),
    configs: [
      {
        color: Colors.WHITE,
        positions: getPositionPawn(6),
      },
      {
        color: Colors.BLACK,
        positions: getPositionPawn(1),
      },
    ],
  },
  {
    name: FigureNames.ROOK,
    instance: (color) => new Rook(color),
    configs: [
      {
        color: Colors.WHITE,
        positions: [
          {
            x: 0,
            y: 7,
          },
          {
            x: 7,
            y: 7,
          },
        ],
      },
      {
        color: Colors.BLACK,
        positions: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 7,
            y: 0,
          },
        ],
      },
    ],
  },
  {
    name: FigureNames.KNIGHT,
    instance: (color) => new Knight(color),
    configs: [
      {
        color: Colors.WHITE,
        positions: [
          {
            x: 1,
            y: 7,
          },
          {
            x: 6,
            y: 7,
          },
        ],
      },
      {
        color: Colors.BLACK,
        positions: [
          {
            x: 1,
            y: 0,
          },
          {
            x: 6,
            y: 0,
          },
        ],
      },
    ],
  },
  {
    name: FigureNames.BISHOP,
    instance: (color) => new Bishop(color),
    configs: [
      {
        color: Colors.WHITE,
        positions: [
          {
            x: 2,
            y: 7,
          },
          {
            x: 5,
            y: 7,
          },
        ],
      },
      {
        color: Colors.BLACK,
        positions: [
          {
            x: 2,
            y: 0,
          },
          {
            x: 5,
            y: 0,
          },
        ],
      },
    ],
  },
  {
    name: FigureNames.QUEEN,
    instance: (color) => new Queen(color),
    configs: [
      {
        color: Colors.WHITE,
        positions: [
          {
            x: 3,
            y: 7,
          },
        ],
      },
      {
        color: Colors.BLACK,
        positions: [
          {
            x: 3,
            y: 0,
          },
        ],
      },
    ],
  },
  {
    name: FigureNames.KING,
    instance: (color) => new King(color),
    configs: [
      {
        color: Colors.WHITE,
        positions: [
          {
            x: 4,
            y: 7,
          },
        ],
      },
      {
        color: Colors.BLACK,
        positions: [
          {
            x: 4,
            y: 0,
          },
        ],
      },
    ],
  },
];

export default figureConfig;
