<script lang="ts">
	import Navbar from './components/Navbar.svelte';
	import Footer from './components/Footer.svelte';
	import Balls from './components/Balls.svelte';
	import Welcome from './components/Welcome.svelte';
</script>

<!-- ! ------------------------------------>

<Welcome />
<body>
	<slot />
</body>
<Footer />

<!-- ! ------------------------------------>

<style lang="scss">
	@import './global.scss';

	html {
		scroll-behavior: smooth;
		margin: 0;
		background-color: rgb(255, 255, 255);
	}

	body {
		margin: 0 0 0 0;
		background-color: rgb(255, 255, 255);
		background-image: url('wireframe-top.jpg');
		background-repeat: no-repeat;
		//background width max 100% of the screen
		background-size: 100vw;
		// // background to bottom
		// background-position: bottom;
		background-size: cover;
		// // background-position: center;
		// scroll-behavior: smooth;
		scroll-behavior: smooth;

		/* Make the scroll bar invisible */
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */

		&::-webkit-scrollbar {
			width: 0px;
			background: transparent; /* make scrollbar transparent */
		}
	}

	slot {
		display: none;
	}

	// #background-image-top {
	// 	position: fixed;
	// 	top: 0;
	// 	left: 0;
	// 	width: 100vw;
	// 	height: 50vh;
	// 	z-index: 10;
	// }

	// #background-image-bottom {
	// 	position: fixed;
	// 	bottom: 0;
	// 	left: 0;
	// 	width: 100vw;
	// 	height: 50vh;
	// 	z-index: 10;
	// }
</style>
