import getRandomNumber from '../functions/functions';
import { cons } from 'hexlet-pairs';
import makeGame from '..';

const isEven = number => number % 2 === 0;

const task = 'Answer "yes" if number even otherwise answer "no".';

const getGameData = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) === true ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => makeGame(task, getGameData);
