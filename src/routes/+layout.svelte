<script lang="ts">
	// import { onMount } from 'svelte';
	import Background from '../components/Background.svelte';
	import Footer from '../components/Footer.svelte';
	import './themes.scss';
	import './global.scss';
	import { randomThemes } from './themes';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	// onMount(() => {

	if (browser) {
		let theme = localStorage.getItem('theme') ?? randomThemes[Math.floor(Math.random() * randomThemes.length)];
		document.documentElement.dataset.theme = theme;
	}
	// });
</script>

<svelte:head>
	<title
		>{'floschy.' +
			($page.url.pathname.split('/')[1] == '' ? 'home' : $page.url.pathname.split('/')[1])}</title
	>
	<meta property="og:locale" content="en_US" />
	<meta property="og:url" content={$page.url.toString()} />
	<meta property="og:image" content="https://floschy.me/cow_small.webp" />
	<meta name="description" content="Personal/Portfolio website" />
</svelte:head>

<Background />
<div class="layout">
	<slot />
	<Footer />
</div>

<style lang="scss">
	.layout {
		display: flex;
		flex-direction: column;
		min-height: 100%;
		max-width: 1000px;
		padding-left: 40px;
		padding-right: 50px;
		row-gap: 25vh;
		margin: auto;
		justify-content: space-between;
	}
</style>
