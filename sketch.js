let sprite;
let sprite2;
let sprite3;

function preload() {
  sprite = new Sprite(200, 200, 80, 80);
  sprite.spriteSheet = 'assets/spelunky.png';

  let animations = {
    stand: {row: 0, frames: 1},
    walkRight: {row: 0, col: 1, frames: 8},
    walkUp: {row: 5, frames: 6},
    walkDown: {row: 5, col: 6, frames: 6}
  };
  sprite.anis.frameDelay = 4;
  sprite.addAnis(animations);

  sprite2 = new Sprite(400, 200, 80, 80);
  sprite2.spriteSheet = 'assets/green.png';

  let animations2 = {
    stand: {row: 0, frames: 1},
    walkRight: {row: 0, col: 1, frames: 8},
    walkUp: {row: 5, frames: 6},
    walkDown: {row: 5, col: 6, frames: 6}
  };
  sprite2.anis.frameDelay = 4;
  sprite2.addAnis(animations2);
  
  sprite3 = new Sprite(600, 200, 80, 80); 
  sprite3.spriteSheet = 'assets/yellow.png';

  let animations3 = {
    stand: {row: 0, frames: 1},
    walkRight: {row: 0, col: 1, frames: 8},
    walkUp: {row: 5, frames: 6},
    walkDown: {row: 5, col: 6, frames: 6}
  };
  sprite3.anis.frameDelay = 4;
  sprite3.addAnis(animations3);
}

function setup(){
  createCanvas(800, 400);
}

function draw() {
  background(0);

  if (kb.pressing('d')) {
    walkRight();
  } 
  else if (kb.pressing('a')) {
    walkLeft();
  } 
  else if (kb.pressing('w')){
    walkUp();
  }
  else if (kb.pressing('s')){
    walkDown();
  }
  else {
    stop();
  }

  if (sprite.x + sprite.width/4 > width) {
    walkLeft();
  } else if (sprite.x - sprite.width/4 < 0){
    walkRight();
  }
  
  sprite.update();
  sprite.draw();
  sprite2.update();
  sprite2.draw();
  sprite3.update();
  sprite3.draw();
}

function stop() {
  sprite.vel.x = 0;
  sprite.vel.y = 0;
  sprite.changeAni('stand');
  
  sprite2.vel.x = 0;
  sprite2.vel.y = 0;
  sprite2.changeAni('stand');
  
  sprite3.vel.x = 0;
  sprite3.vel.y = 0;
  sprite3.changeAni('stand');
}

function walkRight(){
  sprite.changeAni('walkRight');
  sprite.vel.x = 1;
  sprite.scale.x = 1;
  sprite.vel.y = 0;
  
  sprite2.changeAni('walkRight');
  sprite2.vel.x = 1;
  sprite2.scale.x = 1;
  sprite2.vel.y = 0;
  
  sprite3.changeAni('walkRight');
  sprite3.vel.x = 1;
  sprite3.scale.x = 1;
  sprite3.vel.y = 0;
}

function walkLeft(){
  sprite.changeAni('walkRight');
  sprite.vel.x = -1;
  sprite.scale.x = -1;
  sprite.vel.y = 0;
  
  sprite2.changeAni('walkRight');
  sprite2.vel.x = -1;
  sprite2.scale.x = -1;
  sprite2.vel.y = 0;
  
  sprite3.changeAni('walkRight');
  sprite3.vel.x = -1;
  sprite3.scale.x = -1;
  sprite3.vel.y = 0;
}

function walkUp(){
  sprite.changeAni('walkUp');
  sprite.vel.y = -1;
  sprite.vel.x = 0;
  
  sprite2.changeAni('walkUp');
  sprite2.vel.y = -1;
  sprite2.vel.x = 0;
  
  sprite3.changeAni('walkUp');
  sprite3.vel.y = -1;
  sprite3.vel.x = 0;
}

function walkDown(){
  sprite.changeAni('walkDown');
  sprite.vel.y = 1;
  sprite.vel.x = 0;
  
  sprite2.changeAni('walkDown');
  sprite2.vel.y = 1;
  sprite2.vel.x = 0;
  
  sprite3.changeAni('walkDown');
  sprite3.vel.y = 1;
  sprite3.vel.x = 0;
}

