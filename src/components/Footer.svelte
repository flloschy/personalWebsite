<div class="footer">
	<div>
		<h4>Info</h4>
		<a href="/info/privacy">Privacy</a>
		<a href="/info/cookies">Cookies</a>
		<a href="/info/license">License</a>
		<a href="/info/credits">Credits</a>
	</div>
	<div>
		<h4>Pages</h4>
		<a href="/blog">Blog</a>
		<a href="/timeline">Timeline</a>
		<a href="/themes">Themes</a>
		<a href="/">Home</a>
	</div>
	<div>
		<h4>Links</h4>
		<a href="https://github.com/flloschy">Github</a>
		<a href="https://discord.com/users/578620425060483072">Discord</a>
		<a href="https://status.floschy.me/">Status</a>
		<a href="/blog/why-no-more-links">Why not more?</a>
	</div>
</div>

<style>
	.footer {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		height: min-content;

		background-color: rgba(0, 0, 0, 0.3);
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		border-width: 0;
		border-top-width: 1px;
		border-color: var(--primary);
		border-style: solid;

		padding-bottom: 30px;

		& > div {
			& > h4 {
				text-align: left;
				text-decoration: underline;
			}
			display: flex;
			flex-direction: column;
		}
	}
</style>
