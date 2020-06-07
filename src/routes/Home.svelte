<script>
	export let name = 'svelte';
	const appEnv = process.env.APP_ENV
</script>

<h1>Hello {name}!</h1>
<h1>APP_ENV: {appEnv} </h1>
<p class="py-5">Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

<a
	href="https://tailwindcss.com/"
	target="_blank"
	class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
	Tailwind Link
</a>

<style type="text/postcss">
	h1 {
		@apply text-6xl text-orange-400;
	}
</style>