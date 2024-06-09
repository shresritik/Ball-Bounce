const collision = (x1, x2, y1, y2, d1, d2) => {
  const dx = Math.pow(x2 - x1, 2);
  const dy = Math.pow(y2 - y1, 2);
  const dist = Math.sqrt(dx + dy);
  //   check if distance between the two circles is less than the half of their diameters
  if (dist < (d1 + d2) / 2) {
    return true;
  }
};
function ballCollision() {
  // check collision between a particular ball and all the balls
  for (let i = 0; i < objArray.length - 1; i++) {
    for (let j = i + 1; j < objArray.length; j++) {
      let ob1 = objArray[i];
      let ob2 = objArray[j];
      let dist = collision(ob1.x, ob2.x, ob1.y, ob2.y, ob1.r, ob2.r);
      if (dist) {
        resolveCollision(objArray[i], objArray[j]);
      }
    }
  }
}
function resolveCollision(currentBall, adjacentBall) {
  const xVelocityDiff = currentBall.velocity.x - adjacentBall.velocity.x;
  const yVelocityDiff = currentBall.velocity.y - adjacentBall.velocity.y;

  const xDist = adjacentBall.x - currentBall.x;
  const yDist = adjacentBall.y - currentBall.y;

  // Prevent accidental overlap of balls when colliding
  if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
    // Grab angle between the two colliding balls

    // Store mass in var for better readability in collision equation

    // Velocity after 1d collision equation
    let m1 = currentBall.mass;
    let m2 = adjacentBall.mass;
    const v1 = {
      x:
        (currentBall.velocity.x * (m1 - m2)) / (m1 + m2) +
        (adjacentBall.velocity.x * 2 * m2) / (m1 + m2),
      y:
        (currentBall.velocity.y * (m1 - m2)) / (m1 + m2) +
        (adjacentBall.velocity.y * 2 * m2) / (m1 + m2),
    };
    const v2 = {
      x:
        (adjacentBall.velocity.x * (m2 - m1)) / (m1 + m2) +
        (currentBall.velocity.x * 2 * m1) / (m1 + m2),
      y:
        (adjacentBall.velocity.y * (m2 - m1)) / (m1 + m2) +
        (currentBall.velocity.y * 2 * m1) / (m1 + m2),
    };

    // Final velocity after rotating axis back to original location

    // Swap ball velocities for realistic bounce effect
    currentBall.velocity.x = v1.x;
    currentBall.velocity.y = v1.y;

    adjacentBall.velocity.x = v2.x;
    adjacentBall.velocity.y = v2.y;
  }
}
// function resolveCollision(currentBall, adjacentBall) {
//   const xVelocityDiff = currentBall.velocity.x - adjacentBall.velocity.x;
//   const yVelocityDiff = currentBall.velocity.y - adjacentBall.velocity.y;

//   const xDist = adjacentBall.x - currentBall.x;
//   const yDist = adjacentBall.y - currentBall.y;

//   // Prevent accidental overlap of balls when colliding
//   if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
//     // Grab angle between the two colliding balls
//     const angle = -Math.atan2(
//       adjacentBall.y - currentBall.y,
//       adjacentBall.x - currentBall.x
//     );

//     // Store mass in var for better readability in collision equation
//     const m1 = currentBall.mass;
//     const m2 = adjacentBall.mass;

//     // Velocity before equation
//     const u1 = rotate(currentBall.velocity, angle);
//     const u2 = rotate(adjacentBall.velocity, angle);

//     // Velocity after 1d collision equation
//     // const v1 = {
//     //       x:
//     //         (currentBall.velocity.x * (m1 - m2)) / (m1 + m2) +
//     //         (adjacentBall.velocity.x * 2 * m2) / (m1 + m2),
//     //       y:
//     //         (currentBall.velocity.y * (m1 - m2)) / (m1 + m2) +
//     //         (adjacentBall.velocity.y * 2 * m2) / (m1 + m2),
//     //     };
//     //     const v2 = {
//     //       x:
//     //         (adjacentBall.velocity.x * (m2 - m1)) / (m1 + m2) +
//     //         (currentBall.velocity.x * 2 * m1) / (m1 + m2),
//     //       y:
//     //         (adjacentBall.velocity.y * (m2 - m1)) / (m1 + m2) +
//     //         (currentBall.velocity.y * 2 * m1) / (m1 + m2),
//     //     };

//     const v1 = {
//       x: (u1.x * (m1 - m2)) / (m1 + m2) + (u2.x * 2 * m2) / (m1 + m2),
//       y: (u1.y * (m1 - m2)) / (m1 + m2) + (u2.y * 2 * m2) / (m1 + m2),
//     };
//     const v2 = {
//       x: (u2.x * (m2 - m1)) / (m1 + m2) + (u1.x * 2 * m2) / (m1 + m2),
//       y: (u2.y * (m2 - m1)) / (m1 + m2) + (u1.y * 2 * m2) / (m1 + m2),
//     };

//     // Final velocity after rotating axis back to original location
//     const vFinal1 = rotate(v1, -angle);
//     const vFinal2 = rotate(v2, -angle);

//     // Swap ball velocities for realistic bounce effect
//     currentBall.velocity.x = vFinal1.x;
//     currentBall.velocity.y = vFinal1.y;

//     adjacentBall.velocity.x = vFinal2.x;
//     adjacentBall.velocity.y = vFinal2.y;
//   }
// }
