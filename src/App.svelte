<script>
	import Tailwindcss from './components/Tailwindcss.svelte';
	import Router, {link} from "svelte-spa-router";

	import active from 'svelte-spa-router/active';

	import Home from "./routes/Home.svelte";
	import About from "./routes/About.svelte";

	const routes = {
		"/": Home,
		"/about": About,
	};

</script>

<Tailwindcss />

<div class="container my-10 p-4 m-auto bg-gray-200 text-center">
	<ul class="flex">
			<li class="mr-3">
				<a class="inline-block border border-blue-500 rounded py-1 px-3 text-black-300"
					use:link
					use:active={{className: 'bg-blue-300'}}
					href="/">
					Home
				</a>
			</li>
			<li class="mr-3">
				<a class="inline-block border border-blue-500 rounded py-1 px-3 text-black-300"
					use:link
					use:active={{className: 'bg-blue-300'}}
					href="/about">
					About
				</a>
			</li>
		</ul>

	<Router {routes}/>
</div>

