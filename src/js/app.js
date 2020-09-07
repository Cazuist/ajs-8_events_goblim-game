import GameField from './GameField';
import StatisticPanel from './StatisticPanel';
import GameController from './GameController';

const field = new GameField();
const statistic = new StatisticPanel();
const controller = new GameController(statistic, field);

controller.init();
