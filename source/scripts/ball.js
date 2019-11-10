var Ball = class {
	constructor(parent) {
		// Upwards bias
		this.vel = new Point(
			 parent.velocity.x - (Math.random() * parent.velocity.x / 5), parent.velocity.y - (Math.random() * parent.velocity.y / 5)
		);

		// Spawn at bottom
		this.pos = new Point(
			Math.random() * parent.width,
			parent.height + 100
		);
		this.size = (parent.maxRadius - parent.minRadius) * Math.random() + parent.minRadius;
		this.width = parent.width;
		this.height = parent.height;
		this.pointer = parent.pointer;

		this.ignorePointer = Math.random() < 0.25;

		this.onKill = function() { parent.killBall(this); };
	}

	move() {
		// ---- interact with pointer ----
		if (!this.ignorePointer) {
			var dx = this.pointer.pos.x - this.pos.x;
			var dy = this.pointer.pos.y - this.pos.y;
			this.pos = this.pos.add(
				new Point(
					1 - dy / 200,
					1 - dx / 200
				)
			);
		}

		// ---- kill borders ----
		if (
			(this.pos.x >= this.width + this.size + 100) ||
			(this.pos.x <= this.size - 100) ||
			(this.pos.y >= this.height + this.size + 100) ||
			(this.pos.y <= this.size - 100)
		) {
			// Kill
			this.onKill();
		}

		// ---- velocity ----
		this.pos = this.pos.add(this.vel);
	}
};