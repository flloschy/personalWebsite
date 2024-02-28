<script lang="ts">
	export let title: string;
	export let list: string[];
	export let showExtra: boolean;
</script>

<h4 class="no-vertical-margin">{title}:</h4>
<div class="tags">
	{#each list as item}
		{#if item.endsWith('*') && showExtra}
			<div>{item}</div>
		{:else if !item.endsWith('*')}
			<div>{item}</div>
		{/if}
	{/each}
</div>

<div class="line" />
<div class="line" />

<style>
	h4 {
		margin-right: 20px;
		text-align: left;
		align-self: start;
	}
	.tags {
		justify-content: left;
	}

	.line {
		border: 1px solid var(--secondary);
		opacity: 0.5;
	}
</style>
