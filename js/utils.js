function getRandomValue(min, max) {
  const maxValue = Math.ceil(max);
  const minValue = Math.floor(min);
  const value = Math.random() * (maxValue - minValue) + minValue;
  return value;
}

function animateAll(a) {
  function animate() {
    a.detectCollision();
    ballCollision();

    a.move();

    requestAnimationFrame(animate);
  }

  animate();
}
