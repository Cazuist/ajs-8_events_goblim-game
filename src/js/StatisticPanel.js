export default class StatisticPanel {
  constructor() {
    this.scoresEl = document.getElementsByTagName('span');
    this.reachScore = 0;
    this.missScore = 0;
  }

  init() {
    this.drawPanel();
  }

  drawPanel() {
    const wrapper = document.querySelector('.wrapper');

    const html = `
      <fieldset class='statistic'>
        <p class='stat-row'>Попадание: <span>${this.reachScore}</span></p>
        <p class='stat-row'>Промах: <span>${this.missScore}</span></p>
      </fieldset>
    `;

    wrapper.innerHTML = html;
  }

  increaseReachScore() {
    this.reachScore += 1;
  }

  increaseMissScore() {
    this.missScore += 1;
  }

  setScores() {
    this.scoresEl[0].innerText = this.reachScore;
    this.scoresEl[1].innerText = this.missScore;
  }
}
