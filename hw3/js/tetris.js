function Tetris(gameState = GAME_STATES.PAUSED) {
  // Private properties
  const playground = PlaygroundFactory.getInstance();
  let gameInverval = null; // will need to use this for gameover and pause events
  let state = gameState;

  // public properties
  this.figures = [];

  // Private methods
  const addFigure = () => {
    const newFigure = new Figure(this.figures);
    this.figures.push(newFigure);
    return newFigure;
  };


  const getCurrentFigure = () =>
    this.figures.find(figure => figure.state === STATES.FALLING) || addFigure();


  const events = (keyCode) => { // TODO: this seems to have refactoring potential
    const eventsMap = {
      [DOWN]() {
        getCurrentFigure().moveDown();
      },
      [RIGHT]() {
        getCurrentFigure().moveRight();
      },
      [LEFT]() {
        getCurrentFigure().moveLeft();
      },
      [PAUSE]() {
        if (state === GAME_STATES.PLAYING) {
          console.log('GAME PAUSED');
          state = GAME_STATES.PAUSED;
        } else if (state === GAME_STATES.PAUSED) {
          console.log("GAME UNPAUSED");
          state = GAME_STATES.PLAYING;
        }
      },
    }
    eventsMap[keyCode] && eventsMap[keyCode]();
  };


  const destroyLine = () => {
    let rowsToDelete = getRowsToDelete();

    // delete row
    for(let row of rowsToDelete) {
      for(let figure of this.figures) {
        if (figure.state === STATES.FALLING)
          continue;

        for(let cell of figure.cells.filter(cell => cell.y === row)) {
          figure.destroyCell(cell);
        }
        // move figure down after deleting row
        figure.moveDown();
      }
    }
  };


  const getRowsToDelete = () => {
    let allRows = [];
    for (let k = 0; k < PLAYGROUND_HEIGHT; k++)
      allRows.push(k);

    let rows = [];
    rowLoop:
    for (let i = 0; i < PLAYGROUND_HEIGHT; i++) {
      cellLoop:
      for (let j = 0; j < PLAYGROUND_WIDTH; j++) {
        for (let figure of this.figures.filter(figure => figure.state === STATES.STATIC)) {
          if (figure.state === STATES.FALLING) {
            rows.push(i);
            continue rowLoop;
          }
          if (figure.cells.find(cell => cell.x === j && cell.y === i) !== undefined) {
            continue cellLoop;
          }
        }
        rows.push(i);
        continue rowLoop;
      }
    }
    // Get the difference: A \ B (A without B)
    return allRows.filter(x => !rows.includes(x));
  }


  const checkForGameOver = () => {
    for(let figure of this.figures.filter(figure => figure.state === STATES.STATIC)) {
      if (figure.cells.find(cell => cell.y === PLAYGROUND_HEIGHT - 1) !== undefined) {
        state = GAME_STATES.GAMEOVER;
        clearInterval(gameInverval);
        console.log('GAME OVER');
      }
    }
  };


  // public methods
  this.play = () => {
    state = GAME_STATES.PLAYING;

    playground.render();
    document.addEventListener('keydown', ({keyCode}) =>  events(keyCode));

    gameInverval = setInterval(() => { // TODO: maybe it's better to have a separate method for this?
      if (state === GAME_STATES.PLAYING) {
        getCurrentFigure().moveDown();
        destroyLine();
        checkForGameOver();
      }
    }, INTERVAL);
  };
};

const tetris = new Tetris();
tetris.play();
