import runGameLogic from '../index.js';
import genRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (numOne, numTwo) => {
  if (!numTwo) {
    return numOne;
  }
  return getGcd(numTwo, numOne % numTwo);
};

const generateRound = () => {
  const valueFirst = genRandomNumber(1, 100);
  const valueSec = genRandomNumber(1, 100);
  const question = `${valueFirst} ${valueSec}`;
  const answer = String(getGcd(valueFirst, valueSec));
  return [question, answer];
};

const gcdGame = () => {
  runGameLogic(description, generateRound);
};

export default gcdGame;
