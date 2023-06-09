<script lang="ts">
	import Navbar from './components/Navbar.svelte';
	import Footer from './components/Footer.svelte';
	import Balls from './components/Balls.svelte';
	import Welcome from './components/Welcome.svelte';
</script>


<Welcome />
<body>
	<Navbar />
	<main>
		<slot />
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
