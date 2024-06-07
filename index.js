const box = document.getElementById("box");
const ball = document.getElementById("ball");
const boundaryHeight = 800;
const boundaryWidth = 1000;
document.body.style.backgroundColor = "black";
box.style.backgroundColor = "white";
box.style.height = `${boundaryHeight}px`;
box.style.width = `${boundaryWidth}px`;
box.style.margin = "auto";
box.style.position = "relative";
function getRandomValue(min, max) {
  const maxValue = Math.ceil(max);
  const minValue = Math.floor(min);
  const value = Math.random() * (maxValue - minValue) + minValue;
  return value;
}
const collision = (x1, x2, y1, y2) => {
  const dx = Math.pow(x2 - x1, 2);
  const dy = Math.pow(y2 - y1, 2);
  const dist = Math.sqrt(dx + dy);
  if (dist <= 80) {
    console.log("collision", dist);
    return true;
  }
};
function update() {
  b1.move();
  b2.move();
  const collisionState = collision(b1.x, b2.x, b1.y, b2.y);
  if (collisionState) {
    b1.dx *= -1;
    b1.dy *= -1;
    b2.dx *= -1;
    b2.dy *= -1;
  }

  requestAnimationFrame(update);
}

class Ball {
  dy = 2;
  dx = 2;
  speed = 2;

  constructor(x = 0, y = 0, r = 80, color = "red") {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
    this.element = document.createElement("div");
    this.element.style.position = "absolute";

    this.element.style.top = `${this.y + "px"}`;
    this.element.style.left = `${this.x + "px"}`;
    this.element.style.backgroundColor = this.color;
    this.element.style.height = `${this.r + "px"}`;
    this.element.style.width = `${this.r + "px"}`;
    this.element.style.borderRadius = "50%";
    box.appendChild(this.element);
  }
  moveY = () => {
    this.y += this.dy * this.speed;
    this.element.style.top = this.y + "px";
    if (this.y + this.r >= boundaryHeight || this.y <= 0) {
      this.dy *= -1;
    }
  };
  moveX = () => {
    this.x += this.dx * this.speed;
    this.element.style.left = this.x + "px";
    if (this.x + this.r >= boundaryWidth || this.x <= 0) {
      this.dx *= -1;
    }
  };
  move = () => {
    // this.y += this.dy * this.speed;
    // this.element.style.top = this.y + "px";
    // if (this.y + this.h >= boundaryHeight || this.y <= 0) {
    //   this.dy *= -1;
    // }
    // this._varY = this.y;
    // this.x += this.dx * this.speed;
    // this.element.style.left = this.x + "px";
    // if (this.x + this.w >= boundaryWidth || this.x <= 0) {
    //   this.dx *= -1;
    // }
    this.moveX();
    this.moveY();
  };
}
for (let i = 0; i < 8; i++) {
  const bal = new Ball(
    getRandomValue(0, 800),
    getRandomValue(0, 600),
    getRandomValue(0, 80)
  );
  animate(bal);
}

function animate(a) {
  setInterval(() => {
    a.moveY();
    a.moveX();
  }, 1000 / 144);
}
// update();
