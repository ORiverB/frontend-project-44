import runGameLogic from '../index.js';
import genRandomNumber from '../utils.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrimeNumber = (num) => {
  if (num === 2 || num === 3) {
    return true;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const theGame = () => {
  const question = genRandomNumber(1, 500);
  const rightAnswer = isPrimeNumber(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => runGameLogic(gameTask, theGame);
