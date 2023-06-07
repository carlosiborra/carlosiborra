<script>
	import Navbar from './components/Navbar.svelte';
	import Footer from './components/Footer.svelte';
	import Content from './components/Content.svelte';
	import Balls from './components/Balls.svelte';
</script>

<body>
	<Navbar />
	<main>
		<Content />
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