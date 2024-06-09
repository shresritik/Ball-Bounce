// initialize ball objects and pushing in the objArray

for (let i = 0; i < NO_OF_BALLS; i++) {
  let dim = getRandomValue(10, 20);
  let x = getRandomValue(0, BOUNDARY_WIDTH - dim);
  let y = getRandomValue(0, BOUNDARY_HEIGHT - dim);
  let color = `rgb(${getRandomValue(0, 255)},${getRandomValue(
    0,
    255
  )},${getRandomValue(0, 255)}) `;
  objArray.push(new Ball(x, y, dim, color));
}
// animate the balls
for (let i = 0; i < objArray.length; i++) {
  animateAll(objArray[i]);
}
