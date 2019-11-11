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

		// Draw ball
		for (var ball of this.balls) {
			if (ball.isOutOfBounds()) { spliceIndices.push(i) }

			ball.move();

			ctx.beginPath();
			ctx.arc(ball.pos.x, ball.pos.y, ball.size, 0, 2 * Math.PI);
			ctx.closePath();
			ctx.fill();
			i++
		}

		// All balls out of bounds
		for (var spliceIndex of spliceIndices) {
			this.balls.splice(spliceIndex, 1);
		}

		// remove balls if too many
		if (this.balls.length > 60) {
			for (var j = 0; j < this.balls.length - 60; j++) {
				this.balls[j].size -= 0.5;
				if (this.balls[j].size <= 1) { this.balls.splice(j, 1) }
			}
		}
	}
};