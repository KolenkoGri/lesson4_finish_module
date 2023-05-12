'use strict';

(() => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const sum = Math.floor(Math.random() * (max - min + 1) + min);
    return sum;
  };

  const game = (firstMotion) => {
    if (!firstMotion) {
      return;
    }
    const result = {
      player: 5,
      computer: 5,
    };
    return function start() {
      if (firstMotion === 'computer') {
        firstMotion = '';
        return turn();
      }
      if (result.player > 0 && result.computer > 0) {
        const answer = prompt(
            `Введите количество шариков от 1 до ${result.player}`,
        );
        if (answer) {
          let computer = getRandomIntInclusive(1, 2);
          if (computer % 2 === 0) {
            computer = 'even';
          } else {
            computer = 'odd';
          }
          if (answer % 2 === 0 && computer === 'even') {
            result.computer += +answer;
            result.player -= +answer;
          } else {
            result.computer -= +answer;
            result.player += +answer;
          }
        } else {
          return start();
        }
        turn();
        console.log(result.computer, result.player);
      } else {
        alert(`Игра окончена !
        Итого шариков у игрока: ${result.player}
        Итого шариков у компюьтера: ${result.computer}
        `);
        return;
      }
      // eslint-disable-next-line require-jsdoc
      function turn() {
        if (result.player > 0 && result.computer > 0) {
          const computer = getRandomIntInclusive(1, result.computer);
          let answer = confirm(
              `Число чётное? Если да , жмите ОК . Если нет , жмите отмена`,
          );
          if (answer % 2 === 0) {
            answer = 'even';
          } else {
            answer = 'odd';
          }
          if (computer % 2 === 0 && answer === 'even') {
            result.computer -= +computer;
            result.player += +computer;
          } else {
            result.computer += +computer;
            result.player -= +computer;
          }
          return start();
        } else {
          alert(`Игра окончена !
            Итого шариков у игрока: ${result.player}
            Итого шариков у компюьтера: ${result.computer}
            `);
          return 'end';
        }
      }
    };
  };
  window.marbles = game;
})();
