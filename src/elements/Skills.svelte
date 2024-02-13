<script lang="ts">
	const skills = [
		{ name: 'Python', level: 95 },
		{ name: 'HTML', level: 90 },
		{ name: 'Svelte', level: 80 },
		{ name: 'Css', level: 75 },
		{ name: 'js/ts', level: 70 },
		{ name: 'Linux', level: 60 },
		{ name: 'Java', level: 30 }
	].sort((a, b) => b.level - a.level);
</script>

<div id="skillss">
	<h1 id="skills">Skills</h1>
	<div class="skills">
		{#each skills as skill}
			<div class="name" style="opacity: {skill.level / 2 + 50}%;">{skill.name}</div>
			<div class="background">
				<div class="wrapper" style="width: {skill.level}%;opacity: {skill.level / 2 + 50}%;">
					<div class="bar" />
				</div>
			</div>
			<div class="name num" style="opacity: {skill.level / 2 + 50}%;">{skill.level}</div>
		{/each}
	</div>
</div>

<style>
	.background {
		width: 100%;
		background-color: rgba(0, 0, 0, 0.3);
		border-radius: 50px;
		/* opacity: 0.5; */
		height: 50%;
		box-shadow: 0 0 5px rgba(0, 0, 0, 1) inset;
	}
	#skills {
		padding-top: 25%;
	}
	#skillss {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-bottom: 25%;
		height: 100%;
		padding-top: 60vh;
	}
	.skills {
		width: 80%;
		display: grid;
		grid-template-columns: auto 1fr auto;
		gap: 0px 10px;
		align-items: center;
		text-align: right;
	}
	@media (max-width: 700px) {
		.skills {
			display: flex;
			flex-direction: column;
			align-content: stretch;
			justify-content: stretch;
		}
		.background {
			height: 20px;
		}
		.num {
			display: none;
		}
	}

	.name {
		/* opacity: 0.5; */
		color: var(--primary);
		text-shadow: 0 0 5px black;
	}

	.wrapper {
		height: 100%;
		align-items: center;
		display: flex;
		/* opacity: 0.5; */
	}
	.bar {
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5) inset;
		border-radius: 50px;
		height: 0%;
		background-image: repeating-linear-gradient(
			45deg,
			var(--primary),
			var(--primary) 10px,
			var(--secondary) 10px,
			var(--secondary) 20px
		);
		animation: reveal ease-in-out 1ms;
		animation-timeline: view();
	}
	@keyframes reveal {
		0% {
			width: 20px;
			height: 0;
		}
		40% {
			height: 100%;
			width: 98%;
		}
		45% {
			width: 100%;
		}
		65% {
			width: 100%;
		}
		70% {
			width: 98%;
			height: 100%;
		}
		100% {
			height: 0;
			width: 20px;
		}
	}
</style>
