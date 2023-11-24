<!-- ! SCRIPT ------------------------------------------------------------------------------------->

<script lang="ts">
	import { onMount } from 'svelte';

	let sections: HTMLElement[] = []; // Initialize an empty array to store the sections
	let scrollspy: HTMLElement[] = []; // Initialize an empty array to store the sections
	let activeSection: string | null = null; // Variable to store the active section ID

	onMount(() => {
		let document = window.document;

		sections = Array.from(document.querySelectorAll('.section'));
		scrollspy = Array.from(document.querySelectorAll('.scrollspy-link'));

		window.addEventListener('resize', () => {
			updateScrollspyLinks();
		});
		window.addEventListener('scroll', scrollHandler);

		const displayTime = document.querySelector('.timer');
		function showTime() {
			let time = new Date();
			if (displayTime) {
				displayTime.innerText = time.toLocaleTimeString('en-US', { hour12: false });
			}
			setTimeout(showTime, 1000);
		}
		showTime();

		function scrollHandler() {
			/* Function to update the scrollspy links based on window width */
			const scrollPosition = window.pageYOffset + 100;

			sections.forEach((section, index) => {
				const sectionHeight = section.offsetHeight + 20;
				const sectionTop = section.offsetTop;
				const sectionId = section.getAttribute('id');

				// Get the scrollspy link for the section
				const scrollspyLink = scrollspy[index];

				// Check if the current scroll position is within the section
				if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
					activeSection = sectionId;
					scrollspyLink.style.color = '#FFD84C';
					scrollspyLink.style.backgroundColor = 'rgba(5, 5, 5, 1)';
					scrollspyLink.style.borderRadius = '10px';
					scrollspyLink.style.transition = 'all 0.25s ease-in-out';
					scrollspyLink.style.fontWeight = 'bold';
				} else {
					scrollspyLink.style.color = '';
					scrollspyLink.style.backgroundColor = '';
					scrollspyLink.style.borderRadius = '';
					scrollspyLink.style.transition = '';
					scrollspyLink.style.fontWeight = '';
				}
			});
		}

		const updateScrollspyLinks = () => {
			/* Function to update the scrollspy links based on window width */
			scrollspy.forEach((link, index) => {
				const targetSectionId = link.getAttribute('href')?.substring(1);
				const targetSection = targetSectionId
					? document.getElementById(targetSectionId)
					: undefined;
				const targetSectionHeading = targetSection?.querySelector('h2');
				const targetSectionText = targetSectionHeading?.innerText;
				let targetSectionContent = '';

				if (window.innerWidth < 768) {
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
		updateScrollspyLinks();
	});
</script>

<!-- ! STRUCT ------------------------------------------------------------------------------------->

<div class="right-card">
	<!-- add the different sections as scrollspy -->
	<nav class="scrollspy">
		<!-- On load change the child of each a to the text in the section h1 -->
		<a href="#section1" class="scrollspy-link"> </a>
		<a href="#section2" class="scrollspy-link"> </a>
		<a href="#section3" class="scrollspy-link"> </a>
		<a href="#section4" class="scrollspy-link"> </a>
		<a href="#section5" class="scrollspy-link"> </a>
		<a href="#section6" class="scrollspy-link"> </a>
	</nav>
	<div id="container-time">
		<div class="display-time"><p class="timer" /></div>
	</div>
</div>

<!-- ! STYLE -------------------------------------------------------------------------------------->

<style lang="scss">
	@import 'static/styles/styles.scss';

	// Acquire the glass morph effect from the global.scss file as a callable mixin
	@mixin glass-time-morph-background {
		@each $property, $value in $color-primary-glass-morph-content {
			#{$property}: $value;
		}
	}

	.right-card {
		position: -webkit-sticky;
		position: sticky;
		z-index: 5;

		top: $height-navbar + $separation-big * 2;

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: $separation-big;

		color: $color-primary-light;

		.scrollspy {
			@include glass-time-morph-background;

			display: flex;
			justify-content: space-between;
			flex-direction: column;
			gap: $separation-small;

			padding: $separation-medium-small;

			@media screen and (max-width: $breakpoint-tablet) {
				padding: $separation-big;
			}

			.scrollspy-link {
				color: $color-primary-light;
				font-family: $font-family-sans;

				padding: $separation-small;

				text-decoration: none;

				// Position the scrollspy links to center
				display: flex;
				justify-content: center;

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
		}

		#container-time {
			@include glass-time-morph-background;
			position: relative;
			border-radius: $border-radius-big;

			width: 100%;
			margin: 0;

			text-align: center;

			.timer {
				margin: 0;
				padding: $separation-medium-small;
				font-family: $font-family-mono;
			}

			.display-time:hover {
				cursor: pointer;
				filter: brightness(1.2);
				transform: scale(1.1);
				transition: all 0.2s ease-in-out;
			}
		}

		@media screen and (max-width: $breakpoint-tablet) {
			#container-time {
				transform: rotate(90deg);

				margin: $separation-big 0 0 0;

				text-align: center;
				padding: 0;

				.timer {
					margin: 0;
					padding: $separation-big;
				}
			}
		}

		@media screen and (max-width: $breakpoint-mobile) {
			display: grid;
			grid-template-columns: 1fr auto;

			.scrollspy {
				flex-direction: row;
				align-items: center;
				justify-content: space-around;

				margin: 0;
				padding: $separation-medium-small;

				font-family: $font-family-mono;

				.scrollspy-link {
					padding: 0;
				}
			}

			#container-time {
				transform: rotate(0deg);

				width: min-content;
				margin: 0;

				.timer {
					margin: 0;
					padding: $separation-medium-small;
				}
			}
		}
	}
</style>
