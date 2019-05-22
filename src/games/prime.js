import readlineSync from 'readline-sync';
import makeGame from '..';
import getRandomNumber from '../functions/functions';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  if (number < 4) {
    return true;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const makeRound = () => {
  const number = getRandomNumber(1, 100);
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = isPrime(number) === true ? 'yes' : 'no';
  if (userAnswer === correctAnswer) {
    return 'Correct!';
  }
  return `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again,`;
};

const startGame = () => makeGame(rule, makeRound);

export default startGame;
