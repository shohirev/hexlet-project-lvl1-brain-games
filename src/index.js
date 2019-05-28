import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const roundsCount = 3;

const makeGame = (task, getGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const iter = (roundsCounter) => {
    if (roundsCounter === roundsCount) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const gameData = getGameData();
    const question = car(gameData);
    const correctAnswer = cdr(gameData);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      return iter(roundsCounter + 1);
    }
    return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}!`);
  };

  return iter(0);
};

export default makeGame;
