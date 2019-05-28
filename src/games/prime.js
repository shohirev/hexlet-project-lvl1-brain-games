import makeGame from '..';
import getRandomNumber from '../functions/functions';
import { cons } from 'hexlet-pairs';

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

const getGameData = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const startGame = () => makeGame(task, getGameData);

export default startGame;
