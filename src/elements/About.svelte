<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const wrapper = document.getElementById('wrapper') as HTMLDivElement;
		const icon = document.getElementById('icon') as HTMLDivElement;
		wrapper.addEventListener('mousemove', (e) => {
			const x =
				e.clientX - icon.getBoundingClientRect().left - icon.getBoundingClientRect().width / 2;
			const y =
				e.clientY - icon.getBoundingClientRect().top - icon.getBoundingClientRect().height / 2;
			const r = 100 - Math.sqrt(x ** 2 + y ** 2);

			icon.style.transitionDuration = '0s';
			icon.style.transform = `rotateX(${-y / 3}deg) rotateY(${x / 3}deg) scale(${1 + r / 300}) translate(${x / 10}px, ${y / 10}px)`;
			icon.style.backgroundPosition = `${50 - -x / 2.5}% ${50 - -y / 2.5}%`;
			// icon.animate(
			// 	[
			// 		{
			// 			transform: `rotateX(${-y / 3}deg) rotateY(${x / 3}deg) scale(${1 + r / 100 / 3}) translate(${x / 10}px, ${y / 10}px)`,
			// 			backgroundPosition: `${50 - (-x / 2.5)}% ${50 - (-y / 2.5)}%`
			// 		}
			// 	],
			// 	{
			// 		duration: 5000,
			// 		fill: 'forwards',
			// 		easing: 'ease-out'
			// 	}
			// );
		});

		wrapper.addEventListener('mouseleave', () => {
			icon.style.transitionDuration = '1s';
			icon.style.transform = `rotateX(0deg) rotateY(0deg) scale(1) translate(0px, 0px)`;
			icon.style.backgroundPosition = `50% 50%`;
		});
	});
</script>

<div id="about">
	<div id="wrapper">
		<div id="icon" />
	</div>
	<ul class="text">
		<li>I'm Floschy, a hobby developer and IT student from Germany.</li>
		<li>
			Currently invested in web development using <a href="https://svelte.dev">SvelteKit</a>.
		</li>
		<li>Interested in game development although I don't make games myself</li>
	</ul>
</div>

<style>
	#about {
		/* width: 100%;
		margin: auto;
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 20px;
        padding-top: 25%; */
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}

	#wrapper {
		perspective: 1000px; /* Add perspective transform */
		user-select: none;
	}

	#icon {
		box-shadow:
			0 0 15px var(--text) inset,
			0 0 20px black,
			0 0 10px black inset;
		width: 10rem;
		height: 10rem; /* Set a fixed height */
		background-image: url('/cow_small.webp');
		/* zoom into the background */
		background-size: 150% 150%;
		background-position: 50% 50%;
		border-radius: 50%;
		outline: 3px var(--text) solid;
		user-select: none;
		cursor: grabbing;
		transition-timing-function: cubic-bezier(0.5, 0.5, 0, 0);
	}

	@media (max-width: 700px) {
		#icon {
			cursor: pointer;
			pointer-events: none;
		}
		#about {
			flex-direction: column;
		}
	}
	.text {
		height: fit-content;
		align-self: center;
	}
</style>
