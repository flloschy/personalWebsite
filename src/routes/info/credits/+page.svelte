<script lang="ts">
	import Credit from '../../../components/page/credit/Credit.svelte';

	const providers = [
		{
			title: 'Github',
			what: 'Github is the code distribution and managing platform',
			why: 'Besides that its THE code sharing platform, it allows me to connect my site to vercel for automatic deployments',
			link: 'https://github.com/'
		},
		{
			title: 'Vercel',
			what: 'Vercel is a website hosting provider',
			why: 'Its free, easy and allows to  automatically redeployment once the github repository receives an update',
			link: 'https://vercel.com/'
		},
		{
			title: 'Namecheap',
			what: 'Namecheap is a Domain seller',
			why: 'A free domain was included in the Github students pack and Namecheap was what i choose',
			link: 'https://namecheap.com/'
		}
	];

	const technology = [
		{
			title: 'SvelteKit',
			what: 'SvelteKit is a powerful, feature rich open-source web-framework made to make Web development intuitive',
			why: "Plain HTML is kinda annoying, didn't try any other frameworks, so SvelteKit it is",
			link: 'https://svelte.dev/'
		},
		{
			title: 'SASS',
			what: 'SASS is an CSS preprocessor for making straight forward Stylesheets',
			why: 'It makes the whole CSS making procedure more bearable, thats it. hehe',
			link: 'https://sass-lang.com/'
		},
		{
			title: 'Typescript',
			what: 'Typescript is just javascript but with types',
			why: "I like how it looks and it makes me more productive. I honestly don't know why but its good",
			link: 'https://www.typescriptlang.org/'
		}
	];

	const tools = [
		{
			title: 'VS Codium',
			what: 'VS Codium is a version of Visual Studio Code but without the tracking/telemetry done by Microsoft',
			why: 'VSCode is the my personal favorite code editor, but tracking sucks which is why I use VSCodium',
			link: 'https://vscodium.com/'
		},
		{
			title: 'Real Time Colors',
			what: 'RealTimeColors is an - as the name implies -  real time color picker+generator for cohesive color themes',
			why: 'Its really easy go generate a nice color theme and eliminates the guess work when picking colors',
			link: 'https://realtimecolors.com/'
		},
		{
			title: 'Google fonts',
			what: 'A big catalog of fonts to choose from and include in your css via a url',
			why: 'Its simple, looks good, has good fonts, its google after all',
			link: 'https://fonts.google.com/'
		}
	];

	const packages = [
		{
			title: 'mdsvex',
			what: 'A markdown to svelte converter with syntax highlighting',
			why: "Used for the blog page since i didn't want to create a custom svelte page every time.",
			link: 'https://mdsvex.pngwn.io/'
		},
		{
			title: 'shiki',
			what: 'A syntax highlighter to convert plain text to highlighted html',
			why: "The build-in mdsvex highlighter simply isn't the greatest so this is the replacement highlighter",
			link: 'https://shiki.matsu.io/'
		},
		{
			title: 'Lighthouse',
			what: 'A browser extension to rate a site base on the performance, accessibility, best practices and SEO',
			why: "Used to improve certain aspects of the site I wouldn't have improved otherwise",
			link: 'https://developer.chrome.com/docs/lighthouse/overview/'
		}
	];

	const inspiration = [
		{
			title: 'Awwwards',
			what: 'Awwwards is a famous website where you can find a ton load of cool, inspiring and amazing websites',
			why: 'On the Search for good colors themes I screen color-picked some colors form a multitude of sites found there',
			link: 'https://awwwards.com/'
		},
		{
			title: 'antti.codes',
			what: 'A personal/portfolio website',
			why: 'Looked to see how I should list my self hosted services and how to show the blog entries',
			link: 'https://antti.codes/'
		},
		{
			title: 'murphy-in.space',
			what: 'A personal/portfolio website',
			why: 'Looked for orientation on how to list Skills/Experiences etc.',
			link: 'https://murphy-in.space/'
		},
		{
			title: 'Hyperplexed',
			what: 'Youtube Content creator who recreates mesmerizing (and simple!) css/html/js effects',
			why: 'No direct inspiration to be perfectly honest, but some things certainly sticked',
			link: 'https://www.youtube.com/@Hyperplexed'
		},
		{
			title: 'joyofcode.xyz',
			what: 'A website by a content creator who does a lot of different svelte Tutorials',
			why: 'I liked to have a blog-like page but didnt want to do a new svelte file, so i found this tutorial in order to use markdown instead!',
			link: 'https://joyofcode.xyz/sveltekit-markdown-blog'
		},
		{
			title: "doncez.art",
			what: "A personal/portfolio website",
			why: "Saw it in the svelte Discord server and a contact form via discord webhook inspired me to do that too!",
			link: "https://doncez.art/"
		},
		{
			title: 'a lot more!',
			what: 'Inspiration came from a lot more places',
			why: "These where simply too many to list and/or remember and weren't as significant in my design choices anyway",
			link: '/info/credits'
		}
	];
</script>

<div>
	<h1>Credit</h1>

	<p>
		Credits are important and as a open-source lover the very least I can do is to give credit to
		the people and community enabling me and so many more developers to do what they love! Even when
		like one person will ever see it LOL. So here are the credits of various things which enabled me
		to create this site in the way I created it, although not everything is open-source on this
		list.
	</p>

	<h4>This website gets delivered to you by...</h4>
	<div class="creditGrid">
		<h5>Name</h5>
		<h5>What</h5>
		<h5>Why</h5>
		{#each providers as item}
			<Credit {...item} />
		{/each}
	</div>

	<h4>Using these amazing technologies...</h4>
	<div class="creditGrid">
		{#each technology as item}
			<Credit {...item} />
		{/each}
	</div>

	<h4>Created with these amazing tools...</h4>
	<div class="creditGrid">
		{#each tools as item}
			<Credit {...item} />
		{/each}
	</div>

	<h4>Enriched thanks to the following packages...</h4>
	<div class="creditGrid">
		{#each packages as item}
			<Credit {...item} />
		{/each}
	</div>

	<h4>And last but not least inspired from...</h4>
	<div class="creditGrid">
		{#each inspiration as item}
			<Credit {...item} />
		{/each}
	</div>
</div>

<style>
	p {
		text-align: center;
	}
	h4 {
		color: var(--primary);
	}
	.creditGrid {
		& > h5 {
			text-align: left;
		}
		display: grid;
		grid-template-columns: 0.5fr 1fr 1fr;
		column-gap: 20px;
		row-gap: 10px;
	}
</style>
