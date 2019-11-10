var Layer = class {
	constructor(width, height, color, maxRadius, minRadius, velocity, pointer) {
		this.width = width;
		this.height = height;
		this.maxRadius = maxRadius;
		this.minRadius = minRadius;
		this.color = color;
		this.velocity = velocity;
		this.balls = [];

		this.pointer = pointer;
	}

	spawnBall() {
		this.balls.push(new Ball(this));

		// remove balls if too many
		if (this.balls.length > 100) {
			this.balls[0].size -= 1;
			if (this.balls[0].size <= 0) { this.balls.splice(0, 1) }
		}
	}

	killBall(ball) {
		// var index = this.balls.indexOf(ball);
		// if (index >= 0) this.balls.splice(index, 1);
	}

	renderBalls(ctx) {
		ctx.fillStyle = this.color;
		for (var ball of this.balls) {
			ball.move();

			ctx.beginPath();
			ctx.arc(ball.pos.x, ball.pos.y, ball.size, 0, 2 * Math.PI);
			ctx.closePath();
			ctx.fill();
		}
	}
};