import makeGame from '..';
import getRandomNumber from '../functions/functions';

const getRandomOperator = () => {
  const operators = '+-*';
  const indexOfOperator = getRandomNumber(0, operators.length - 1);
  return operators[indexOfOperator];
};

const task = 'What is the result of the expression?';

const askQuestion = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  return `${number1}${getRandomOperator()}${number2}`;
};

const getCorrectAnswer = question => String(eval(question));

const startGame = () => makeGame(task, askQuestion, getCorrectAnswer);

export default startGame;
