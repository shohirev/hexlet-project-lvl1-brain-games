import readlineSync from 'readline-sync';

// нахождение случайного числа от 1 до 100
const getRandom = (min, max) => Math.floor(Math.random() * max + min);

// выбор арифметического действия
const getRandomAction = () => {
  const action = getRandom(1, 3);
  if (action === 1) {
    return '+';
  }
  if (action === 2) {
    return '-';
  }
  return '*';
};

const greeting = () => console.log('Welcome to the Brain Games!');

const showRule = () => console.log('What is the result of the expression?');

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const startRound = () => {
  const number1 = getRandom(1, 100);
  const number2 = getRandom(1, 100);
  const action = getRandomAction();
  console.log(`Question: ${number1} ${action} ${number2}`);
  const userAnswer = readlineSync.question('Your answer: ');
  let correctAnswer;
  if (action === '+') {
    correctAnswer = number1 + number2;
  }
  if (action === '-') {
    correctAnswer = number1 - number2;
  }
  if (action === '*') {
    correctAnswer = number1 * number2;
  }
  if (Number(userAnswer) === correctAnswer) {
    return 'Correct!';
  }
  return `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, `;
};

export {
  greeting, showRule, getUserName, startRound,
};
