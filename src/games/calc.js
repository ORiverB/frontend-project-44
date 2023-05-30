import runGameLogic from '../index.js';
import genRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';
const actions = ['+', '-', '*'];

const calculatelogic = (action, valueFirst, valueSec) => {
  if (action === actions[0]) {
    return String(valueFirst + valueSec);
  }
  if (action === actions[1]) {
    return String(valueFirst - valueSec);
  }
  if (action === actions[2]) {
    return String(valueFirst * valueSec);
  }
  return `Undefined operator: '${action}'!`;
};

const rulQuestAndAns = () => {
  const valueFirst = genRandomNumber(1, 50);
  const valueSec = genRandomNumber(1, 50);
  const action = actions[genRandomNumber(0, 3)];
  const question = `${valueFirst} ${action} ${valueSec}`;
  const answer = calculatelogic(action, valueFirst, valueSec);
  return [question, answer];
};

const calcGame = () => {
  runGameLogic(description, rulQuestAndAns);
};

export default calcGame;
