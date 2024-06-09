class Ball {
  speed = 0.7;

  constructor(x = 0, y = 0, r = 80, color = "red") {
    this.velocity = { x: getRandomValue(-2, 2), y: getRandomValue(-2, 2) };
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
    this.mass = this.r * 0.3;
    this.element = document.createElement("div");
    this.element.style.position = "absolute";

    // this.element.style.top = `${this.y + "px"}`;
    // this.element.style.left = `${this.x + "px"}`;
    this.element.style.backgroundColor = this.color;
    this.element.style.transform = `translate(${this.x}px,${this.y}px)`;

    this.element.style.height = `${this.r + "px"}`;
    this.element.style.width = `${this.r + "px"}`;
    this.element.style.borderRadius = "50%";
    box.appendChild(this.element);
  }

  move = () => {
    this.x += this.velocity.x * this.speed;
    this.y += this.velocity.y * this.speed;
    // this.element.style.left = this.x + "px";
    // this.element.style.top = this.y + "px";
    this.element.style.transform = `translate(${this.x}px,${this.y}px)`;
  };
  detectCollision = () => {
    if (this.x + this.r > BOUNDARY_WIDTH) {
      this.x = Math.max(this.r, this.x);
      this.velocity.x *= -1;
    } else if (this.x < 0) {
      this.x = Math.min(BOUNDARY_WIDTH - this.r, this.x);
      this.velocity.x *= -1;
    } else if (this.y + this.r > BOUNDARY_HEIGHT) {
      this.y = Math.max(this.r, this.y);
      this.velocity.y *= -1;
    } else if (this.y < 0) {
      this.y = Math.min(this.y + BOUNDARY_HEIGHT - this.r, this.y);
      this.velocity.y *= -1;
    }
    // if (this.x + this.r > BOUNDARY_WIDTH || this.x < 0) {
    //   this.velocity.x *= -1;
    // }
    // if (this.y + this.r > BOUNDARY_HEIGHT || this.y < 0) {
    //   this.velocity.y *= -1;
    // }
  };
}
