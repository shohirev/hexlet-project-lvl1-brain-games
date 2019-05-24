import readlineSync from 'readline-sync';

const makeGame = (task, askQuestion, getCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  let log = 'Correct!';
  const quantityOfRounds = 3;
  for (let i = 0; i < quantityOfRounds && log === 'Correct!'; i += 1) {
    const question = askQuestion();
    console.log(`Question: ${question}`);
    const correctAnswer = getCorrectAnswer(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log(log);
    } else {
      log = `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}!`;
    }
  }
  if (log === 'Correct!') {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(log);
  }
};

export default makeGame;
