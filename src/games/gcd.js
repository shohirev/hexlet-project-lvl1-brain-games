import makeGame from '..';
import getRandomNumber from '../functions/functions';
import { cons } from 'hexlet-pairs';

const getGCD = (x, y) => {
  if (x !== 0) {
    return getGCD(y % x, x);
  }
  return y;
};

const task = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGCD(number1, number2));
  return cons(question, correctAnswer);
};

const startGame = () => makeGame(task, getGameData);

export default startGame;
