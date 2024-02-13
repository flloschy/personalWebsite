<script lang="ts">
	const timeline = [
		{
			time: '2019',
			event:
				'Here my journey started, while on holiday I got interested in programming a discord bot with Javascript. After watching a ton of tutorials I got back home and realized that the videos I watched were outdated... So after less than a week, I lost interest for the foreseeable future.'
		},
		{
			time: '~2020',
			event:
				'During the pandemic year I got started becoming a dev. Starting with Python to help myself with my schoolwork, with simple stuff like a calculator for Pythagoras theorem whilst in homeschooling.'
		},
		{
			time: '2021',
			event:
				'Around the middle of the year, I started learning web development with plain HTML, CSS and Javascript'
		},
		{
			time: '2022',
			event:
				'I finally got myself a Raspberry Pi 4 as my home server and thus got a great chance to learn about Linux and system administration. Additionally, I finished Secondary school and started my IT-focused full-time vocational school.'
		},
		{
			time: '2023',
			event:
				'After a year of not showing interest in web development, I got back into it and started learning SvelteKit as well as Typescript!'
		},
		{
			time: '2024',
			event:
				'At the beginning of the year I reinstalled my whole server, from scratch, without help, without tutorials.'
		}
	];
</script>

<svelte:head>
	<title>Floschy.me # Timeline</title>
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Floschy.me # Timeline" />
	<meta
		property="og:description"
		content="A small, down to the point timeline of my life regarding programming"
	/>
	<meta
		name="description"
		content="A small, down to the point timeline of my life regarding programming"
	/>
	<meta property="og:url" content="https://floschy.me/timeline" />
</svelte:head>

<h1 id="timeline">Timeline</h1>
<p>A small, down-to-the-point timeline of my life regarding programming</p>
<div class="grid">
	{#each timeline as time}
		<div class="date">{time.time}</div>
		<div class="wrapper">
			<div class="line" />
			<div class="circle" />
			<div class="line" />
		</div>
		<div class="text">{time.event}</div>
	{/each}
</div>
<small>(This timeline might vary from the actually times but its close enough)</small>

<style>
	small {
		opacity: 0.5;
	}
	p {
		margin-bottom: 0;
	}
	.grid {
		margin-top: 20px;
		margin-bottom: 20px;
		display: grid;
		grid-template-columns: auto 10px 1fr;
		gap: 0px 10px;
		align-items: center;
	}

	.date {
		color: var(--primary);
		text-align: right;
	}
	.wrapper {
		height: 100%;
		width: 100%;
		display: grid;
		grid-template-rows: 1fr auto 1fr;
		justify-items: center;
	}
	.line {
		background-color: var(--secondary);
		width: 2px;
		height: 100%;
	}
	.text {
		margin-top: 20px;
		margin-bottom: 20px;
	}
	.circle {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: var(--primary);
	}
</style>
