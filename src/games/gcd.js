import readlineSync from 'readline-sync';
import makeGame from '..';
import getRandomNumber from '../functions/functions';

// нахождение НОД
const getNod = (x, y) => {
  if (x !== 0) {
    return getNod(y % x, x);
  }
  return y;
};

const rule = 'Find the greatest common divisor of given numbers.';

const makeRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  console.log(`Question: ${number1} ${number2}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = getNod(number1, number2);
  if (Number(userAnswer) === correctAnswer) {
    return 'Correct!';
  }
  return `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again,`;
};

const startGame = () => makeGame(rule, makeRound);

export default startGame;
