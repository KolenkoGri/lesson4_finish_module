'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + 1));
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };
    const lang =
      language === 'EN' || language === 'ENG' ? FIGURES_ENG : FIGURES_RUS;

    const getFigure = () => {
      const exitExpression =
        lang === FIGURES_ENG ?
          'Are you sure you want to get out?' :
          'Точно ли Вы хотите выйти?';
      return exitExpression;
    };

    // const gameRules = {
    //   'камень': {
    //     '0': 'камень',
    //     'ножницы': 1,
    //     'бумага': 0, // -1,
    //   },
    //   'ножницы': {
    //     'камень': 0, // -1,
    //     'ножницы': 0,
    //     'бумага': 1,
    //   },
    //   'бумага': {
    //     'камень': 1,
    //     'ножницы': 0, // -1,
    //     'бумага': 0,
    //   },
    // };

    const compWord = lang === FIGURES_ENG ? 'Computer' : 'Компьютер';
    const you = lang === FIGURES_ENG ? 'You' : 'Вы';
    const winner = lang === FIGURES_ENG ? 'win' : 'выиграл';
    const draw = lang === FIGURES_ENG ? 'draw' : 'Ничья';
    const user = lang === FIGURES_ENG ? 'player' : 'Игрок';
    const resultat = lang === FIGURES_ENG ? 'Result' : 'Результат';

    return function start() {
      const computer = getRandomIntInclusive(0, 2);
      console.log(computer);
      let answer = prompt(`${lang}?`);
      if (answer) {
        answer = answer.toLowerCase();
        const arr = [...lang];
        const compAnswer = arr.slice(computer, computer + 1).toString();
        if (answer[0] === compAnswer[0]) {
          alert(`
                        ${compWord}:${compAnswer}
                        ${you}:${compAnswer}
                        ${draw}`);
          return start();
        }
        if (answer[0] === 'к' || answer[0] === 'r') {
          if (compAnswer === lang[2]) {
            result.computer += 1;
            alert(`
                ${compWord}:${compAnswer}
                ${you}:${lang[0]}
                ${compWord} ${winner}`);
          } else {
            result.player += 1;
            alert(`
                ${compWord}:${compAnswer}
                ${you}:${lang[0]}
                ${user} ${winner}`);
          }
        }
        if (answer[0] === 'н' || answer[0] === 's') {
          if (compAnswer === lang[0]) {
            result.computer += 1;
            alert(`
                ${compWord}:${compAnswer}
                ${you}:${lang[1]}
                ${compWord} ${winner}`);
          } else {
            result.player += 1;
            alert(`
                ${compWord}:${compAnswer}
                ${you}:${lang[1]}
                ${user} ${winner}`);
          }
        }
        if (answer[0] === 'б' || answer[0] === 'p') {
          if (compAnswer === lang[1]) {
            result.computer += 1;
            alert(`
                ${compWord}:${compAnswer}
                ${you}:${lang[2]}
                ${compWord} ${winner}`);
          } else {
            result.player += 1;
            alert(`
                ${compWord}:${compAnswer}
                ${you}:${lang[2]}
                ${user} ${winner}`);
          }
        }

        if (result.player > result.computer) {
          return 'player';
        } else {
          return 'computer';
        }
      } else {
        const exit = confirm(getFigure());
        if (!exit) {
          return start();
        } else {
          alert(`
                ${resultat}:
                ${compWord}:${result.computer},
                ${you}:${result.player}
            `);
        }
      }
    };
  };
  window.rps = game;
})();
