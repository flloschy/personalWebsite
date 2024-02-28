<script lang="ts">
	const times = [
		{
			time: 2019,
			text: `
                Here my journey started, while on holiday I got interested in programming a discord bot with
		        Javascript. After watching a ton of tutorials I got back home and realized that the videos I
		        watched were outdated... So after less than a week, I lost interest for the foreseeable future.
            `
		},
		{
			time: 2020,
			text: `
                During the pandemic year I got started becoming a dev. Starting with Python to help myself with
                my schoolwork, with simple stuff like a calculator for Pythagoras theorem whilst in
                homeschooling.
            `
		},
		{
			time: 2021,
			text: `
                Around the middle of the year, I started learning web development with plain HTML, CSS and
        		Javascript
            `
		},
		{
			time: 2022,
			text: `
                I finally got myself a Raspberry Pi 4 as my home server and thus got a great chance to learn
                about Linux and system administration. Additionally, I finished Secondary school and started my
                IT-focused full-time vocational school.
            `
		},
		{
			time: 2023,
			text: `
                After a year of not showing interest in web development, I got back into it and started learning
                SvelteKit as well as Typescript!
            `
		},
		{
			time: 2024,
			text: `
                After a year of not showing interest in web development, I got back into it and started learning
                SvelteKit as well as Typescript!
            `
		}
	];
</script>

<div>
	<h1>Timeline</h1>
	<div>
		{#each times as time}
			<date
				><div class="dot" />
				{time.time}</date
			>
			<p class="no-vertical-margin">{time.text}</p>
		{/each}
		<date>
			<div class="dot" />
			Info
		</date>
		<p class="no-vertical-margin" style="margin-bottom: 0;">
			<small> (This timeline might vary from the actually times but its close enough) </small>
		</p>
	</div>
</div>

<style lang="scss">
	div > div {
		padding-left: 10px;
		border-width: 0;
		border-left-width: 2px;
		border-style: solid;
		border-color: var(--primary);
	}
	p {
		margin-bottom: 2rem;
	}
	date {
		position: relative;
		color: var(--secondary);
	}
	.dot {
		border: none;
		margin: 0;
		padding: 0;
		position: absolute;
		top: 10px;
		left: -16px;
		background-color: var(--primary);
		height: 10px;
		aspect-ratio: 1;
		border-radius: 50%;
	}
	small {
		opacity: 0.8;
	}
</style>
