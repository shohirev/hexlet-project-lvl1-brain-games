import makeGame from '..';
import getRandomNumber from '../functions/functions';
import { cons } from 'hexlet-pairs';

const task = 'What number is missing in the progression?';

const length = 10;

const getGameData = () => {
  const firstMember = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 5);
  const spaceIndex = getRandomNumber(0, length - 1);
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    if (i === spaceIndex) {
      progression.push('..');
    } else {
      progression.push(firstMember + step * i);
    }
  }
  const correctAnswer = String(firstMember + step * spaceIndex);
  return cons(progression, correctAnswer);
};

export default () => makeGame(task, getGameData);
