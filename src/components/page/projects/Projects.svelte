<script lang="ts">
	const projects = [
		{
			name: 'Jambo',
			link: 'cowoding-jams/jambo',
			tags: ['discord bot'],
			languages: ['typescript'],
			description:
				'Jambo is a discord bot to manage polls, roles, activity tracking, reminders, idea-proposals and Jams for a private Server all about Jams and challenging projects. The bot is written in typescript and runs on node.js, the chosen database is enmap which itself uses sqlite. The whole code base is custom made and allows for easy addition of features like commands or event handling.'
		},
		{
			name: 'Auto-dl',
			link: 'flloschy/auto-dl',
			tags: ['website', 'frontend', 'backend', 'sveltekit'],
			languages: ['typescript', 'python', 'html', 'css'],
			description:
				"Auto-dl is an automatic downloader with an web interface using svelte. You can add channels or single videos to download them automatically or manually. You can also create seasons and let videos be downloaded into them using regex. The file structure is made to work with jellyfin's show-naming-convention."
		},
		{
			name: 'Website',
			link: 'flloschy/personalWebsite',
			tags: ['website', 'frontend', 'backend', 'sveltekit'],
			languages: ['typescript', 'html', 'scss'],
			description:
				'Well... THIS website! Using SvelteKit and written typescript, html and completely custom scss. Made as a fun side projects and the intend to be my portfolio for anyone who cares enough to visit here. You can also select one of a few themes or get yourself surprised with a random theme on every page load. Additionally there is a blog page which just reads Markdown files and converts them to HTML, just in case I want to blog about anything.'
		},
		{
			name: 'Jams',
			link: 'flloschy/jams',
			tags: ['Jams', 'Fun', 'variety'],
			languages: ['python', 'typescript'],
			description:
				'My dumping repository for fun and time limited Jam projects from all over the developer spectrum, from games over websites to good old math. Mostly worked on with Sveltekit or even plain html or python, what ever seams more fitting for any given projects. This is by the way the reason Jambo exists!'
		},
		{
			name: 'More projects',
			link: 'flloschy?tab=repositories',
			tags: [],
			languages: [],
			description: ''
		}
	];
</script>

<div class="verticalCenter" id="projects">
	<h1>Projects</h1>
	{#each projects as project}
		<div class="project neumorphism">
			<h1 class="no-vertical-margin">
				<a
					href="https://github.com/{project.link}"
					target="_blank"
					class="c-text"
					style="text-decoration: none;">{project.name}</a
				>
			</h1>
			<div class="tags">
				{#each project.languages as language}
					<div class="code">${language}</div>
				{/each}
				{#each project.tags as tag}
					<div>#{tag}</div>
				{/each}
			</div>
			<p>
				{project.description}
			</p>
		</div>
	{/each}
</div>

<style lang="scss">
	h1 {
		width: fit-content;
		text-align: left;
	}
	.project {
		width: 100%;
		margin-top: 2rem;
		background-color: rgba(0, 0, 0, 0.2);
		padding-left: 25px;
		padding-right: 25px;
		border-radius: 20px;
		backdrop-filter: blur(10px);
		// box-shadow: 0 0 10px var(--primary);
	}
</style>
