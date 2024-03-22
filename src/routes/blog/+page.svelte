<script lang="ts">
	export let data;
</script>

<div>
	<h1>Blogs</h1>

	<div class="grid">
		{#each data.n as post}
			<div class="post">
				<div class="head">
					<a href="/blog/{post.key}">{post.title}</a>
					<p class="no-vertical-margin">{post.created.toLocaleDateString()}</p>
				</div>
				<div class="tags">
					{#each post.categories as tag}
						<div>{tag}</div>
					{/each}
				</div>
				<p>
					{post.description}
				</p>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;
		gap: 20px;
	}

	.post {
		// border-width: 2px;
		// border-color: var(--primary);
		// border-style: solid;
		padding: 20px;
		border-radius: 10px;
		backdrop-filter: blur(10px);

		background-image: linear-gradient(70deg, rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.1));
		box-shadow: 10px 10px 30px rgba(255, 255, 255, 0.116) inset,
					-10px -10px 30px rgb(0, 0, 0) inset;
	}

	.head {
		font-size: 1.333rem;
		display: flex;
		width: 100%;
		justify-content: space-between;
	}
</style>
