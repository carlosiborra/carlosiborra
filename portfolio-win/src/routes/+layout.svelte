<!-- ! SCRIPTS ------------------------------------------------------------------------------------>

<script lang="ts">
	// import Balls from './components/Balls.svelte';
	import Welcome from '../components/Welcome.svelte';
	import Footer from '../components/common/Footer.svelte';
	import Navbar from '../components/common/Navbar.svelte';
</script>

<!-- ! STRUCTURE ---------------------------------------------------------------------------------->

<Welcome />
<body id="body-content">
	<div id="navbar">
		<Navbar />
	</div>

	<div id="content">
		<slot />

		<div id="footer">
			<Footer />
		</div>
	</div>
</body>

<!-- ! STYLE -------------------------------------------------------------------------------------->

<style lang="scss">
	@import 'static/styles/styles.scss';

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

	#body-content {
		padding: $separation-big;
		margin: 0;

		position: relative;

		scroll-behavior: smooth;
		background-color: #fff;

		&::before {
			background: radial-gradient(at 10% 61%, rgb(145, 236, 147) 0px, transparent 30%),
				radial-gradient(at 1% 8%, rgb(176, 193, 45) 0px, transparent 40%),
				radial-gradient(at 92% 12%, rgb(113, 97, 219) 0px, transparent 30%),
				radial-gradient(at 31% 74%, rgb(205, 68, 155) 0px, transparent 40%),
				radial-gradient(at 31% 16%, rgb(72, 138, 213) 0px, transparent 40%),
				radial-gradient(at 88% 12%, rgb(249, 90, 90) 0px, transparent 50%),
				radial-gradient(at 95% 90%, rgb(92, 183, 43) 0px, transparent 40%);
			background-size: 130% 130%;

			-webkit-animation: background-image-animation 5s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
			-moz-animation: background-image-animation 5s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
			-o-animation: background-image-animation 5s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
			animation: background-image-animation 5s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
		}

		// .background-image {
		// 	background: radial-gradient(at 10% 61%, hsla(121, 78%, 91%, 1) 0px, transparent 0%),
		// 		radial-gradient(at 1% 8%, rgb(219, 238, 71) 0px, transparent 100%),
		// 		radial-gradient(at 92% 12%, rgb(204, 136, 223) 0px, transparent 100%),
		// 		radial-gradient(at 31% 74%, rgb(213, 146, 187) 0px, transparent 100%),
		// 		radial-gradient(at 31% 16%, rgb(136, 186, 228) 0px, transparent 100%),
		// 		radial-gradient(at 88% 12%, rgb(210, 162, 162) 0px, transparent 100%),
		// 		radial-gradient(at 95% 90%, rgb(163, 234, 127) 0px, transparent 100%);
		// 	background-size: 130% 130%;

		// 	-webkit-animation: background-image-animation 5s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
		// 	-moz-animation: background-image-animation 5s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
		// 	-o-animation: background-image-animation 5s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
		// 	animation: background-image-animation 5s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
		// }

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
