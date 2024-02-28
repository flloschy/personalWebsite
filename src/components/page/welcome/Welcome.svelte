<script lang="ts">
	import { time, text } from './welcome';
</script>

<div class="verticalCenter" id="welcome">
	<h1 class="c-primary no-vertical-margin">Welcome!</h1>
	<h3 class="c-secondary no-vertical-margin">{$text}</h3>
	<h4 class="c-accent no-vertical-margin">{$time}</h4>
</div>
