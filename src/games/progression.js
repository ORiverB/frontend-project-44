import runGameLogic from '../index.js';
import genRandomNumber from '../utils.js';

const gameTask = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [];
  const lastNum = start + step * length;
  for (let currentNum = start; currentNum < lastNum; currentNum += step) {
    progression.push(currentNum);
  }
  return progression;
};

const theGame = () => {
  const start = genRandomNumber(1, 15);
  const step = genRandomNumber(1, 7);
  const length = genRandomNumber(5, 10);
  const randomHiddenIndex = genRandomNumber(0, length - 1);
  const progression = getProgression(start, step, length);
  const hiddenIndex = progression.splice(randomHiddenIndex, 1, '..');
  const question = progression.join(' ');
  const rightAnswer = String(hiddenIndex[0]);
  return [question, rightAnswer];
};

export default () => runGameLogic(gameTask, theGame);