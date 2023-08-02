<script>
	import { count } from './stores.js';

	function increment() {
		// TODO increment the count
        count.update((n) => n + 1);
	}
</script>

<button on:click={increment}> + </button>
