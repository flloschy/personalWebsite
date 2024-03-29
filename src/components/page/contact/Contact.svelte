<script lang="ts">
	let emailError:string[] = [];
	let titleError:string[] = [];
	let textError:string[] = [];
	let success = false;

	function submit() {
		emailError.length = 0
		titleError.length = 0
		textError.length = 0
		success = false

		const email = document.getElementById('email') as HTMLInputElement
		if (email.value.length > 256) {
			emailError.push("Email address cant be longer than 256 characters")
		}
		else if (email.value.length == 0) {
			emailError.push("Email address cant be empty")
		} else if (!email.value.match(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm)) {
			emailError.push("Invalid Email address")
		}

		const title = document.getElementById('title') as HTMLInputElement
		if (title.value.length > 256) {
			titleError.push("Title cant be longer than 256 characters")
		} else if (email.value.length == 0) {
			titleError.push("Title cant be empty")
		} else if (!title.value.match(/^[\w.,ßöäüÖÄÜ ]+$/g)) {
			titleError.push("The Title can only contain alphanumeric symbols")
		}

		const text = document.getElementById('text') as HTMLTextAreaElement
		if (text.value.length > 4096) {
			textError.push("Text cant be longer than 4096 characters")
		} else if (text.value.length == 0) {
			textError.push("Text cant be empty")
		}

		if (emailError.length != 0 || titleError.length != 0 || textError.length != 0) {
			return
		}

		emailError.length = 0
		titleError.length = 0
		textError.length = 0
		success = true

		const form = document.getElementById('form') as HTMLFormElement
		form.submit()
	}
</script>

<div class="verticalCenter" id="contact">
	<h1 class="no-vertical-margin">Contact</h1>
	<form id="form" method="post">
		<p>
			If you ever want to contact me you can add me on <a
				href="https://discord.com/users/578620425060483072">discord</a
			> or send me something by this form.<br>
		</p>
		{#each emailError as error}
			<div class="neumorphism error">{error}</div>
		{/each}
		{#each titleError as error}
			<div class="neumorphism error">{error}</div>
		{/each}
		{#each textError as error}
			<div class="neumorphism error">{error}</div>
		{/each}
		{#if success}
			<div class="neumorphism success">Message Sent, maybe you will hear back</div>
		{/if}
		<input id="email" class="neumorphism" type="email" placeholder="your@email.com" name="email">
		<input id="title" class="neumorphism" type="text" placeholder="title" name="title">
		<textarea id="text" class="neumorphism"  placeholder="message" name="message" rows="10" />
		<button class="neumorphism" type="submit" value="Send" on:click|preventDefault={submit}>Send</button>
	</form>
</div>

<style>
	.neumorphism {
		padding: 10px;
		border-radius: 10px;
	}
	.error {
		background-color: rgba(255, 0, 0, 0.2);
	}
	.success {
		background-color: rgba(0, 255, 0, 0.2);
	}
	p {
		text-align: center;
	}
	form {
		display: flex;
		flex-direction: column;
		row-gap: 10px;
	}
	input, textarea, button {
		resize: none;
		border:none; outline: none;
		background-color: transparent;
		color: var(--text);
		transition: transform 200ms cubic-bezier(0.72, 0.08, 0, 2.3);
	}
	input:hover, textarea:hover,
	button:hover, button:hover {
		transform: scale(1.05);
	}
	input:focus, textarea:focus,
	input:active, textarea:active,
	button:active, button:active {
		transform: scale(0.99);
	}
	input::placeholder, textarea::placeholder {
		color: var(--text);
		opacity: 0.5;
	}

</style>
