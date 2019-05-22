import readlineSync from 'readline-sync';
import { getRandomNumber, isEven } from '../functions/functions';
import makeGame from '..';


const rule = 'Answer "yes" if number even otherwise answer "no".';

const makeRound = () => {
  const number = getRandomNumber(1, 100);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  if (answer === correctAnswer) {
    return 'Correct!';
  }
  return `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, `;
};

const startGame = () => makeGame(rule, makeRound);

export default startGame;
