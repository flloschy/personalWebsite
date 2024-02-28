<script lang="ts">
	import { onMount } from 'svelte';

	let text: string = 'Pulling from github';
	onMount(async () => {
		await fetch('https://raw.githubusercontent.com/flloschy/personalWebsite/main/LICENSE').then(
			async (v) => await v.text().then((t) => (text = t))
		);
	});
</script>

<div>
	<h1>License</h1>
	<pre style="text-align:center;">{text}</pre>
</div>
