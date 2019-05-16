import readlineSync from 'readline-sync';

// нахождение случайного числа от 1 до 100
const getRandom = (min, max) => Math.floor(Math.random() * max + min);

const greeting = () => console.log('Welcome to the Brain Games!');

const showRule = () => console.log('Answer "yes" if number even otherwise answer "no".');

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const startRound = () => {
  const number = getRandom(1, 100);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  if (number % 2 === 0 && answer === 'yes') {
    return 'Correct!';
  }
  if (number % 2 !== 0 && answer === 'no') {
    return 'Correct!';
  }
  if (number % 2 !== 0 && answer === 'yes') {
    return `${answer} is wrong answer ;(. Correct answer was 'no'. Let's try again, `;
  }
  return `${answer} is wrong answer ;(. Correct answer was 'yes'. Let's try again, `;
};

export {
  greeting, showRule, getUserName, startRound,
};
