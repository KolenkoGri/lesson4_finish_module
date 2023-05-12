'use strict';

const allGame = () => {
  const startGame = window.rps();

  const first = startGame();
  const startMarbles = window.marbles(first);

  startMarbles();
};

allGame();
