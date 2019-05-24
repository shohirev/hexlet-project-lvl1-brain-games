import makeGame from '..';
import getRandomNumber from '../functions/functions';

const makeProgression = (base, step, lengthOfProgression) => {
  const progression = [];
  let element = base;
  let i = 0;
  while (i < lengthOfProgression) {
    progression.push(element);
    element += step;
    i += 1;
  }
  return progression;
};

const makeSpaceInProgression = (progression, spaceIndex) => {
  const progressionWithSpace = [];
  for (let i = 0; i < progression.length; i += 1) {
    if (i === spaceIndex) {
      progressionWithSpace.push('..');
    } else {
      progressionWithSpace.push(progression[i]);
    }
  }
  return progressionWithSpace;
};

const task = 'What number is missing in the progression?';

const askQuestion = () => {
  const baseNumber = getRandomNumber(1, 100);
  const stepOfProgression = getRandomNumber(1, 5);
  const progression = makeProgression(baseNumber, stepOfProgression, 10);
  const spaceIndex = getRandomNumber(0, progression.length - 1);
  return makeSpaceInProgression(progression, spaceIndex);
};

const getCorrectAnswer = (progression) => {
  let progressionStep;
  let spaceIndex;
  for (let i = 0; i < progression.length - 1; i += 1) {
    if (typeof (progression[i]) === 'number' && typeof (progression[i + 1] === 'number')) {
      progressionStep = progression[i + 1] - progression[i];
    } else if (progression[i] === '..') {
      spaceIndex = i;
    }
  }
  if (spaceIndex < progression.length - 1) {
    return String(progression[spaceIndex + 1] - progressionStep);
  }
  return String(progression[spaceIndex - 2] + progressionStep);
};

const startGame = () => makeGame(task, askQuestion, getCorrectAnswer);

export default startGame;
