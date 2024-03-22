<script lang="ts">
	import { goto } from '$app/navigation';
	import Theme from '../../components/page/theme/Theme.svelte';
	import { themes } from '../themes';
</script>

<div>
	<h1>Themes</h1>
	{#each themes as name}
		<Theme theme={name} />
	{/each}
	<button
		on:click={() => {
			localStorage.removeItem('theme');
			goto("/")
		}}
		><h1>Activate Random</h1>
	</button>
</div>

<style lang="scss">
	div {
		display: flex;
		row-gap: 10px;
		flex-direction: column;
	}
	button {
		background-color: transparent;
		outline: none;
		border: none;
		border-radius: 10px;
		& > h1 {
			color: var(--primary);
		}
		&:hover > h1 {
			color: var(--secondary);
		}
		&:active > h1 {
			color: var(--accent);
		}
	}
</style>
