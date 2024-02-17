<script lang="ts">
	import './shikiOverwrite.css';
	import { page } from '$app/stores';

	export let data;
	const date = new Date(data.meta.date);
	const diff = new Date(Date.now() - date.getTime());

	let timeSincePublished = '';

	if (diff.getUTCFullYear() - 1970 > 0) {
		timeSincePublished = `${diff.getUTCFullYear() - 1970} years ago`;
	} else if (diff.getUTCMonth() > 0) {
		timeSincePublished = `${diff.getUTCMonth()} months ago`;
	} else if (diff.getUTCDate() > 0) {
		timeSincePublished = `${diff.getUTCDate()} days ago`;
	} else if (diff.getUTCHours() > 0) {
		timeSincePublished = `${diff.getUTCHours()} hours ago`;
	} else if (diff.getUTCMinutes() > 0) {
		timeSincePublished = `${diff.getUTCMinutes()} minutes ago`;
	} else {
		timeSincePublished = `${diff.getUTCSeconds()} seconds ago`;
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
	<a href="/blog">{'<'} back</a>
	<h1>{data.meta.title}</h1>
	<p>Published {timeSincePublished} [<small>{date.toLocaleDateString()}</small>]</p>
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
	.head > a {
		text-decoration: none;
	}
	.head > h1 {
		margin-top: 0;
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
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.5) inset;
		border-radius: 1000px;
		padding-right: 10px;
		padding-left: 10px;
		padding-top: 5px;
		padding-bottom: 5px;
		opacity: 0.8;
	}
</style>
