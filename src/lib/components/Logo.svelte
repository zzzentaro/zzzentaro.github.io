<script>
	import { onMount } from 'svelte';

	let avatarUrl = '';

	async function loadAvatar() {
		const res = await fetch('https://prts.zzzentaro.workers.dev/' + Date.now());
		avatarUrl = await res.text();
	}

	onMount(() => {
		loadAvatar();
		setInterval(loadAvatar, 60_000);
	});
</script>

<a href="/" class="relative group">
	<img
		src={avatarUrl}
		alt="my discord avatar"
		class="aspect-square size-32 lg:size-64 object-cover rounded-full border-2 border-gray-800 dark:border-gray-200 group hover:grayscale group-hover:border-gray-800 transition-all duration-1000"
	/>
	<div
		class="pointer-events-none select-none absolute inset-0 bg-linear-to-b from-black/90 via-pink-950/80 to-black/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-3000 flex items-start justify-center"
		aria-hidden="true"
	>
		<p class="text-2xl text-pink-200/50 opacity-0 group-hover:opacity-100 duration-4000 ease-in">
			. . . <span class="text-4xl text-pink-400 animate-pulse [animation-duration:0.6s]">♥</span> ?
		</p>
	</div>
</a>
