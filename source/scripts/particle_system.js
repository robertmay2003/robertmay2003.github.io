var ParticleSystem = class {
	constructor(rate, color, maxSize, minSize, velocity, pointer) {
		this.rate = rate;

		this.layer = new Layer(window.innerWidth, window.innerHeight, color, minSize / 2, maxSize / 2, velocity, pointer);
	}

	process(ctx) {
		// Spawn new balls
		if (Math.random() < this.rate / (1000 / 60)) this.layer.spawnBall();

		// Render
		this.layer.renderBalls(ctx);
	}
};