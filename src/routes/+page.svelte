<script lang="ts">
	import About from '../components/About.svelte';
	import Contact from '../components/Contact.svelte';
	import Projects from '../components/Projects.svelte';
	import Services from '../components/Services.svelte';
	import Skills from '../components/Skills.svelte';
	import Welcome from '../components/Welcome.svelte';
</script>

<svelte:head>
	<title>Floschy.me # Home</title>
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Floschy.me # Home" />
	<meta
		property="og:description"
		content="I'm Floschy, a hobby developer and IT student from Germany. Currently invested in web development using SvelteKit. Also Interested in game development although I don't make games myself"
	/>
	<meta
		name="description"
		content="I'm Floschy, a hobby developer and IT student from Germany. Currently invested in web development using SvelteKit. Also Interested in game development although I don't make games myself"
	/>
	<meta property="og:url" content="https://floschy.me/" />

</svelte:head>

<Welcome />
<About />
<div class="space" />
<Projects />
<div class="space" />
<div class="space" />
<Skills />
<div class="space" />
<Services />
<div class="space" />
<Contact />

<style>
	.space {
		height: 100%;
	}
</style>
