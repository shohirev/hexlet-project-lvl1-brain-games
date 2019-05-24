import makeGame from '..';
import getRandomNumber from '../functions/functions';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  if (number < 4) {
    return true;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const askQuestion = () => getRandomNumber(1, 100);

const getCorrectQuestion = (number) => {
  if (isPrime(number) === true) {
    return 'yes';
  }
  return 'no';
};

const startGame = () => makeGame(task, askQuestion, getCorrectQuestion);

export default startGame;
