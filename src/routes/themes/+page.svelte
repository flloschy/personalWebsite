<script>
	import { onMount } from 'svelte';
	import { themes } from '../themes';

	let theme = 'dark';
	onMount(() => {
		theme = localStorage.getItem('theme') ?? themes[Math.floor(Math.random() * themes.length - 2)];
	});
</script>

<h1 id="themes">Themes</h1>

<div class="bg">
	{#each themes as current}
		<div class="option">
			<div>
				<input
					type="radio"
					name="theme"
					checked={theme == current}
					on:click={() => {
						theme = current;
						document.documentElement.dataset.theme = theme;
						localStorage.setItem('theme', current);
					}}
				/>
				<h5>{current}</h5>
			</div>
			<div class="showcase" data-theme={current}>
				<div class="block" style="background-color: var(--background);" />
				<div class="block" style="background-color: var(--primary);" />
				<div class="block" style="background-color: var(--secondary);" />
				<div class="block" style="background-color: var(--text);" />
				<div class="block" style="background-color: var(--accent);" />
			</div>
		</div>
	{/each}
</div>

<style>
	h5 {
		display: inline;
		width: fit-content;
	}

	.showcase {
		display: flex;
		flex-direction: row;
	}
	.block {
		width: calc(100% / 5);
		padding: 20px;
		transition: all 100ms ease-in-out;
	}
	.block:hover {
		z-index: 99;
		filter: saturate(1);
		opacity: 1;
		scale: 1.5;
	}
	.showcase:hover .block:not(:hover) {
		filter: saturate(0.5);
		opacity: 0.8;
	}
	.option {
		padding: 20px;
	}
	.bg {
		padding: 20px;
		background-color: rgba(0, 0, 0, 0.3);
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5) inset;
		border-radius: 10px;
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	@media (max-width: 700px) {
		.bg {
			grid-template-columns: 1fr;
		}
	}
</style>
