<script lang="ts">
	export let data;
</script>

<div>
	<h1>Blogs</h1>

	<div class="grid">
		{#each data.n as post}
			<div class="post neumorphism">
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
		// backdrop-filter: blur(10px);

	}

	.head {
		font-size: 1.333rem;
		display: flex;
		width: 100%;
		justify-content: space-between;
	}
</style>
