<script>
	import About from '../components/page/about/About.svelte';
	import Contact from '../components/page/contact/Contact.svelte';
	import Projects from '../components/page/projects/Projects.svelte';
	import Skills from '../components/page/experience/Experiences.svelte';
	import Welcome from '../components/page/welcome/Welcome.svelte';
</script>

<div class="contents">
	<div>
		<Welcome />
	</div>
	<div>
		<About />
	</div>
	<div>
		<Projects />
	</div>
	<div>
		<Skills />
	</div>
	<div>
		<Contact />
	</div>
</div>

<style lang="scss">
	.contents {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		row-gap: 25vh;
		& > div {
			min-height: 100vh;
			height: fit-content;
		}
	}
</style>
