<div id="projectss">
	<h1 id="projects">Best Projects</h1>
	<div class="grid">
		<div class="website reverse">
			<a class="a" href="github.com/">Website</a>
			<p>This website! Its made with Svelte[kit] and Typescript</p>
		</div>
		<div class="jambo normal">
			<a class="a" href="github.com/">Jambo</a>
			<p>
				A discord bot made with a few other people. It manages votes, proposals and reminders for a
				coding Jam server
			</p>
		</div>
		<div class="autodl normal">
			<a class="a" href="github.com/">Autodl</a>
			<p>
				An automatic YouTube downloader with a web interface made with Sveltekit, Typescript and
				Python
			</p>
		</div>
		<div class="jams reverse">
			<a class="a" href="github.com/">Jams</a>
			<p>
				A collection of fun Jam projects with a wide variety of themes and topics usually made in a
				short period.
			</p>
		</div>
	</div>
	<a href="github.com/flloschy">Find more here</a>
</div>

<style>
	#projectss {
		padding-top: 50vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.a {
		font-family: 'Poppins';
		font-weight: 700;
		font-size: 4.21rem;
		text-decoration: none;
	}
	#projectss > a {
		margin-top: 20px;
		opacity: 0.5;
	}

	.grid > div {
		z-index: 9;
		border: solid 1px var(--text);
		border-radius: 10px;
		text-align: center;
		text-decoration: none;
		color: var(--text);
		background-color: transparent;
		box-shadow:
			0 0 10px var(--primary) inset,
			0 0 10px var(--primary);
		animation: slide ease-out 1ms;
		animation-timeline: view();
		backdrop-filter: blur(10px);
	}
	.normal {
		transform: translateX(200%);
	}
	.reverse {
		transform: translateX(-200%);
	}

	@keyframes slide {
		30% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(0%);
		}
	}
	.grid > div > a {
		transition: opacity 0.25s ease-in-out;
		opacity: 0.4;
	}
	.grid > div:hover > a {
		opacity: 1;
	}
	.grid > div > p {
		padding-left: 10px;
		padding-right: 10px;
		transition: opacity 0.25s ease-in-out;
		opacity: 0.2;
	}
	.grid > div:hover > p {
		opacity: 1;
	}

	.grid > div > a {
		color: var(--text);
	}

	.grid {
		display: grid;
		grid-auto-columns: 1fr;
		grid-template-columns: 1fr 5fr 1fr;
		grid-template-rows: repeat(4, 1fr);
		gap: 7px 0px;
		grid-template-areas:
			'website website .'
			'. jambo jambo'
			'jams jams .'
			'. autodl autodl';
	}

	@media (max-width: 700px) {
		.normal {
			transform: translateY(0%);
		}
		.reverse {
			transform: translateY(0%);
		}
		.grid {
			grid-template-columns: 0fr 1fr 0fr;
		}
		.grid > div > p {
			opacity: 1;
		}
		.grid > div > a {
			opacity: 0.8;
		}
		@keyframes slide {
			0% {
				opacity: 0;
			}
			70% {
				opacity: 1;
			}
			100% {
				transform: translateX(0%);
			}
		}
	}

	.website {
		grid-area: website;
	}

	.jambo {
		grid-area: jambo;
	}

	.autodl {
		grid-area: autodl;
	}

	.jams {
		grid-area: jams;
	}
</style>
