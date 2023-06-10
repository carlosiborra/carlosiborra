<script lang="ts">
	import Navbar from './components/Navbar.svelte';
	import Footer from './components/Footer.svelte';
	import Balls from './components/Balls.svelte';
	import Welcome from './components/Welcome.svelte';
</script>

<!-- ! ------------------------------------>

<Welcome />
<Navbar />
<body>
	<div id="background-wrapper"></div>
	<main>
		<slot />
	</main>
</body>
<Footer />

<!-- ! ------------------------------------>

<style lang="scss">
	@import './global.scss';

	html {
		scroll-behavior: smooth;
		margin: 0;
	}

	body {
		margin: 0;
		background-color: $color-primary;
		background-image: url('waves2.gif');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		scroll-behavior: smooth;
		behavior: smooth;

		/* Make the scroll bar invisible */
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */

		&::-webkit-scrollbar {
			width: 0px;
			background: transparent; /* make scrollbar transparent */
		}
	}

	main {
		margin-top: $navbar-height;
		margin-bottom: 0px;
	}

	// #background-wrapper {
	// 	position: fixed;
	// 	top: 0;
	// 	left: 0;
	// 	width: 100vw;
	// 	height: 100vh;
	// 	background-image: url('waves2.gif');
	// 	background-repeat: no-repeat;
	// 	background-size: cover;
	// 	z-index: 0;
	// 	// make transition fron waves to $color-primary smooth
	// 	transition: background-image 0.5s ease-in-out;
		
	// }
</style>
