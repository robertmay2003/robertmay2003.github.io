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

		console.log(this.balls.length);
	}

	renderBalls(ctx) {
		var i = 0;
		var spliceIndices = [];
		ctx.fillStyle = this.color;
		for (var ball of this.balls) {
			if (ball.isOutOfBounds()) { spliceIndices.push(i) }

			ball.move();

			ctx.beginPath();
			ctx.arc(ball.pos.x, ball.pos.y, ball.size, 0, 2 * Math.PI);
			ctx.closePath();
			ctx.fill();
			i++
		}

		// Remove first ball if out of bounds
		for (var spliceIndex of spliceIndices) {
			this.balls.splice(spliceIndex, 1);
		}

		// remove balls if too many
		if (this.balls.length > 100) {
			this.balls[0].size -= 1;
			if (this.balls[0].size <= 0) { this.balls.splice(0, 1) }
		}
	}
};