<script>
	export let name;
	const appEnv = process.env.APP_ENV
</script>

<main>
	<h1>Hello {name}!</h1>
	<h1>APP_ENV: {appEnv} </h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

	<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
		Tailwind Button
	</button>
</main>

<style lang='scss' global>
	@import './style/global.scss';

	$h1-color: #ff3e00;

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: $h1-color;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>