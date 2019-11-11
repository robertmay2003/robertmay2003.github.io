var Ball = class {
	constructor(parent) {
		// Upwards bias
		this.vel = new Vector2(
			 parent.velocity.x - (Math.random() * parent.velocity.x / 5), parent.velocity.y - (Math.random() * parent.velocity.y / 5)
		);

		// Spawn at bottom
		this.pos = new Vector2(
			Math.random() * parent.width,
			parent.height + 150
		);
		this.size = (parent.maxRadius - parent.minRadius) * Math.random() + parent.minRadius;
		this.width = parent.width;
		this.height = parent.height;
		this.pointer = parent.pointer;

		this.ignorePointer = Math.random() < 0.25;
	}

	move() {
		// ---- interact with pointer ----
		if (!this.ignorePointer) {
			var dx = this.pointer.pos.x - this.pos.x;
			var dy = this.pointer.pos.y - this.pos.y;
			this.pos = this.pos.add(
				new Vector2(
					1 - dy / 200,
					1 - dx / 200
				)
			);
		}

		// ---- velocity ----
		this.pos = this.pos.add(this.vel);
	}

	isOutOfBounds() {
		return (
			(this.pos.x >= window.innerWidth + (this.size * 2) + 200) ||
			(this.pos.x <= -2 * this.size - 200) ||
			(this.pos.y >= window.innerHeight + (this.size * 2) + 200) ||
			(this.pos.y <= -2 * this.size - 200)
		);
	}
};