<script lang="ts">
	import Navbar from './components/Navbar.svelte';
	import Footer from './components/Footer.svelte';
	import Balls from './components/Balls.svelte';
	import Welcome from './components/Welcome.svelte';
</script>

<Welcome />
<Navbar />
<body>
	<main>
		<slot />
	</main>
</body>
<Footer />

<style lang="scss">
	@import './global.scss';

	html {
		scroll-behavior: smooth;
		margin: 0;
	}

	body {
		margin: 0;

		// background-color: $color-primary;
		background-image: url('waves2.gif');
		// background-repeat: no-repeat;
		background-size: cover;
		// background-position: center;
		background-attachment: fixed;

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

	#background-wrapper {
		background-color: rgba(0, 0, 0, 0.75);
	}
</style>
