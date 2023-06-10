<script lang="ts">
	import Navbar from './components/Navbar.svelte';
	import Footer from './components/Footer.svelte';
	import Balls from './components/Balls.svelte';
	import Welcome from './components/Welcome.svelte';
</script>

<Welcome />
<body>
	<div id="background-wrapper">
		<Navbar />
		<main>
			<slot />
			<!-- <Balls /> -->
		</main>
		<Footer />
	</div>
</body>

<style lang="scss">
	@import './global.scss';

	main {
		margin-top: $navbar-height;
		margin-bottom: 10px;
	}

	#background-wrapper {
		background-color: rgba(0, 0, 0, 0.75);
	}
</style>
