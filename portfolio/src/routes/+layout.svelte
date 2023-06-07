<script>
	import Navbar from './components/Navbar/Navbar.svelte';
	import Footer from './components/Footer/Footer.svelte';
	import Content from './components/Content/Content.svelte';
	import '../../static/styles/global.scss';
</script>

<body>
	<main>
		<Navbar />
		<Content />

		<div class="ball" style="top: {Math.random() * 70 + 10}%; left: {Math.random() * 70 + 10}%; width: {Math.random() * 10 + 1}vw; height: {Math.random() * 10 + 1}vh; background-color: rgba(255, 255, 255, 1);"></div>
		<div class="ball" style="top: {Math.random() * 70 + 10}%; left: {Math.random() * 70 + 10}%; width: {Math.random() * 10 + 1}vw; height: {Math.random() * 10 + 1}vh; background-color: rgba(255, 255, 255, 1);"></div>
		<div class="ball" style="top: {Math.random() * 70 + 10}%; left: {Math.random() * 70 + 10}%; width: {Math.random() * 10 + 1}vw; height: {Math.random() * 10 + 1}vh; background-color: rgba(255, 255, 255, 1);"></div>
		<div class="ball" style="top: {Math.random() * 70 + 10}%; left: {Math.random() * 70 + 10}%; width: {Math.random() * 10 + 1}vw; height: {Math.random() * 10 + 1}vh; background-color: rgba(255, 255, 255, 1);"></div>
		<div class="ball" style="top: {Math.random() * 70 + 10}%; left: {Math.random() * 70 + 10}%; width: {Math.random() * 10 + 1}vw; height: {Math.random() * 10 + 1}vh; background-color: rgba(255, 255, 255, 1);"></div>
		<div class="ball" style="top: {Math.random() * 70 + 10}%; left: {Math.random() * 70 + 10}%; width: {Math.random() * 10 + 1}vw; height: {Math.random() * 10 + 1}vh; background-color: rgba(255, 255, 255, 1);"></div>
		<div class="ball" style="top: {Math.random() * 70 + 10}%; left: {Math.random() * 70 + 10}%; width: {Math.random() * 10 + 1}vw; height: {Math.random() * 10 + 1}vh; background-color: rgba(255, 255, 255, 1);"></div>
		<div class="ball" style="top: {Math.random() * 70 + 10}%; left: {Math.random() * 70 + 10}%; width: {Math.random() * 10 + 1}vw; height: {Math.random() * 10 + 1}vh; background-color: rgba(255, 255, 255, 1);"></div>
		<div class="ball" style="top: {Math.random() * 70 + 10}%; left: {Math.random() * 70 + 10}%; width: {Math.random() * 10 + 1}vw; height: {Math.random() * 10 + 1}vh; background-color: rgba(255, 255, 255, 1);"></div>
		<div class="ball" style="top: {Math.random() * 70 + 10}%; left: {Math.random() * 70 + 10}%; width: {Math.random() * 10 + 1}vw; height: {Math.random() * 10 + 1}vh; background-color: rgba(255, 255, 255, 1);"></div>

	</main>
	<Footer />
</body>

<style lang="scss">
	@import '../../static/styles/global.scss';
	
	// Slot to + navbar from top
	main {
		margin-top: $navbar-height;
		margin-bottom: 10px;
		position: relative; /* Add position: relative to the main container */
	}

	.ball {
		position: absolute;
		z-index: -1;
		filter: blur(100px);
		border-radius: 45%;
	}
	
</style>