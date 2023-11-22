<!-- ! Content -->

<script lang="ts">
	import { onMount } from 'svelte';
	import Contact from './Contact.svelte';
	import Timeline from './Timeline.svelte';
	import Navbar from './Navbar.svelte';
	import Footer from './Footer.svelte';

	// console.log('\nContent component NOT-loaded\n');

	let sections: HTMLElement[] = []; // Initialize an empty array to store the sections
	let scrollspy: HTMLElement[] = []; // Initialize an empty array to store the sections
	let activeSection: string | null = null; // Variable to store the active section ID

	onMount(() => {
		// Move the code inside onMount
		// console.log('Content component mounted');

		let document = window.document;
		let currentPageWidth = window.innerWidth;

		sections = Array.from(document.querySelectorAll('.section'));
		scrollspy = Array.from(document.querySelectorAll('.scrollspy-link'));

		window.addEventListener('scroll', scrollHandler);

		// Function to update the scrollspy links based on window width
		const updateScrollspyLinks = () => {
			scrollspy.forEach((link, index) => {
				const targetSectionId = link.getAttribute('href')?.substring(1);
				const targetSection = targetSectionId
					? document.getElementById(targetSectionId)
					: undefined;
				const targetSectionHeading = targetSection?.querySelector('h1');
				const targetSectionText = targetSectionHeading?.innerText;
				let targetSectionContent = '';

				if (window.innerWidth < 800) {
					if (targetSectionText) {
						const match = targetSectionText.match(/^\d/);
						targetSectionContent = match ? match[0] : '';
					}
				} else {
					if (targetSectionText) {
						const match = targetSectionText.match(/^\d+\.\s(.+)/);
						targetSectionContent = match ? match[0].replace(/^\d+\.\s/, '') : '';
					}
				}

				link.textContent = targetSectionContent.trim();
			});
		};

		updateScrollspyLinks(); // Initial call to set the scrollspy links based on window width

		window.addEventListener('resize', () => {
			// Update the scrollspy links when the window is resized
			updateScrollspyLinks();
		});

		function scrollHandler() {
			// Get the current scroll position
			const scrollPosition = window.pageYOffset + 60;
			// console.log('scrollPosition: ', scrollPosition);

			// Loop through the sections
			sections.forEach((section, index) => {
				// Get the height of the section
				const sectionHeight = section.offsetHeight + 20;

				// Get the top position of the section
				const sectionTop = section.offsetTop - 20;
				// console.log('sectionTop: ', sectionTop);

				// Get the id of the section
				const sectionId = section.getAttribute('id');

				// Get the corresponding scrollspy link for the section
				const scrollspyLink = scrollspy[index];

				// Check if the current scroll position is within the section
				if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
					// Set the active section ID
					// console.log('Active section: ', sectionId);
					activeSection = sectionId;

					// Apply the style to the corresponding scrollspy link
					//   scrollspyLink.style.fontWeight = 'bold';
					scrollspyLink.style.color = '#FFD84C';
					scrollspyLink.style.backgroundColor = 'rgba(5, 5, 5, 1)';
					// scrollspyLink.style.border = '0.5px solid rgba(255, 255, 255, 0.05)';
					scrollspyLink.style.borderRadius = '10px';
					scrollspyLink.style.transition = 'all 0.25s ease-in-out';
					scrollspyLink.style.fontWeight = 'bold';
					// scrollspyLink.style.transitionDelay = '0.1s';
				} else {
					// Reset the style for inactive sections
					//   scrollspyLink.style.fontWeight = 'normal';
					scrollspyLink.style.color = '';
					scrollspyLink.style.backgroundColor = '';
					// scrollspyLink.style.border = '';
					scrollspyLink.style.borderRadius = '';
					scrollspyLink.style.transition = '';
					scrollspyLink.style.fontWeight = '';
					// scrollspyLink.style.transitionDelay = '';
				}
			});
		}

		const displayTime = document.querySelector('.timer');
		// Time
		function showTime() {
			let time = new Date();
			if (displayTime) {
				displayTime.innerText = time.toLocaleTimeString('en-US', { hour12: false });
			}
			setTimeout(showTime, 1000);
		}

		showTime();

		// * Check when left-card-heading width = 0 and execute changeText function
		const title = document.querySelector('.title');

		const resizeObserver = new ResizeObserver((entries) => {
			for (const entry of entries) {
				if (entry.target === title && entry.contentRect.width === 0) {
					changeText();
					break;
				}
			}
		});

		resizeObserver.observe(title);

		function changeText() {
			const text = [
				'Hi, I am Carlos Iborra',
				'Welcome to my Portfolio!',
				'Happy coding!',
				'Have a nice day!',
				'Hello World!',
				'¡Hola Mundo!',
				'Saluton mondo!',
				'Привет, мир!',
				'Hallo Welt!',
				'Salut monde!'
			];

			const randomText = text[Math.floor(Math.random() * text.length)];
			title.textContent = randomText;
		}
	});
</script>

<!-- ! ------------------------------------>

<title>Carlos Iborra | Portfolio</title>
<div class="home-page">
	<Navbar />
	<div id="container" class="card-wrapper">
		<div class="left-card">
			<div class="left-card-heading">
				<span class="title-holder">
					<h1 class="title">Hi, I am Carlos Iborra</h1>
				</span>
			</div>

			<div class="left-card-body">
				<div id="section1" class="section">
					<div class="section-wrapper">
						<h1>0. Introduction</h1>
						<p>
							I am an Spanish student currently studying Computer Science Engineering at Universidad
							Carlos III de Madrid. I've been passionate for programming since I was 8, always
							looking for new challenges thereby improving my skills. If you want to learn more
							about my present and future career, feel free to visit my LinkedIn profile.
						</p>
					</div>
				</div>

				<div id="section2" class="section">
					<div class="section-wrapper">
						<h1>1. Roadmap</h1>
						<p>Lorem ipsum dolor sit amet consectetur adipi sicing elit. Quisquam, quod.</p>
					</div>
				</div>

				<div id="section3" class="section">
					<div class="section-wrapper">
						<h1>2. Timeline</h1>
						<p>Lorem ipsum dolor sit amet consectetur adipi sicing elit. Quisquam, quod.</p>
						<Timeline />
					</div>
				</div>

				<div id="section4" class="section">
					<div class="section-wrapper">
						<h1>3. Stats</h1>
						<p>
							This are my overall stats in the VS Code editor (Arch Linux + Windows). Looking foward
							adding compatibility with Neovim, Konsole and Terminal.
						</p>
						<p>
							For better up-to date stats, visit my <a href="https://github.com/carlosiborra"
								>GitHub</a
							> profile.
						</p>
						<!-- This better GitHub stats were provided by https://github.com/jstrieb/github-stats -->
						<div class="github-stats">
							<img
								class="img-fluid"
								src="https://github-readme-stats.vercel.app/api/?username=carlosiborra&count_private=true&theme=dark&show_icons=true&title_color=00d612&show_owner&icon_color=00d612"
								alt="Carlos Iborra GitHub Stats"
							/>
							<img
								class="img-fluid"
								src="https://github-readme-stats.vercel.app/api/top-langs/?username=carlosiborra&count_private=true&theme=dark&show_icons=true&title_color=00d612&show_owner&icon_color=00d612"
								alt="Carlos Iborra Most Used Languages"
							/>
						</div>
					</div>
				</div>

				<div id="section5" class="section">
					<div class="section-wrapper">
						<h1>4. Social Media</h1>
						<!-- <p>Lorem ipsum dolor sit amet consectetur adipi sicing elit. Quisquam, quod.</p> -->
						<Contact />
					</div>
				</div>
			</div>
		</div>
		<div class="right-card">
			<div class="card" id="container-scrollspy">
				<!-- add the different sections as scrollspy -->
				<nav class="scrollspy">
					<!-- On load change the child of each a to the text in the section h1 -->
					<a href="#section1" class="scrollspy-link"> </a>
					<a href="#section2" class="scrollspy-link"> </a>
					<a href="#section3" class="scrollspy-link"> </a>
					<a href="#section4" class="scrollspy-link"> </a>
					<a href="#section5" class="scrollspy-link"> </a>
				</nav>
			</div>
			<div id="container-time">
				<div class="display-time"><p class="timer" /></div>
			</div>
		</div>
	</div>
</div>
<Footer />

<!-- ! ------------------------------------>

<style lang="scss">
	// Import global styles
	@import '../global.scss';
	// @import changeText;

	// Acquire the glass morph effect from the global.scss file as a callable mixin
	@mixin glass-time-morph-background {
		@each $property, $value in $color-primary-glass-morph-content {
			#{$property}: $value;
		}
	}

	@mixin glass-content-morph-background {
		@each $property, $value in $color-secondary-glass-morph-content {
			#{$property}: $value;
		}
	}

	.home-page {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		// width: 100%;
		// height: 100vh;
	}

	#container {
		display: flex;
		flex-direction: row;
		flex: calc(100% - $width-scrollspy) $width-scrollspy;
		width: 100%;
		margin: calc($navbar-height + 20px * 2) 20px 20px 20px;

		@media screen and (max-width: 550px) {
			flex-direction: column;
			align-items: center;
		}

		@media screen and (min-width: 2000px) {
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}

		.left-card {
			background-color: none;
			width: calc(100% - $width-scrollspy);

			@media screen and (max-width: 550px) {
				flex-direction: column;
				align-items: center;
				margin-top: 90px;
			}

			.left-card-heading {
				@include glass-content-morph-background;
				margin: 0 0 20px 20px;
				gap: 20px;
				border-radius: 15px;
				z-index: 1;
				padding: 20px 0px;

				.title-holder {
					width: min-content;
					height: max-content;
					font-size: 100%;

					.title {
						padding: 0px 40px;
						font-family: $font-code;
						font-size: 1.8em;
						color: $color-primary-light;
						width: min-content;
						max-width: min-content;
						height: min-content;
						overflow: hidden;
						white-space: nowrap;
						border-right: 3px solid $color-primary-light;
						animation:
							typewriter 5s steps(7) infinite,
							blinking-cursor 0.8s infinite;
						animation-fill-mode: forwards;

						@media screen and (max-width: 1000px) {
							font-size: 20px;
						}

						@media screen and (max-width: 550px) {
							font-size: 20px;
						}

						@media screen and (max-width: 500px) {
							font-size: 15px;
						}

						@media screen and (max-width: 400px) {
							font-size: 15px;
						}
					}
				}

				@media screen and (max-width: 550px) {
					width: calc(100% - 40px);
				}
			}

			@keyframes typewriter {
				0% {
					width: 0%;
				}
				25% {
					width: 60%;
				}
				48% {
					width: 70%;
				}
				50% {
					width: 70%;
				}
				55% {
					width: 70%;
				}
				75% {
					width: 60%;
				}
				85% {
					width: 30%;
				}
				100% {
					width: 0%;
				}
			}

			@keyframes blinking-cursor {
				from {
					border-color: transparent;
				}
				to {
					border-color: $color-primary-light;
				}
			}

			.left-card-body {
				// width: calc(80% - 20px);
				background-color: none;
				display: flex;
				margin: 20px 0 0 20px;
				flex-direction: column;
				gap: 20px; /* Add a gap between sections */
				border-radius: 15px;
				z-index: 1;

				.section {
					@include glass-content-morph-background;
					height: min-content;
					border-radius: 15px;
					// border: 1px solid $color-tertiary;

					.section-wrapper {
						color: $color-primary-light;
						font-family: $font-primary;
						font-size: 14px;
						padding: 40px 40px 40px 40px;
						margin: 5px 0 20px 0;
						display: flex;
						flex-direction: column;

						h1 {
							font-size: 30px;
							font-weight: 500;
							font-family: $font-serif;
							margin-bottom: 20px;
							margin-top: 0px;
							color: #ffd84c;
						}

						p {
							margin: 0;
						}
					}

					.github-stats {
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						align-items: left;
						flex-wrap: wrap;

						.img-fluid {
							// set max width of the image to the one on the div it is inside
							max-width: 100%;
							margin: 40px 0 0 0;
						}
					}
				}

				@media screen and (max-width: 550px) {
					width: calc(100% - 40px);
				}
			}

			// @media screen and (max-width: 799px) {
			// 	margin-right: 140px;
			// }

			// @media screen and (max-width: 550px) {
			// 	margin-right: 0px;
			// }

			// // Else
			// margin-right: calc(190px);
		}

		// make right card occupy 1/5 of the container
		.right-card {
			position: fixed;
			z-index: 1;
			right: 0;
			top: 0;

			height: 100%;
			width: 200px;
			margin: calc($navbar-height + 20px) auto 0 auto;

			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 50px;

			color: $color-primary-light;

			#scrollspy-container {
				height:min-content;  
			}

			// #scrollspy-container {
				.scrollspy {
					position: relative;
					@include glass-time-morph-background;
					padding: 20px;
					display: flex;

					justify-content: space-between;

					flex-direction: column;
					gap: 20px;
					height: 100%;
					width: min-content;

					@media screen and (max-width: 450px) {
						padding: 10px;
					}

					@media screen and (max-width: 360px) {
						padding: 1px;
					}

					.scrollspy-link {
						color: $color-primary-light;
						font-family: $font-secondary;

						padding: 10px;

						font-size: 1rem;
						text-decoration: none;

						// Position the scrollspy links to center
						display: flex;
						justify-content: center;

						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;

						&:hover {
							color: $color-secondary-light;
							font-weight: bold;
						}

						&:active {
							color: $color-text-active;
						}

						// On click, same effect as hover
						&:focus {
							color: $color-text-active;
						}

						behavior: smooth;
					}

					@media screen and (max-width: 550px) {
						position: fixed;
						display: flex;
						top: 100px;
						flex-direction: row;
						align-items: center;
						justify-content: center;
						border-radius: 10px;
						left: 20px;
						right: 0;
						width: calc(100% - 180px);
						height: 40px;
						margin: 0;
						padding: 0px;
						// background: rgba(255, 255, 255, 0.9);
					}
				}

				@media screen and (min-width: 2000px) {
					position: fixed;
					left: 1830px;
				}
			// }
		}

		#container-time {
			position: relative;
			@include glass-time-morph-background;
			font-family: $font-code;
			// padding: 10px 10px;
			border-radius: 10px;

			.timer {
				margin: 0;
				padding: 20px;
			}

			.display-time:hover {
				background: #ffd868;
				box-shadow: 0 0 30px#ffd868;
				color: #272727;
				cursor: pointer;
			}

			// On media query < 550px, spin the clock 90deg

			@media screen and (max-width: $breakpoint-tablet) {
				text-align: center;
				width: min-content;
				height: min-content;
				padding: 0;
				transform: rotate(90deg);

				.timer {
					margin: 0;
					padding: 20px;
				}
			}

			@media screen and (max-width: 550px) {
				position: absolute;
				position: fixed;
				// left: 20px;
				right: 20px;
				top: 60px;
				text-align: center;
				margin: 40px 0px 0px 0px;
				width: 100px;
				height: calc(20px);
				transform: rotate(0deg);
				// background: rgba(255, 255, 255, 0.9);
			}
		}
	}
</style>
