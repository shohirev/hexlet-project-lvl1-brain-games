import readlineSync from 'readline-sync';

const getRandom = (min, max) => Math.floor(Math.random() * max + min);

const makeProgression = () => {
  const base = getRandom(1, 100);
  const step = getRandom(1, 5);
  let i = 1;
  let acc = base;
  const result = [];
  while (i <= 10) {
    result.push(acc);
    acc += step;
    i += 1;
  }
  return result;
};

const copyArray = (array, index) => {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (i === index) {
      newArray.push('..');
    } else {
      newArray.push(String(array[i]));
    }
  }
  return newArray;
};

const greeting = () => console.log('Welcome to the Brain Games!');

const showRule = () => console.log('What number is missing in the progression?');

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const startRound = () => {
  const progression = makeProgression();
  const index = getRandom(0, 9);
  console.log(`Question: ${copyArray(progression, index)}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === String(progression[index])) {
    return 'Correct!';
  }
  return `${userAnswer} is wrong answer ;(. Correct answer was ${String(progression[index])}. Let's try again,`;
};

export {
  greeting, showRule, getUserName, startRound,
};
