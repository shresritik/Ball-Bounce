for (let i = 0; i < NO_OF_BALLS; i++) {
  let dim = getRandomValue(40, 80);
  let x = getRandomValue(0, BOUNDARY_WIDTH - dim);
  let y = getRandomValue(0, BOUNDARY_HEIGHT - dim);
  let color = `rgb(${getRandomValue(0, 255)},${getRandomValue(
    0,
    255
  )},${getRandomValue(0, 255)}) `;
  //prevent initialization of the ball on top of other ball
  // if (i != 0) {
  //   for (let j = 0; j < objArray.length; j++) {
  //     if (collision(x, objArray[j].x, y, objArray[j].y, dim, dim)) {
  //       x = getRandomValue(0, 800);
  //       y = getRandomValue(0, 600);
  //       j = -1;
  //     }
  //   }
  // }
  objArray.push(new Ball(x, y, dim, color));
}
for (let i = 0; i < objArray.length; i++) {
  animateAll(objArray[i]);
}
