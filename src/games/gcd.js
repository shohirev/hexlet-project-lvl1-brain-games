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
  const question = [getRandomNumber(1, 100), getRandomNumber(1, 100)];
  const correctAnswer = String(getGCD(question[0], question[1]));
  return cons(question, correctAnswer);
};

const startGame = () => makeGame(task, getGameData);

export default startGame;
