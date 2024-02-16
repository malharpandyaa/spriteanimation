class Character {
  constructor(x, y, spriteSheet) {
    this.sprite = new Sprite(x, y, 80, 80); // Adjust size as needed
    this.sprite.spriteSheet = spriteSheet;

    let animations = {
      stand: {row: 0, frames: 1},
      walkRight: {row: 0, col: 1, frames: 8},
      walkUp: {row: 5, frames: 6},
      walkDown: {row: 5, col: 6, frames: 6}
    };
    this.sprite.anis.frameDelay = 8;
    this.sprite.addAnis(animations);
  }

  update() {
    this.sprite.update();
  }

  draw() {
    this.sprite.draw();
  }

  stop() {
    this.sprite.vel.x = 0;
    this.sprite.vel.y = 0;
    this.sprite.changeAni('stand');
  }

  walkRight() {
    this.sprite.changeAni('walkRight');
    this.sprite.vel.x = 1;
    this.sprite.scale.x = 1;
    this.sprite.vel.y = 0;
  }

  walkLeft() {
    this.sprite.changeAni('walkRight');
    this.sprite.vel.x = -1;
    this.sprite.scale.x = -1;
    this.sprite.vel.y = 0;
  }

  walkUp() {
    this.sprite.changeAni('walkUp');
    this.sprite.vel.y = -1;
    this.sprite.vel.x = 0;
  }

  walkDown() {
    this.sprite.changeAni('walkDown');
    this.sprite.vel.y = 1;
    this.sprite.vel.x = 0;
  }
}

let character1;
let character2;
let character3;

function preload() {
  character1 = new Character(200, 200, 'assets/spelunky.png');
  character2 = new Character(400, 200, 'assets/green.png');
  character3 = new Character(600, 200, 'assets/yellow.png');
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(0);

  if (kb.pressing(RIGHT_ARROW)) {
    character1.walkRight();
    character2.walkRight();
    character3.walkRight();
  } else if (kb.pressing(LEFT_ARROW)) {
    character1.walkLeft();
    character2.walkLeft();
    character3.walkLeft();
  } else if (kb.pressing(UP_ARROW)) {
    character1.walkUp();
    character2.walkUp();
    character3.walkUp();
  } else if (kb.pressing(DOWN_ARROW)) {
    character1.walkDown();
    character2.walkDown();
    character3.walkDown();
  } else {
    character1.stop();
    character2.stop();
    character3.stop();
  }

  if (character1.sprite.x + character1.sprite.width / 4 > width) {
    character1.walkLeft();
  } else if (character1.sprite.x - character1.sprite.width / 4 < 0) {
    character1.walkRight();
  }

  character1.update();
  character1.draw();
  character2.update();
  character2.draw();
  character3.update();
  character3.draw();
}
