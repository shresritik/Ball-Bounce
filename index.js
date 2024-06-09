// if (this.x + this.d > BOUNDARY_WIDTH) {
//   this.x = Math.max(this.d, this.x);

//   this.velocity.x *= -1;
// } else if (this.x < 0) {
//   this.x = Math.min(BOUNDARY_WIDTH - this.d, this.x);

//   this.velocity.x *= -1;
// } else if (this.y + this.d > BOUNDARY_HEIGHT) {
//   this.y = Math.max(this.d, this.y);
//   this.velocity.y *= -1;
// } else if (this.y < 0) {
//   this.y = Math.min(this.y + BOUNDARY_HEIGHT - this.d, this.y);
//   this.velocity.y *= -1;
// }

const v2 = {
  x:
    (adjacentBall.velocity.x * (m2 - m1)) / (m1 + m2) +
    (currentBall.velocity.x * 2 * m1) / (m1 + m2),
  y:
    (adjacentBall.velocity.y * (m2 - m1)) / (m1 + m2) +
    (currentBall.velocity.y * 2 * m1) / (m1 + m2),
};

let color = `rgb(${getRandomValue(0, 255)},${getRandomValue(
  0,
  255
)},${getRandomValue(0, 255)}) `;
