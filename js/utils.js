function getRandomValue(min, max) {
  const maxValue = Math.ceil(max);
  const minValue = Math.floor(min);
  const value = Math.random() * (maxValue - minValue) + minValue;
  return value;
}

function rotate(velocity, angle) {
  const rotatedVelocities = {
    x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
    y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle),
  };

  return rotatedVelocities;
}
function animateAll(a) {
  function animate() {
    a.move();
    ballCollision();
    a.detectCollision();
    requestAnimationFrame(animate);
  }
  animate();
}
