// falling - new figure is put on the playgound
// static - figure stoped moving. This happens when there are obsicles for any cells bellow
function Figure(obsticles, state = STATES.FALLING) {
  // Public properties
  this.cells = [];
  this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
  this.id = helperMethods.idGenerator.next().value;
  this.state = state;
  this.obsticles = obsticles;

  // Private methods
  const validFor = (direction) =>
    this.cells.every(cell => cell.validFor(direction));

  // initialise figure cells
  const addCell = (x, y) =>
    this.cells.push(new Cell(x, y, this.color, this.id, this.obsticles, this.state));

  // generate random coordinates with an offset
  const generateCoordinates = () => {
    let initialPositions = INITIAL_POSITIONS[Math.floor(Math.random() * INITIAL_POSITIONS.length)];

    const randomOffset = (positions) =>
      Math.floor(Math.random() * (PLAYGROUND_WIDTH -
        (positions.map(pos => pos[1]).reduce((a, b) => Math.max(a, b)))));

    let offset = randomOffset(initialPositions);

    initialPositions.forEach(([y, x]) =>
      addCell(x + offset, y));
  }
  generateCoordinates();
  

  // Public methods
  this.moveDown = () => {
    if (validFor(DOWN)) {
      this.cells.forEach(cell => cell.deRender());
      this.cells.forEach(cell => cell.moveDown());
    } else {
      this.state = STATES.STATIC
    }
  };

  this.moveRight = () => { // TODO: move right and move left are almost identical
    if (!validFor(RIGHT)) return;

    this.cells.forEach(cell => cell.deRender());
    this.cells.forEach(cell => cell.moveRight());
  };

  this.moveLeft = () => {
    if (!validFor(LEFT)) return;

    this.cells.forEach(cell => cell.deRender());
    this.cells.forEach(cell => cell.moveLeft());
  };

  this.rotate = () => {
    // TODO: this is complicated. But really can be solved with basic math.
    //       make sure you are rotating around the center element
    //       all figures will be eaither 3 cells wide or 3 cells hight
  };

  this.destroyCell = (cell) => {
    this.cells = this.cells.filter(someCell => someCell !== cell);
    cell.destroy();
  };
}
