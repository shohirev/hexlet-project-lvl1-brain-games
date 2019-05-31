import makeGame from '..';
import getRandomNumber from '../functions/functions';
import { cons, car, cdr } from 'hexlet-pairs';

const mathOperations = [
  cons('+', (x, y) => (x + y)),
  cons('-', (x, y) => (x - y)),
  cons('*', (x, y) => (x * y)),
];

const task = 'What is the result of the expression?';

const getGameData = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const mathOperation = mathOperations[getRandomNumber(0, mathOperations.length - 1)];
  const question = `${number1}${car(mathOperation)}${number2}`;
  const correctAnswer = String(cdr(mathOperation)(number1, number2));
  return cons(question, correctAnswer);
};

export default () => makeGame(task, getGameData);
