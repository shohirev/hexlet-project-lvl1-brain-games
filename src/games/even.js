import getRandomNumber from '../functions/functions';
import makeGame from '..';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const task = 'Answer "yes" if number even otherwise answer "no".';

const askQuestion = () => getRandomNumber(1, 100);

const getCorrectAnswer = (question) => {
  if (isEven(question)) {
    return 'yes';
  }
  return 'no';
};

const startGame = () => makeGame(task, askQuestion, getCorrectAnswer);

export default startGame;
