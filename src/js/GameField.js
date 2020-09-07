import randomInteger from './functions';

export default class GameField {
  constructor(size = 4) {
    this.boardSize = size;
    this.board = null;
    this.cells = [];
    this.onClickListeners = [];
  }

  init() {
    this.drawField(this.boardSize);
    this.drawCharacter();
  }

  drawField(size) {
    const wrapper = document.querySelector('.wrapper');
    const boardDiv = document.createElement('div');

    boardDiv.classList.add('board-field');
    boardDiv.style.setProperty('--size', size);

    for (let i = 0; i < size ** 2; i += 1) {
      const cellDiv = document.createElement('div');
      cellDiv.addEventListener('click', (event) => this.onCellClick(event));
      cellDiv.classList.add('board-cell', 'empty');

      boardDiv.append(cellDiv);
    }

    wrapper.append(boardDiv);

    this.board = document.querySelector('.board-field');
    this.cells = Array.from(this.board.children);
  }

  drawCharacter() {
    const emptyCells = this.cells.filter((cell) => !cell.classList.contains('full'));
    const fullCell = this.cells.filter((cell) => cell.classList.contains('full'))[0];
    const index = randomInteger(0, emptyCells.length - 1);
    const goblin = document.createElement('div');
    goblin.classList.add('character');

    if (fullCell) {
      fullCell.innerHTML = '';
      fullCell.classList.remove('full');
      fullCell.classList.add('empty');
    }

    emptyCells[index].append(goblin);
    emptyCells[index].classList.add('full');
    emptyCells[index].classList.remove('empty');
  }

  onCellClick(event) {
    event.preventDefault();
    this.onClickListeners.forEach((o) => o.call(null));
  }
}
