<script lang="ts">
	import { page } from '$app/stores';

	export let data;
	const date = new Date(data.meta.date);
	const diff = new Date(Date.now() - date.getTime());

	let howlongago = '';

	if (diff.getUTCFullYear() - 1970 > 0) {
		howlongago = `${diff.getUTCFullYear() - 1970} years ago`;
	} else if (diff.getUTCMonth() > 0) {
		howlongago = `${diff.getUTCMonth()} months ago`;
	} else if (diff.getUTCDate() > 0) {
		howlongago = `${diff.getUTCDate()} days ago`;
	} else if (diff.getUTCHours() > 0) {
		howlongago = `${diff.getUTCHours()} hours ago`;
	} else if (diff.getUTCMinutes() > 0) {
		howlongago = `${diff.getUTCMinutes()} minutes ago`;
	} else {
		howlongago = `${diff.getUTCSeconds()} seconds ago`;
	}
</script>

<svelte:head>
	<title>Floschy.me # {data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta name="description" content={data.meta.description} />
	<meta property="og:url" content={$page.url.toString()} />
	<meta property="article:published_time" content={date.toISOString()} />
	<meta property="article:tag" content={data.meta.categories.join(', ')} />
	<meta property="article:author" content="Floschy" />
</svelte:head>

<div class="head">
	<h1>{data.meta.title}</h1>
	<p>Pusblished {howlongago} [<small>{date.toLocaleDateString()}</small>]</p>
	<div class="tags">
		{#each data.meta.categories as category}
			<div>#{category}</div>
		{/each}
	</div>
</div>
<svelte:component this={data.content} />

<style>
	.head {
		border-width: 0 0 1px 0;
		border-color: var(--accent);
		border-style: solid;
		border-radius: 4px;
	}
	.head > h1 {
		margin-bottom: 0;
	}
	.head > p {
		margin-top: 0;
		color: var(--text);
		opacity: 0.9;
	}
	.tags {
		display: flex;
		gap: 5px;
		font-size: 0.7rem;
		margin-bottom: 30px;
	}
	.tags > div {
		/* background-color: rgba(0, 0, 0, 0.2); */
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.5) inset;
		border-radius: 1000px;
		padding-right: 10px;
		padding-left: 10px;
		padding-top: 5px;
		padding-bottom: 5px;
		opacity: 0.8;
	}
</style>
