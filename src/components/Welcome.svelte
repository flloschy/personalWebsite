<script lang="ts">
	import { onMount } from 'svelte';

	const texts = {
		morning: 'Have a nice morning!',
		afternoon: "How's your day going?",
		evening: 'Had a productive day?',
		night: 'You should sleep.'
	};

	const getText = (hour: number) => {
		if (hour >= 5 && hour < 12) return texts['morning'];
		if (hour >= 12 && hour < 17) return texts['afternoon'];
		if (hour >= 17 && hour < 23) return texts['evening'];
		return texts['night'];
	};
	let text: string = getText(new Date().getHours());
	let time: string = '...';
	const updateTime = () => {
		const now = new Date();
		time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
		text = getText(now.getHours());
	};

	onMount(() => {
		updateTime();
		setInterval(updateTime, 1000);
	});
</script>

<div id="welcome">
	<div>
		<h1 id="hello">Hello!</h1>
		<h4 id="time">{time}</h4>
		<h5 id="greeting">{text}</h5>
	</div>
</div>

<style>
	#welcome {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}

	#hello,
	#time,
	#greeting {
		color: var(--primary);
		margin: auto;
		width: fit-content;
		text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.375);
	}
	#time {
		color: var(--accent);
	}
	#greeting {
		color: var(--secondary);
	}
</style>
