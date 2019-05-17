import readlineSync from 'readline-sync';

const getRandom = (min, max) => Math.floor(Math.random() * max + min);

const isPrime = (number) => {
  if (number < 4) {
    return true;
  }
  for (let i = number - 1; i > 1; i -= 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const greeting = () => console.log('Welcome to the Brain Games!');

const showRule = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const startRound = () => {
  const number = getRandom(1, 100);
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = isPrime(number) === true ? 'yes' : 'no';
  if (userAnswer === correctAnswer) {
    return 'Correct!';
  }
  return `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again,`;
};

export {
  greeting, showRule, getUserName, startRound,
};
