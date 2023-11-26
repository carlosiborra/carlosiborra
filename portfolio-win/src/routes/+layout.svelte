<script lang="ts">
	import Welcome from '../components/Welcome.svelte';
	import Footer from '../components/common/Footer.svelte';
	import Navbar from '../components/common/Navbar.svelte';
	import Scrollspy from '../components/common/Scrollspy.svelte';
	import gsap from 'gsap';

	import { onMount } from 'svelte';

	onMount(() => {
		const svgContainer = document.getElementById('svg-container');
		const svgPath = '/img/bg_icons';

		// Function to get a random number between min and max (inclusive)
		function getRandomNumber(min: number, max: number): number {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		// Function to load and add SVGs to the svgContainer
		async function loadAndAddSVGs() {
			for (let i = 0; i < 30; i++) {
				const randomNumber = getRandomNumber(0, 11); // Assuming you have 100 SVGs in the directory
				const svgURL = `${svgPath}/${randomNumber}.svg`;

				try {
					const response = await fetch(svgURL);
					const svgText = await response.text();

					const parser = new DOMParser();
					const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
					const svgElement = svgDoc.documentElement;

					// set the size of the svg
					const svgSize = getRandomNumber(10, 40);
					svgElement.setAttribute('width', svgSize + 'px');
					svgElement.setAttribute('height', svgSize + 'px');

					// set angle of rotation
					const svgRotation = getRandomNumber(-45, 45);
					svgElement.setAttribute('transform', `rotate(${svgRotation})`);

					// set class of svg
					svgElement.setAttribute('class', 'svg-icon');
					
					// set random opacity
					const svgOpacity = getRandomNumber(30, 100);
					svgElement.setAttribute('opacity', `${svgOpacity}%`);

					// Randomly set the position of the svg
					const svgPositionX = getRandomNumber(0, 100);
					const svgPositionY = getRandomNumber(0, 100);
					svgElement.style.top = `${svgPositionY}dvh`;
					svgElement.style.left = `${svgPositionX}dvw`;

					svgElement.style.position = 'fixed';

					svgContainer!.appendChild(svgElement);

					// Apply parallax effect using GSAP
					gsap.to(svgElement, {
						x: getRandomNumber(-100, 100),
						y: getRandomNumber(-100, 100),
						rotation: getRandomNumber(-20, 20),
						duration: 5,
						repeat: -1,
						yoyo: true
					});

				} catch (error) {
					console.error(`Failed to load SVG: ${svgURL}`, error);
				}
			}
		}

		loadAndAddSVGs();
	});


</script>

<!-- ! STRUCTURE ---------------------------------------------------------------------------------->

<div id="welcome-container">
	<Welcome />
</div>

<!-- <Scrollspy /> -->
<body id="body-content">
	<div id="svg-container"></div>
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

	#svg-container {
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		position: fixed;
		background-color: none;
		pointer-events: none;
		z-index: 0;
	}

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

		// https://colorhunt.co/palette/352f445c5470b9b4c7faf0e6

		background: radial-gradient(at 5% 40%, rgb(54, 48, 69) 0px, transparent 50%),
			radial-gradient(at 1% 8%, rgb(184, 179, 199) 0px, transparent 50%),
			radial-gradient(at 31% 74%, rgb(91, 83, 110) 0px, transparent 50%),
			radial-gradient(at 31% 74%, rgb(92, 84, 112) 0px, transparent 50%),
			radial-gradient(at 88% 12%, rgb(54, 48, 69) 0px, transparent 50%),
			radial-gradient(at 95% 90%, rgb(92, 84, 112) 0px, transparent 50%);
		background-size: 130% 130%;

		-webkit-animation: background-image-animation 5s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
		-moz-animation: background-image-animation 5s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
		-o-animation: background-image-animation 5s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
		animation: background-image-animation 5s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;

		// background: radial-gradient(at 10% 61%, rgb(201, 255, 202) 0px, transparent 30%),
		// 	radial-gradient(at 1% 8%, rgb(245, 255, 170) 0px, transparent 40%),
		// 	radial-gradient(at 92% 12%, rgb(189, 179, 255) 0px, transparent 30%),
		// 	radial-gradient(at 31% 74%, rgb(255, 148, 216) 0px, transparent 40%),
		// 	radial-gradient(at 31% 16%, rgb(169, 208, 252) 0px, transparent 40%),
		// 	radial-gradient(at 88% 12%, rgb(255, 162, 162) 0px, transparent 50%),
		// 	radial-gradient(at 95% 90%, rgb(183, 252, 147) 0px, transparent 40%);
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
