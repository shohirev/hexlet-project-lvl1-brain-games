import makeGame from '..';
import getRandomNumber from '../functions/functions';
import { cons } from 'hexlet-pairs';

const task = 'What number is missing in the progression?';

const lengthOfProgression = 10;

const getGameData = () => {
  const baseNumber = getRandomNumber(1, 100);
  const stepOfProgression = getRandomNumber(1, 5);
  const spaceIndex = getRandomNumber(0, lengthOfProgression - 1);
  const progression = [];
  let element = baseNumber;
  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (i === spaceIndex) {
      progression.push('..');
    } else {
      progression.push(String(element));
    }
    element += stepOfProgression;
  }
  const correctAnswer = String(baseNumber + stepOfProgression * spaceIndex);
  return cons(progression, correctAnswer);
};

const startGame = () => makeGame(task, getGameData);

export default startGame;
