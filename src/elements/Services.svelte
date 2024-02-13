<script lang="ts">
	let services: { name: string; url: string; src: string }[] = [
		{ name: 'Vaultwarden', url: 'warden.floschy.me', src: 'github.com/dani-garcia/vaultwarden' },
		{ name: 'Nextcloud', url: 'cloud.floschy.me', src: 'nextcloud.com' },
		{ name: 'Jellyfin', url: 'jellyfin.floschy.me', src: 'jellyfin.org' },
		{ name: 'Autodl', url: 'dl.floschy.me', src: 'github.com/flloschy/auto-dl' },
		{ name: 'Kuma', url: 'status.floschy.me', src: 'github.com/louislam/uptime-kuma' },
		{ name: 'Pihole', url: 'pihole.floschy.me/admin', src: 'pi-hole.net' }
	];
</script>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>
<div id="servicess">
	<h1 id="services">Services</h1>
	<div class="grid">
		{#each services as service, i}
			{#if i % 2 == 0}
				<a target="_blank" href="https://{service.url}"
					><span class="material-symbols-outlined"> open_in_new </span></a
				>
				<a target="_blank" href="https://{service.src}">{service.name}</a>
				<div />
			{:else}
				<a target="_blank" href="https://{service.src}" style="text-align: right;">{service.name}</a
				>
				<a target="_blank" href="https://{service.url}"
					><span class="material-symbols-outlined"> open_in_new </span></a
				>
			{/if}
		{/each}
	</div>
</div>

<style>
	#services {
		padding-top: 25%;
	}
	#servicess {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		padding-top: 70vh;
		margin-bottom: 25%;
	}
	.grid {
		display: grid;
		grid-template-columns: auto 1fr 1fr 1fr auto;
		gap: 10px;
	}

	span {
		margin-left: 20px;
	}
</style>
