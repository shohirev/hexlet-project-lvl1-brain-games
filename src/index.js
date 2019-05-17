import * as even from './games/even';
import * as calc from './games/calc';
import * as progression from './games/progression';
import * as prime from './games/prime';

const startGame = (game) => {
  game.greeting();
  game.showRule();
  const userName = game.getUserName();
  let log = 'Correct!';
  let i = 0;
  while (log === 'Correct!' && i < 3) {
    log = game.startRound();
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

export { startGame };
