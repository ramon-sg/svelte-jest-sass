<script>
	import Tailwindcss from './components/Tailwindcss.svelte';

	export let name;

	const appEnv = process.env.APP_ENV
</script>

<Tailwindcss />

<main>
	<h1>Hello {name}!</h1>
	<h1>APP_ENV: {appEnv} </h1>
	<p class="py-5">Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

	<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
		Tailwind Button
	</button>
</main>

<style type="text/postcss">
	main {
		text-align: center;
		padding: 1em;
		max-width: 600px;
		margin: 0 auto;
	}

	h1 {
		@apply text-6xl text-orange-400;
	}
</style>