var Vector2 = class {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	add(p) {
		return new Vector2(this.x + p.x, this.y + p.y);
	}
};