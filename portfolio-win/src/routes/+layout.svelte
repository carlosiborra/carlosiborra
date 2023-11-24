<!-- ! SCRIPTS ------------------------------------------------------------------------------------>

<script lang="ts">
	import Welcome from '../components/Welcome.svelte';
	import Footer from '../components/common/Footer.svelte';
	import Navbar from '../components/common/Navbar.svelte';
	import Scrollspy from '../components/common/Scrollspy.svelte';
</script>

<!-- ! STRUCTURE ---------------------------------------------------------------------------------->

<div id="welcome-container">
	<Welcome />
</div>
<!-- <Scrollspy /> -->
<body id="body-content">
	<div id="navbar">
		<Navbar />
	</div>

	<div id="content">
		<div id="content-container">
			<slot />
			<div id="content-scrollspy" class="sticky-scrollspy">
				<Scrollspy />
			</div>
		</div>

		<div id="footer">
			<Footer />
		</div>
	</div>
</body>

<!-- ! STYLE -------------------------------------------------------------------------------------->

<style lang="scss">
	@import 'static/styles/styles.scss';

	#welcome-container {
		width: 100%;
		height: 100%;
	}

	#navbar {
		position: fixed;
		width: 100%;
		z-index: 10;
	}

	#content {
		margin-top: $height-navbar + $separation-big;

		#footer {
			margin-top: $separation-big;
		}
	}

	#content-container {
		display: grid;
		grid-template-columns: auto auto;
		gap: $separation-big;

		@media screen and (max-width: $breakpoint-mobile) {
			grid-template-columns: auto;
			grid-template-rows: auto auto;

			#content-scrollspy {
				order: -1;
			}
		}
	}

	#body-content {
		padding: $separation-big;
		margin: 0;

		scroll-behavior: smooth;

		background: radial-gradient(at 10% 61%, rgb(61, 130, 62) 0px, transparent 30%),
			radial-gradient(at 1% 8%, rgb(134, 147, 36) 0px, transparent 40%),
			radial-gradient(at 92% 12%, rgb(81, 69, 159) 0px, transparent 30%),
			radial-gradient(at 31% 74%, rgb(137, 45, 103) 0px, transparent 40%),
			radial-gradient(at 31% 16%, rgb(52, 101, 156) 0px, transparent 40%),
			radial-gradient(at 88% 12%, rgb(177, 64, 64) 0px, transparent 50%),
			radial-gradient(at 95% 90%, rgb(66, 130, 31) 0px, transparent 40%);
		background-size: 130% 130%;

		-webkit-animation: background-image-animation 5s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
		-moz-animation: background-image-animation 5s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
		-o-animation: background-image-animation 5s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
		animation: background-image-animation 5s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;

		// background: radial-gradient(at 10% 61%, rgb(145, 236, 147) 0px, transparent 30%),
		// 	radial-gradient(at 1% 8%, rgb(176, 193, 45) 0px, transparent 40%),
		// 	radial-gradient(at 92% 12%, rgb(113, 97, 219) 0px, transparent 30%),
		// 	radial-gradient(at 31% 74%, rgb(205, 68, 155) 0px, transparent 40%),
		// 	radial-gradient(at 31% 16%, rgb(72, 138, 213) 0px, transparent 40%),
		// 	radial-gradient(at 88% 12%, rgb(249, 90, 90) 0px, transparent 50%),
		// 	radial-gradient(at 95% 90%, rgb(92, 183, 43) 0px, transparent 40%);
		// background-size: 130% 130%;

		// -webkit-animation: background-image-animation 5s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
		// -moz-animation: background-image-animation 5s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
		// -o-animation: background-image-animation 5s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
		// animation: background-image-animation 5s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;

		// background: radial-gradient(at 10% 61%, rgb(175, 253, 176) 0px, transparent 30%),
		// 	radial-gradient(at 1% 8%, rgb(240, 255, 123) 0px, transparent 40%),
		// 	radial-gradient(at 92% 12%, rgb(177, 164, 255) 0px, transparent 30%),
		// 	radial-gradient(at 31% 74%, rgb(255, 155, 218) 0px, transparent 40%),
		// 	radial-gradient(at 31% 16%, rgb(156, 202, 255) 0px, transparent 40%),
		// 	radial-gradient(at 88% 12%, rgb(255, 166, 166) 0px, transparent 50%),
		// 	radial-gradient(at 95% 90%, rgb(190, 255, 155) 0px, transparent 40%);
		// background-size: 130% 130%;

		// -webkit-animation: background-image-animation 5s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
		// -moz-animation: background-image-animation 5s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
		// -o-animation: background-image-animation 5s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
		// animation: background-image-animation 5s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;

		@-webkit-keyframes background-image-animation {
			0% {
				background-position: 0% 50%;
			}
			50% {
				background-position: 100% 50%;
			}
			100% {
				background-position: 0% 50%;
			}
		}
		@-moz-keyframes background-image-animation {
			0% {
				background-position: 0% 50%;
			}
			50% {
				background-position: 100% 50%;
			}
			100% {
				background-position: 0% 50%;
			}
		}
		@-o-keyframes background-image-animation {
			0% {
				background-position: 0% 50%;
			}
			50% {
				background-position: 100% 50%;
			}
			100% {
				background-position: 0% 50%;
			}
		}
		@keyframes background-image-animation {
			0% {
				background-position: 0% 50%;
			}
			50% {
				background-position: 100% 50%;
			}
			100% {
				background-position: 0% 50%;
			}
		}
	}
</style>
