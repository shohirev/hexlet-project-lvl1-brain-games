import makeGame from '..';
import getRandomNumber from '../functions/functions';
import { cons, car, cdr } from 'hexlet-pairs';

const operators = [
  cons('+', (x, y) => (x + y)),
  cons('-', (x, y) => (x - y)),
  cons('*', (x, y) => (x * y)),
];

const getRandomOperator = () => {
  const indexOfOperator = getRandomNumber(0, operators.length - 1);
  return operators[indexOfOperator];
};

const task = 'What is the result of the expression?';

const getGameData = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const operator = getRandomOperator();
  const question = `${number1}${car(operator)}${number2}`;
  const correctAnswer = String(cdr(operator)(number1, number2));
  return cons(question, correctAnswer);
};

const startGame = () => makeGame(task, getGameData);

export default startGame;
