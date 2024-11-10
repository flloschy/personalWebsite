<script lang="ts">
	import Experience from './Experience.svelte';

	const speaking = ['German', 'English'];
	const languages = [
		'Python',
		'Javascript',
		'Typescript',
		'Java',
		'SQL',
		'HTML',
		'CSS/SCS',
                'tailwind'
		'Shell*',
		'Bash*',
		'PHP*',
		'Svelte[kit]',
		'Arduino C++',
		'C++*',
		'C*'
	];
	const operatingSystems = [
		'Windows 10/11',
		'Raspberry Pi OS',
		'Kali Linux*',
		'Ubuntu*',
		'Debian',
		'Arch Linux',
		'iOS'
	];
	const hosting = [
		'Jellyfin',
		'Uptime Kuma',
		'Next Cloud',
		'Pi-hole',
		'Vault Warden',
		'Auto-DL',
		'Code server',
		'floschy.dev',
		'immich'
	];
	const tools = [
		'Visual Studio Code',
		'Visual Studio*',
		'Git',
		'Vercel',
		'Github',
		'Virtual Box',
		'Geogebra',
		'Google Docs',
		'Paint.net',
		'Docker',
		'Nginx',
		'Namecheap',
		'Unity*',
                'Dloudflare(d)'
	];

	let showExtra = false;
</script>

<div class="verticalCenter" id="skills">
	<h1>
		Experience <h5>with...</h5>
	</h1>
	<div class="grid">
		<div class="line" />
		<div class="line" />
		<Experience bind:showExtra title="Speaking" list={speaking} />
		<Experience bind:showExtra title="Coding" list={languages} />
		<Experience bind:showExtra title="OS'ing" list={operatingSystems} />
		<Experience bind:showExtra title="Hosting" list={hosting} />
		<Experience bind:showExtra title="Using" list={tools} />
	</div>
	<small>
		*Not particular good but I do have <b>some</b> experience with it, but honestly its more of a
		buzzword than anything else<br />
		Show <input type="checkbox" bind:checked={showExtra} aria-label="extended information" />
	</small>
</div>

<style class="scss">
	h1 > h5 {
		display: inline;
	}
	small {
		text-align: center;
		margin-top: 20px;
		opacity: 0.4;
		transition:
			opacity 250ms ease-out,
			filter 100ms ease-out;
		filter: blur(1.5px);
		user-select: none;
		&:hover {
			filter: blur(0);
			opacity: 1;
		}
		& > b {
			font-weight: 400;
			font-style: italic;
			text-decoration: underline;
		}
	}
	.grid {
		display: grid;
		grid-template-columns: auto 1fr;
		row-gap: 20px;
	}
	.line {
		border: 1px solid var(--secondary);
		opacity: 0.5;
	}
</style>
