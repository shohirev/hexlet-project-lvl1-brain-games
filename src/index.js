import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const makeGame = (rule, makeRound) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);
  const userName = getUserName();
  let log = 'Correct!';
  let i = 0;
  while (log === 'Correct!' && i < 3) {
    log = makeRound();
    if (log === 'Correct!') {
      console.log(log);
    } else {
      console.log(`${log}${userName}!`);
    }
    i += 1;
  }
  if (log === 'Correct!') {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default makeGame;
