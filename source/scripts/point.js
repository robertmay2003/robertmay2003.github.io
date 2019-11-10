var Point = class {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	add(p) {
		return new Point(this.x + p.x, this.y + p.y);
	}
};