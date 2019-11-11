var particleSystems = [];
var canvas;
var ctx;
var pointer = {
	active: true,
	pos: {
		x: window.innerWidth/2,
		y: window.innerHeight/2
	}
};
var colorSets = [
	[
		'#1b44ff',
		'#9effff',
		'#ffa3c7',
		'#ffffff'
	],
	[
		'#ffde15',
		'#4b4b4b',
		'#ff3daf',
		'#3b3b3b'
	],
	[
		'#24ffeb',
		'#59aaff',
		'#3d51ff',
		'#f2ebff'
	],
	[
		'#ff7c6e',
		'#ff4b66',
		'#ff2f27',
		'#ffebf2'
	]
];
var colorSet = Math.floor(Math.random() * colorSets.length);

// ==== main loop ====
function run() {
	ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

	// fill background
	ctx.fillStyle = colorSets[colorSet][3];
	ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

	for (var ps of particleSystems) {
		ps.process(ctx);
	}

	setTimeout(run, 1000/60)
}

// ---- canvas ----
window.onresize = ()=>{
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
};

// ---- pointer ----
window.onmousemove = (e)=>{
	pointer.pos.x = e.clientX;
	pointer.pos.y = e.clientY;
};

// ---- create Layers----
particleSystems.push(new ParticleSystem(5, colorSets[colorSet][0], 70, 30, new Vector2(0, -2), pointer));
particleSystems.push(new ParticleSystem(4, colorSets[colorSet][1], 160, 120, new Vector2(0, -1.8), pointer));
particleSystems.push(new ParticleSystem(3, colorSets[colorSet][2], 280, 180, new Vector2(0, -1.3), pointer));

// ---- start engine ----
window.requestAnimationFrame(()=>{
	canvas = document.getElementById('particlesCanvas');
	ctx = canvas.getContext('2d');

	canvas.style.webkitFilter = 'blur(10px)';
	canvas.style.filter = 'blur(10px)';

	window.onresize();

	run()
});