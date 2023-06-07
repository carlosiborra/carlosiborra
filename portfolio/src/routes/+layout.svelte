<script>
	import { page } from '$app/stores';
	import Navbar from './components/Navbar.svelte';
	import Footer from './components/Footer.svelte';
	import Content from './components/HomeContent.svelte';
	import Balls from './components/Balls.svelte';
	import Welcome from './components/Welcome.svelte';
	import Contact from './components/Contact.svelte';
  
	// Get current location
	$: route = $page.route.id; // $: is a reactive statement -> changes when $page.route changes
	
	// on route change, rerun checkHome()
	$: checkHome();
	$: console.log('route:', route);

	let checkHome = () => {
    	console.log('route:', route);
    	if (route === '/') {
    	  console.log('true');
    	  return true;
    	} else {
    	  console.log('false');
    	  return false;
    	}
  	};

</script>


<Welcome />
<body>
	<Navbar />
	<main>
		{#if checkHome() === true}
			<Content />
		{:else}
			<slot />
		{/if}
		<Balls />
	</main>
	<Footer />
</body>

<style lang="scss">
	@import './global.scss';

	main {
		margin-top: $navbar-height;
		margin-bottom: 10px;
	}

</style>