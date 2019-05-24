import makeGame from '..';
import getRandomNumber from '../functions/functions';

const getGCD = (x, y) => {
  if (x !== 0) {
    return getGCD(y % x, x);
  }
  return y;
};

const task = 'Find the greatest common divisor of given numbers.';

const askQuestion = () => [getRandomNumber(1, 100), getRandomNumber(1, 100)];

const getCorrectAnswer = (question) => {
  const firstNumber = question[0];
  const secondNumber = question[1];
  return String(getGCD(firstNumber, secondNumber));
};

const startGame = () => makeGame(task, askQuestion, getCorrectAnswer);

export default startGame;
