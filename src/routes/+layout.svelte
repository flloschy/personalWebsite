<script lang="ts">
	import './global.css';
	import './themes.css';
	import Background from '../elements/Background.svelte';
	import Links from '../elements/Links.svelte';
	import Footer from '../elements/Footer.svelte';
	import ThemeLoader from '../elements/ThemeLoader.svelte';
</script>

<ThemeLoader />
<div class="container">
	<Background />
	<Links />
	<div id="content">
		<slot />
	</div>
	<Footer />
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		margin-left: 15px;
	}

	#content {
		flex: 1;
		max-width: 1000px;
		width: 100%;
		margin: auto;
		padding: 10px;
		padding-bottom: 0;
	}
</style>
