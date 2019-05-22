import readlineSync from 'readline-sync';
import makeGame from '..';
import getRandomNumber from '../functions/functions';

const makeProgression = () => {
  const numbers = [];
  const base = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 5);
  let element = base;
  let i = 0;
  while (i < 10) {
    numbers.push(element);
    element += step;
    i += 1;
  }
  return numbers;
};

const makeSpaceInProgression = (progression, spaceIndex) => {
  const progressionWithSpace = [];
  for (let i = 0; i < progression.length; i += 1) {
    if (i === spaceIndex) {
      progressionWithSpace.push('..');
    } else {
      progressionWithSpace.push(String(progression[i]));
    }
  }
  return progressionWithSpace;
};

const rule = 'What number is missing in the progression?';

const makeRound = () => {
  const progression = makeProgression();
  const spaceIndex = getRandomNumber(0, progression.length - 1);
  console.log(`Question: ${makeSpaceInProgression(progression, spaceIndex)}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = String(progression[spaceIndex]);
  if (userAnswer === correctAnswer) {
    return 'Correct!';
  }
  return `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again,`;
};

const startGame = () => makeGame(rule, makeRound);

export default startGame;
