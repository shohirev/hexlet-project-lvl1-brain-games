import makeGame from '..';
import getRandomNumber from '../functions/functions';
import { cons } from 'hexlet-pairs';

const getGreatestCommonDivisor = (x, y) => {
  if (x !== 0) {
    return getGreatestCommonDivisor(y % x, x);
  }
  return y;
};

const task = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGreatestCommonDivisor(number1, number2));
  return cons(question, correctAnswer);
};

export default () => makeGame(task, getGameData);
