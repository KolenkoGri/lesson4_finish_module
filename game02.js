"use strict";

(() => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    let sum = Math.floor(Math.random() * (max - min + 1) + min);
    return sum;
  };

  const game = (firstMotion) => {
    const result = {
      player: 5,
      computer: 5,
    };
    console.log(firstMotion, firstMotion);
    // if (firstMotion === player) {
    //   start();
    // }
    return function start() {
      if (result.player > 0 && result.computer > 0) {
        const answer = prompt(
          `Введите количество шариков от 1 до ${result.player}`
        );
        if (answer) {
          let computer = getRandomIntInclusive(1, 2);
          if (computer % 2 === 0) {
            computer = "even";
          } else {
            computer = "odd";
          }
          if (answer % 2 === 0 && computer === "even") {
            result.computer += +answer;
            result.player -= +answer;
          } else {
            result.computer -= +answer;
            result.player += +answer;
          }
        }
        console.log(result.computer, result.player);
      } else {
        alert(`Игра окончена !
        Итого шариков у игрока: ${result.player}
        Итого шариков у компюьтера: ${result.computer}
        `);
        return;
      }
      turn();
      function turn() {
        if (result.player > 0 && result.computer > 0) {
          const computer = getRandomIntInclusive(1, result.computer);
          let answer = confirm(
            `Число чётное? Если да , жмите ОК . Если нет , жмите отмена`
          );
          if (answer % 2 === 0) {
            answer = "even";
          } else {
            answer = "odd";
          }
          if (computer % 2 === 0 && answer === "even") {
            result.computer -= +computer;
            result.player += +computer;
            console.log(result.computer, result.player);
          } else {
            result.computer += +computer;
            result.player -= +computer;
            console.log(result.computer, result.player);
          }
          return start();
        } else {
          alert(`Игра окончена !
            Итого шариков у игрока: ${result.player}
            Итого шариков у компюьтера: ${result.computer}
            `);
          return;
        }
        console.log(result.computer, result.player);
      }
    };
  };
  window.marbles = game;
})();
