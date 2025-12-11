<script lang="ts">
	import errorImg from '$lib/assets/images/error.jpeg';
	import { page } from '$app/state';
</script>

<section class=" flex flex-1 items-center justify-center p-2 lg:p-8">
	<div
		class="flex flex-col lg:flex-row p-2 lg:p-8 border-2 border-gray-800 dark:border-gray-200 rounded-xs gap-2"
	>
		<div class="flex flex-col">
			<h1 class="text-4xl font-fredoka lowercase">{page.status}</h1>
			<p class="text-2xl lowercase">
				{page.error?.message || 'something went wrong'}
			</p>
		</div>

		<img src={errorImg} alt="error" class="aspect-auto max-w-32 rounded-xl" />
	</div>
</section>
