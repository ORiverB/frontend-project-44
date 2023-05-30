import getRandomNumber from '../utils.js';
import runGameLogic from '../gameLogic.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const CorrectAnswer = isEven(question) ? 'yes' : 'no';
  return { question, CorrectAnswer };
};

const runEvenGames = () => {
    runGameLogic(description, generateRound);
    
  }
  

export default runEvenGames;
