import readlineSync from 'readline-sync';

// нахождение случайного числа от 1 до 100
const getRandom = (min, max) => Math.floor(Math.random() * max + min);

// нахождение НОД
const nod = (x, y) => {
  if (x !== 0) {
    return nod(y % x, x);
  }
  return y;
};

const greeting = () => console.log('Welcome to the Brain Games!');

const showRule = () => console.log('Find the greatest common divisor of given numbers.');

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const startRound = () => {
  const number1 = getRandom(1, 100);
  const number2 = getRandom(1, 100);
  console.log(`Question: ${number1} ${number2}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = nod(number1, number2);
  if (Number(userAnswer) === correctAnswer) {
    return 'Correct!';
  }
  return `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again,`;
};

export {
  greeting, showRule, getUserName, startRound,
};
