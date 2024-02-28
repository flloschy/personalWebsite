<script lang="ts">
	export let title: string;
	export let what: string;
	export let why: string;
	export let link: string;
</script>

<p class="no-vertical-margin"><a class="c-text" href={link}>{title}</a></p>
<p class="no-vertical-margin">{what}</p>
<p class="no-vertical-margin">{why}</p>
