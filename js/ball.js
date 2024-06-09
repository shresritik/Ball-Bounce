class Ball {
  velocity = { x: getRandomValue(-2, 2), y: getRandomValue(-2, 2) };

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
    this.element.style.border = "3px solid red";
    // this.element.style.backgroundColor = this.color;
    this.element.style.height = `${this.r + "px"}`;
    this.element.style.width = `${this.r + "px"}`;
    this.element.style.borderRadius = "50%";
    this.mass = this.r * this.r;
    box.appendChild(this.element);
  }

  move = () => {
    this.x += this.velocity.x * this.speed;
    this.element.style.left = this.x + "px";
    this.y += this.velocity.y * this.speed;
    this.element.style.top = this.y + "px";
  };
  detectCollision = () => {
    if (this.x + this.r >= BOUNDARY_WIDTH || this.x <= 0) {
      this.velocity.x *= -1;
    }
    if (this.y + this.r >= BOUNDARY_HEIGHT || this.y <= 0) {
      this.velocity.y *= -1;
    }
  };
}
