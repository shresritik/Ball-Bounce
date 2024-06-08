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
const collision = (x1, x2, y1, y2, r1, r2) => {
  const dx = Math.pow(x2 - x1, 2);
  const dy = Math.pow(y2 - y1, 2);
  const dist = Math.sqrt(dx + dy);
  if (dist <= (r1 + r2) / 2) {
    console.log("collision", dist);
    return true;
  }
};
function update() {
  b1.move();
  b2.move();
  const collisionState = collision(b1.x, b2.x, b1.y, b2.y, b1.r, b2.r);
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
    this.mass = this.r * this.r * this.r;
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
  speedFunc() {
    // magnitude of velocity vector
    return Math.sqrt(this.dx * this.dx + this.dy * this.dy);
  }
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
  angle() {
    // velocity's angle with the x axis
    return Math.atan2(this.dy, this.dx);
  }
}
const objArray = [];
for (let i = 0; i < 8; i++) {
  const bal = new Ball(
    getRandomValue(0, 800),
    getRandomValue(0, 600),
    getRandomValue(0, 80)
  );
  objArray.push(bal);
}
for (let i = 0; i < objArray.length; i++) {
  animate(objArray[i]);
}

function ballCollision() {
  for (let i = 0; i < objArray.length - 1; i++) {
    for (let j = i + 1; j < objArray.length; j++) {
      let ob1 = objArray[i];
      let ob2 = objArray[j];
      let dist = collision(ob1.x, ob2.x, ob1.y, ob2.y, ob1.r, ob2.r);

      if (dist) {
        let theta1 = ob1.angle();
        let theta2 = ob2.angle();
        let phi = Math.atan2(ob2.y - ob1.y, ob2.x - ob1.x);
        let m1 = ob1.mass;
        let m2 = ob2.mass;
        let v1 = ob1.speedFunc();
        let v2 = ob2.speedFunc();

        let dx1F =
          ((v1 * Math.cos(theta1 - phi) * (m1 - m2) +
            2 * m2 * v2 * Math.cos(theta2 - phi)) /
            (m1 + m2)) *
            Math.cos(phi) +
          v1 * Math.sin(theta1 - phi) * Math.cos(phi + Math.PI / 2);
        let dy1F =
          ((v1 * Math.cos(theta1 - phi) * (m1 - m2) +
            2 * m2 * v2 * Math.cos(theta2 - phi)) /
            (m1 + m2)) *
            Math.sin(phi) +
          v1 * Math.sin(theta1 - phi) * Math.sin(phi + Math.PI / 2);
        let dx2F =
          ((v2 * Math.cos(theta2 - phi) * (m2 - m1) +
            2 * m1 * v1 * Math.cos(theta1 - phi)) /
            (m1 + m2)) *
            Math.cos(phi) +
          v2 * Math.sin(theta2 - phi) * Math.cos(phi + Math.PI / 2);
        let dy2F =
          ((v2 * Math.cos(theta2 - phi) * (m2 - m1) +
            2 * m1 * v1 * Math.cos(theta1 - phi)) /
            (m1 + m2)) *
            Math.sin(phi) +
          v2 * Math.sin(theta2 - phi) * Math.sin(phi + Math.PI / 2);

        ob1.dx = dx1F;
        ob1.dy = dy1F;
        ob2.dx = dx2F;
        ob2.dy = dy2F;
      }
    }
  }
}

function animate(a) {
  setInterval(() => {
    a.move();
    ballCollision();
  }, 1000 / 144);
}
// update();
