import makeGame from '..';
import getRandomNumber from '../functions/functions';
import { cons, car, cdr } from 'hexlet-pairs';

const mathOperations = [
  cons('+', (x, y) => (x + y)),
  cons('-', (x, y) => (x - y)),
  cons('*', (x, y) => (x * y)),
];

const getRandomMathOperation = () => {
  const indexOfOperation = getRandomNumber(0, mathOperations.length - 1);
  return mathOperations[indexOfOperation];
};

const task = 'What is the result of the expression?';

const getGameData = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const mathOperation = getRandomMathOperation();
  const question = `${number1}${car(mathOperation)}${number2}`;
  const correctAnswer = String(cdr(mathOperation)(number1, number2));
  return cons(question, correctAnswer);
};

const startGame = () => makeGame(task, getGameData);

export default startGame;
