import makeGame from '..';
import getRandomNumber from '../functions/functions';
import { cons } from 'hexlet-pairs';

const task = 'What number is missing in the progression?';

const lengthOfProgression = 10;

const getGameData = () => {
  const firstNumber = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 5);
  const spaceIndex = getRandomNumber(0, lengthOfProgression - 1);
  const progression = [];
  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (i === spaceIndex) {
      progression.push('..');
    }
    progression.push(String(firstNumber + step * i));
  }
  const correctAnswer = String(firstNumber + step * spaceIndex);
  return cons(progression, correctAnswer);
};

export default () => makeGame(task, getGameData);
