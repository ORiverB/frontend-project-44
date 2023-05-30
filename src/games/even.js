import getRandomNumber from '../utils.js';
import runGameLogic from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber(1, 50);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEvenGames = () => {
  runGameLogic(description, generateRound);
};

export default runEvenGames;
