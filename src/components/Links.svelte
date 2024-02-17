<script>
	import { page } from '$app/stores';
</script>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>

<div id="links">
	<a href="/#welcome"><span class="material-symbols-outlined"> home </span></a>
	{#if $page.route.id == '/'}
		<a href="#about"><span class="material-symbols-outlined"> person </span></a>
		<a href="#projects"><span class="material-symbols-outlined"> gallery_thumbnail </span></a>
		<a href="#skills"><span class="material-symbols-outlined"> exercise </span></a>
		<a href="#services"><span class="material-symbols-outlined"> dns </span></a>
		<a href="#contact"><span class="material-symbols-outlined"> mail </span></a>
	{/if}
</div>
<div class="on" style="display:none"></div>

<style>
	div {
		position: fixed;
		top: 50%;
		left: 0;
		transform: translateY(-50%) translateX(-88%);
		z-index: 1000;
		display: flex;
		flex-direction: column;
		padding: 20px;
		transition: all 200ms 100ms ease-in-out;
		border-radius: 0 5px 5px 0;
		border-width: 0 10px 0 0;
		border-color: var(--secondary);
		border-style: solid;
		background-color: rgba(0, 0, 0, 0.25);
	}
	div:hover {
		transition: all 100ms ease-in-out;
		border-width: 0 0 0 5px;
		transform: translateY(-50%) translateX(0%);
	}
	@media (max-width: 700px) {
		div {
			flex-direction: row;
			top: 0;
			width: 100%;
			transform: none;
			border-width: 0 0 10px 0;
			justify-content: space-evenly;
			padding: 0;
			padding-top: 10px;
			border-radius: 0;
			backdrop-filter: blur(10px);
			-webkit-backdrop-filter: blur(10px);
			z-index: 10;
		}
		div:hover {
			transition: all 100ms ease-in-out;
			border-width: 0 0 10px 0;
			transform: none;
		}
		span {
			margin-right: 5px;
			margin-left: 5px;
		}
	}

	span,
	a {
		color: var(--primary);
		text-decoration: none;
		transition: scale 100ms ease-in-out;
	}
	span:hover {
		scale: 1.2;
	}
</style>
