<script lang="ts">
	import { onMount } from 'svelte';

	export let theme: string;
	export let hidden:boolean = false;

	let background: string = '';
	let primary: string = '';
	let secondary: string = '';
	let accent: string = '';
	let text: string = '';

	const getColor = (id: number) => {
		const element = document.getElementById(`theme-${theme}-${id}`) as HTMLDivElement;
		const style = element.computedStyleMap();
		const bg = style.get('background-color') as CSSStyleValue;
		return (
			'#' +
			bg
				.toString()
				.replace('rgb(', '')
				.replace(')', '')
				.split(', ')
				.map((channel) => parseInt(channel).toString(16).toUpperCase().padStart(2, '0'))
				.join('')
		);
	};

	onMount(() => {
		background = getColor(1);
		primary = getColor(2);
		secondary = getColor(3);
		accent = getColor(4);
		text = getColor(5);
	});
</script>

<div id="theme-{theme}" class="neumorphism" class:hidden={hidden}>
	<button
		class="no-vertical-margin"
		on:click={() => {
			document.documentElement.dataset.theme = theme;
			localStorage.setItem('theme', theme);
		}}><h1 class="no-vertical-margin">{theme}</h1></button
	>
	<div data-theme={theme}>
		<div id="theme-{theme}-1" style="background-color: var(--background);">{background}</div>
		<div id="theme-{theme}-2" style="background-color: var(--primary);">{primary}</div>
		<div id="theme-{theme}-3" style="background-color: var(--secondary);">{secondary}</div>
		<div id="theme-{theme}-4" style="background-color: var(--accent);">{accent}</div>
		<div id="theme-{theme}-5" style="background-color: var(--text);">{text}</div>
	</div>
</div>

<style lang="scss">
	.hidden {
		opacity: 0.05;
		transition: opacity 300ms ease-in-out;
	}
	.hidden:hover {
		opacity: 1;
	}
	button {
		cursor: pointer;
		background-color: transparent;
		outline: none;
		border: none;
		color: var(--text);
	}
	div {
		// border: var(--primary) 2px solid;
		border-radius: 10px;
		box-sizing: border-box;
		& > div {
			display: flex;
			flex-direction: row;
			column-gap: 10px;
			width: 100%;
			padding: 10px;
			border: none;
			& > div {
				cursor: zoom-in;
				padding: 10px;
				text-align: center;
				display: block;
				color: transparent;
				transition: all 250ms ease-in-out;

				&:hover {
					transform: scale(2);
					background-color: var(--background) !important;
					color: var(--text);
				}
			}
		}
	}
</style>
