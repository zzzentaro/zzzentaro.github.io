<script lang="ts">
	import 'iconify-icon';

	export let isDarkTheme = false;
	export let toggleTheme: () => void;

	function handleClick() {
		toggleTheme();
	}
</script>

<button on:click={handleClick} class="min-w-12 min-h-12 aspect-square">
	{#if isDarkTheme}
		<iconify-icon icon="lucide:moon" width="48" height="48"></iconify-icon>
	{:else if !isDarkTheme}
		<iconify-icon icon="lucide:sun" width="48" height="48"></iconify-icon>
	{:else}
		<iconify-icon icon="lucide-lab:planet" width="48" height="48"></iconify-icon>
	{/if}
</button>
