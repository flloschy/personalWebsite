<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		let mouse: MouseEvent;
		let last = Date.now();
		const canvas = document.getElementById('background') as HTMLCanvasElement;
		const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
		interface particle {
			x: number;
			y: number;
			time: number;
			velocity: {
				x: number;
				y: number;
			};
			color: string;
			style: number; // 0=square fill; 1=square stroke; 2=circle fill; 3=circle stroke
			delete: boolean;
		}
		let particles: particle[] = [];

		function pushParticle() {
			particles.push({
				x: mouse.clientX + Math.random() * 40 - 20,
				y: mouse.clientY + Math.random() * 40 - 20,
				time: last,
				velocity: {
					x: mouse.movementX * 4 + Math.random() * 200 - 100,
					y: mouse.movementY * 4 + Math.random() * 200 - 100
				},
				color: getComputedStyle(document.body).getPropertyValue(
					['--accent', '--primary', '--secondary', '--accent'][Math.floor(Math.random() * 4)]
				),
				style: Math.floor(Math.random() * 3),
				delete: false
			}) == 1
				? requestAnimationFrame(draw)
				: null;
		}

		window.addEventListener('mousemove', (e) => {
			if (!mouse) {
				mouse = e;
			}

			const distance = Math.sqrt(
				(mouse.clientX - e.clientX) ** 2 + (mouse.clientY - e.clientY) ** 2
			);
			if (distance > 80 || Date.now() - last > 1000) {
				mouse = e;
				last = Date.now();
				pushParticle();
			}
		});

		function resetSize() {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		}

		const pi2 = Math.PI * 2;
		let frames = 0;
		function draw() {
			resetSize();

			const now = Date.now();

			particles.forEach((particle) => {
				if (particle.delete) return;

				const scale = -0.002 * (now - particle.time) + 1;

				if (scale <= 0) {
					particle.delete = true;
					return;
				}

				const x = particle.x + particle.velocity.x * (1 - scale);
				const y = particle.y + particle.velocity.y * (1 - scale);
				const size = scale * 10 * (particle.style <= 1 ? 2 : 1);

				ctx.beginPath();
				// 0=square fill; 1=square stroke; 2=circle fill; 3=circle stroke
				switch (particle.style) {
					case 0:
						ctx.rect(x, y, size, size);
						ctx.fillStyle = particle.color;
						ctx.fill();
						return;
					case 1:
						ctx.rect(x, y, size, size);
						ctx.strokeStyle = particle.color;
						ctx.stroke();
						return;
					case 2:
						ctx.arc(x, y, size, 0, pi2);
						ctx.fillStyle = particle.color;
						ctx.fill();
						return;
					case 3:
						ctx.arc(x, y, size, 0, pi2);
						ctx.strokeStyle = particle.color;
						ctx.stroke();
						return;
				}
			});

			if (frames++ > 100) {
				frames = 0;
				particles = particles.filter((particle) => !particle.delete);
			}

			if (particles.length != 0) requestAnimationFrame(draw);
		}
	});
</script>

<canvas id="background" class="full-size" />

<style lang="scss">
	canvas {
		background-color: var(--background);
		position: fixed;
		z-index: -1;
	}
</style>
