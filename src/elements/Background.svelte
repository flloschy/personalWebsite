<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		let mouse = { x: 0, y: 0, l: { x: 0, y: 0 }, t: Date.now(), m: { x: 0, y: 0 } };
		const canvas = document.getElementById('background') as HTMLCanvasElement;
		const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

		interface point {
			x: number; // pos x
			y: number; // pox y
			vx: number; // velocity x
			vy: number; // velocity y
			r: number; // radius
			c: string; // color
			t: number; // time at spawn,
			ty: boolean; // type (square, circle)
			s: boolean; // stroke (true = yes, false = fill)
			d: boolean; // dead
		}
		let points: point[] = [];

		const makeParticle = (random: boolean = false) => {
			if (
				points.push({
					x: mouse.x + (random ? 100 * Math.random() - 50 : 50 * Math.random() - 25),
					y: mouse.y + (random ? 100 * Math.random() - 50 : 50 * Math.random() - 25),
					vx: mouse.m.x * 2,
					vy: mouse.m.y * 2,
					r: 10,
					// c: `hsl(${Math.floor(360 * Math.random())},40%, 50%)`,
					c: getComputedStyle(document.body).getPropertyValue(
						['--accent', '--primary', '--secondary', '--accent'][Math.floor(Math.random() * 4)]
					),
					t: Date.now(),
					ty: Math.random() >= 0.5,
					s: Math.random() >= 0.7,
					d: false
				}) == 1
			) {
				requestAnimationFrame(draw);
			}
		};

		let rapidSpawnId = 0;

		const handleMouseMove = (e: MouseEvent) => {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
			mouse.m.x = e.movementX;
			mouse.m.y = e.movementY;
			if (e.buttons == 0) clearInterval(rapidSpawnId);
			if (Date.now() - mouse.t > 1000) {
				mouse.l.x = mouse.x;
				mouse.l.y = mouse.y;
				mouse.t = Date.now();
				makeParticle(true);
			} else if (Math.sqrt((mouse.x - mouse.l.x) ** 2 + (mouse.y - mouse.l.y) ** 2) > 100) {
				mouse.l.x = mouse.x;
				mouse.l.y = mouse.y;
				makeParticle(true);
			}
		};

		const handleTouchMove = (e: TouchEvent) => {
			mouse.x = e.touches[0].clientX;
			mouse.y = e.touches[0].clientY;

			if (Date.now() - mouse.t > 100) {
				mouse.l.x = mouse.x;
				mouse.l.y = mouse.y;
				mouse.t = Date.now();
				makeParticle(true);
			} else if (Math.sqrt((mouse.x - mouse.l.x) ** 2 + (mouse.y - mouse.l.y) ** 2) > 60) {
				mouse.l.x = mouse.x;
				mouse.l.y = mouse.y;
				makeParticle(true);
			}
		};

		const handleTouchStart = () => {
			for (let i = 0; i < 5; i++) {
				makeParticle(true);
			}
		};

		const handleMouseDown = () => {
			rapidSpawnId = setInterval(makeParticle, 50);
		};

		const handleMouseUp = () => {
			clearInterval(rapidSpawnId);
		};

		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('touchmove', handleTouchMove);
		document.addEventListener('touchstart', handleTouchStart);
		document.addEventListener('mousedown', handleMouseDown);
		document.addEventListener('mouseup', handleMouseUp);

		const TWO_PI = Math.PI * 2;
		let frameCount = 0;

		const draw = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			let now = Date.now();
			points.forEach((point) => {
				point.r = 10 - (now - point.t) / 50;
				if (point.r <= 0) {
					point.d = true;
					return;
				}
                
                const x = point.x - point.vx * (1-(now-point.t)/500)
                const y = point.y - point.vy * (1-(now-point.t)/500)
                
				ctx.beginPath();
				if (point.ty) {
					ctx.arc(x , y, point.r, 0, TWO_PI);
				} else {
					let r = point.r * 2;
					ctx.rect(x , y, r, r);
				}

				if (point.s) {
					ctx.strokeStyle = point.c;
					ctx.stroke();
				} else {
					ctx.fillStyle = point.c;
					ctx.fill();
				}

				// point.x += point.vx;
				// point.y += point.vy;
			});

			if (++frameCount % 10 === 0) {
				points = points.filter((point) => !point.d);
			}

			if (points.length > 0) requestAnimationFrame(draw);
		};
		draw();
	});
</script>

<canvas id="background" />

<style>
	canvas {
		z-index: -999;
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
	}
</style>
