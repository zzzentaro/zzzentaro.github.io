<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import './layout.css';

	import { onMount } from 'svelte';

	import Logo from '$lib/components/Logo.svelte';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';

	let isDarkTheme = $state(false);

	function toggleTheme() {
		isDarkTheme = !isDarkTheme;
		localStorage.theme = isDarkTheme ? 'dark' : 'light';
		updateTheme();
	}

	function updateTheme() {
		if (isDarkTheme) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}

	onMount(() => {
		const storedTheme = localStorage.getItem('theme');
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

		isDarkTheme = storedTheme === 'dark' || (!storedTheme && prefersDark);
		updateTheme();
	});

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>67</title>
</svelte:head>

<header>
	<nav class="flex flex-row justify-between items-start gap-2 p-2 lg:p-8">
		<a href="/about" aria-label="about" class="flex aspect-square min-w-12 min-h-12"
			><iconify-icon icon="picon:question" width="48" height="48"></iconify-icon></a
		>
		<Logo />
		<ThemeSwitch {toggleTheme} {isDarkTheme} />
	</nav>
</header>

{@render children()}

<footer class=" flex flex-row items-center justify-between gap-2 p-2 lg:p-8">
	<small class="text-sm"><time datetime="2025-12-11">2025</time> zzzentaro</small>
	<div class="flex flex-row gap-2">
		<iconify-icon icon="devicon:svelte"></iconify-icon>
		<iconify-icon icon="devicon:tailwindcss"></iconify-icon>
		<iconify-icon icon="simple-icons:iconify"></iconify-icon>
	</div>
</footer>
