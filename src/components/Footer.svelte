<div id="footer">
	<div class="grid">
		<div>
			<h3>Links</h3>
			<a href="https://discord.com/users/578620425060483072">Discord</a><br />
			<a href="https://github.com/flloschy">Github</a><br />
			<a href="/timeline#timeline">Timeline</a><br />
			<a href="/blog#blog">Blog</a><br />
			<a href="/themes#themes">Themes</a>
		</div>
		<div class="min">
			<h3>Info</h3>
			<p>
				This website doesn't use any Cookies or Tracking Technologie. But third-parties might use
				those, which would be <a href="https://fonts.google.com">fonts.google.com</a>
				for icons and fonts & <a href="https://vercel.com">Vercel</a> which is used to host this website
				though tracking is not enabled on my side.
			</p>
		</div>
	</div>
</div>

<style>
	#footer {
		display: block;
		max-width: 1000px;
		box-sizing: border-box;
		margin: auto;
		background-color: rgba(0, 0, 0, 0.3);
		padding: 20px;
		height: min-content;
		margin-top: 25%;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border-radius: 10px 10px 0 0;
		border-width: 1px 0 0 0;
		border-color: var(--primary);
		border-style: solid;
	}

	.grid {
		width: 90%;
		display: flex;
		justify-content: space-around;
		gap: 20px;
		margin: auto;
	}
	.min {
		width: 40%;
	}
	h3 {
		width: fit-content;
		margin-bottom: 0;
		margin-top: 0;
	}
	@media (max-width: 700px) {
		.grid {
			flex-direction: column;
		}
		.min {
			width: 100%;
		}
	}
</style>
