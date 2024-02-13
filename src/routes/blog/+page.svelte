<script lang="ts">
	export let data;
</script>

<h1 id="blog">Blogs</h1>

<div class="grid">
	{#each data.n as post}
		<div class="post">
			<div class="header">
				<a href="/blog/{post.key}" class="title">{post.title}</a>
				<div class="date">{post.date.toLocaleDateString()}</div>
			</div>
			<p>{post.description}</p>
			<div class="tags">
				{#each post.categories as category}
					<div>#{category}</div>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style>
	#blog {
		width: 100%;
	}
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
	}
	@media (max-width: 700px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}

	.post {
		background-color: rgba(0, 0, 0, 0.2);
		padding: 20px;
		border-radius: 20px;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border: 1px var(--primary) solid;
	}
	.header {
		display: flex;
		justify-content: space-between;
	}
	.date {
		color: var(--accent);
	}
	.title {
		color: var(--primary);
	}
	p {
		color: var(--secondary);
	}
	.tags {
		display: flex;
		gap: 5px;
		font-size: 0.7rem;
	}
	.tags > div {
		/* background-color: rgba(0, 0, 0, 0.2); */
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.5) inset;
		border-radius: 1000px;
		padding-right: 10px;
		padding-left: 10px;
		padding-top: 5px;
		padding-bottom: 5px;
	}
</style>
