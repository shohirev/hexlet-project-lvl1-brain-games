import readlineSync from 'readline-sync';

// нахождение случайного числа от 1 до 100
const getRandom = () => Math.floor(Math.random() * 99 + 1);

// игра
const game = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  let log = 'Correct!';
  let i = 0;
  let number;
  let answer;
  while (log === 'Correct!' && i < 3) {
    number = getRandom();
    console.log(`Question: ${number}`);
    answer = readlineSync.question('Your answer: ');
    i += 1;
    if (number % 2 === 0 && answer === 'yes') {
      log = 'Correct!';
    } else if (number % 2 !== 0 && answer === 'no') {
      log = 'Correct!';
    } else if (number % 2 !== 0 && answer === 'yes') {
      log = `${answer} is wrong answer ;(. Correct answer was 'no'. Let's try again, ${userName}!`;
    } else if (number % 2 === 0 && answer === 'no') {
      log = `${answer} is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${userName}!`;
    }
    console.log(log);
  }
  if (log === 'Correct!') {
    console.log(`Congratulations, ${userName}`);
  }
};
export default game;
