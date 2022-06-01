import Cell from './Cell';
import Colors from './Colors';
import Figure from './figures/Figure';
import figureConfig, { IConfig } from '../config/FigureConfig';

export default class Board {
  cells: Cell[][] = [];

  public initCells() {
    for (let i: number = 0; i < 8; i += 1) {
      const row: Cell[] = [];
      for (let j: number = 0; j < 8; j += 1) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.BLACK, null));
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null));
        }
      }
      this.cells.push(row);
    }
  }

  public getCell(x: number, y: number): Cell {
    return this.cells[y][x];
  }

  public addFigures() {
    figureConfig.forEach((elem) => {
      this.addFigureToCell(elem.instance, elem.configs);
    });
  }

  private addFigureToCell(
    figureInstance: (color: Colors) => Figure,
    configs: IConfig[],
  ) {
    configs.forEach((config) => {
      config.positions.forEach((position) => {
        const cell = this.getCell(position.x, position.y);
        cell.figure = figureInstance(config.color);
      });
    });
  }

  public highlightCells(selectedCell: Cell | null) {
    for (let i = 0; i < this.cells.length; i += 1) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j += 1) {
        const target = row[j];
        target.available = !!selectedCell?.figure
          ?.canMove(target, selectedCell);
      }
    }
  }

  public getCopyBoard() {
    const newBoard = new Board();
    newBoard.cells = this.cells;
    return newBoard;
  }
}
