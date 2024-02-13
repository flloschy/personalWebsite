<script lang="ts">
	import { onMount } from 'svelte';
	import { themes } from '../routes/themes';

	onMount(() => {
		let theme = localStorage.getItem('theme');
		document.documentElement.dataset.theme =
			theme ?? themes[Math.floor(Math.random() * themes.length - 2)];
	});
</script>
