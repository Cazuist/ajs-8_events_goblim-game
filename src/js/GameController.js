export default class GameController {
  constructor(statistic, field) {
    this.statistic = statistic;
    this.field = field;
  }

  init() {
    this.field.onClickListeners.push(this.onCellClick.bind(this));

    this.statistic.init();
    this.field.init();
    this.timeChange();
  }

  onCellClick() {
    // eslint-disable-next-line no-restricted-globals
    if (event.target.classList.contains('character')) {
      this.statistic.increaseReachScore();
    } else {
      this.statistic.increaseMissScore();
    }

    clearInterval(this.intervalID);
    this.timeChange();
    this.statistic.setScores();
    this.field.drawCharacter();
    this.checkStatus();
  }

  checkStatus() {
    if (this.statistic.reachScore >= 5) {
      clearInterval(this.intervalID);
      alert('Win!!!!!!!!');
      this.field.onClickListeners = [];
      return;
    }

    if (this.statistic.missScore >= 5) {
      clearInterval(this.intervalID);
      alert('Lost!!!!!!!!');
      this.field.onClickListeners = [];
    }
  }

  timeChange() {
    this.intervalID = setInterval(() => {
      this.field.drawCharacter();
      this.statistic.increaseMissScore();
      this.statistic.setScores();
      this.checkStatus();
    }, 1000);
  }
}
