import readlineSync from 'readline-sync';
import makeGame from '..';
import getRandomNumber from '../functions/functions';

// выбор арифметического действия
const getRandomAction = () => {
  const action = getRandomNumber(1, 3);
  switch (action) {
    case 1:
      return '+';
      break;
    case 2:
      return '-';
      break;
    case 3:
      return '*';
      break;
    default:
      return '+';
      break;
  }
};

const rule = 'What is the result of the expression?';

const makeRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const action = getRandomAction();
  console.log(`Question: ${number1} ${action} ${number2}`);
  const userAnswer = readlineSync.question('Your answer: ');
  let correctAnswer;
  switch (action) {
    case '+':
    correctAnswer = number1 + number2;
    break;
    case '-':
    correctAnswer = number1 - number2;
    break;
    case '*':
    correctAnswer = number1 * number2;
  }
  if (Number(userAnswer) === correctAnswer) {
    return 'Correct!';
  }
  return `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, `;
};

const startGame = () => makeGame(rule, makeRound);

export default startGame;
