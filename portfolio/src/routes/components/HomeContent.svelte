<!-- ! Content -->

<script lang="ts">
	import { onMount } from 'svelte';
	import Contact from './Contact.svelte';

	// console.log('\nContent component NOT-loaded\n');

	let sections: HTMLElement[] = []; // Initialize an empty array to store the sections
	let scrollspy: HTMLElement[] = []; // Initialize an empty array to store the sections
	let activeSection: string | null = null; // Variable to store the active section ID

	onMount(() => {
		// Move the code inside onMount
		// console.log('Content component mounted');

		let document = window.document;

		sections = Array.from(document.querySelectorAll('.section'));
		scrollspy = Array.from(document.querySelectorAll('.scrollspy-link'));

		window.addEventListener('scroll', scrollHandler);

		// Get the scrollspy links and add child corresponding to their section h1 text
		scrollspy.forEach((link) => {
			const targetSectionId = link.getAttribute('href')?.substring(1); // Use optional chaining to avoid undefined
			const targetSection = targetSectionId ? document.getElementById(targetSectionId) : undefined; // Check if targetSectionId is defined
			const targetSectionHeading = targetSection?.querySelector('h1');
			const targetSectionText = targetSectionHeading?.innerText;
			if (targetSectionText) {
				const child = document.createElement('span');
				child.textContent = targetSectionText;
				link.appendChild(child);
			}
		});

		function scrollHandler() {
			// Get the current scroll position
			const scrollPosition = window.pageYOffset;
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
					scrollspyLink.style.backgroundColor = 'rgba(13, 13, 13, 1)';
					// scrollspyLink.style.border = '0.5px solid rgba(255, 255, 255, 0.05)';  
					scrollspyLink.style.borderRadius = '10px';
				} else {
					// Reset the style for inactive sections
					//   scrollspyLink.style.fontWeight = 'normal';
					scrollspyLink.style.color = '';
					scrollspyLink.style.backgroundColor = '';
					// scrollspyLink.style.border = '';
					scrollspyLink.style.borderRadius = '';
				}
			});
		}

	});

</script>

<div class="container">
	<div class="left-card">
		<!-- Add your content for the left card here -->

		<div id="section1" class="section">
			<div class="section-wrapper">
				<h1>Introduction</h1>
				<p>I am an Spanish student currently studying Computer Science Engineering at Universidad Carlos III de Madrid.
					I've been passionate for programming since I was 8, always looking for new challenges thereby improving my skills.
					If you want to learn more about my present and future career, feel free to visit my LinkedIn profile.</p>
			</div>
		</div>

		<div id="section2" class="section">
			<div class="section-wrapper">
				<h1>Roadmap</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipi sicing elit. Quisquam, quod.</p>
			</div>
		</div>

		<div id="section3" class="section">
			<div class="section-wrapper">
				<h1>Timeline</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipi sicing elit. Quisquam, quod.</p>
			</div>
		</div>

		<div id="section4" class="section">
			<div class="section-wrapper">
				<h1>Social Media</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipi sicing elit. Quisquam, quod.</p>
				<Contact />
			</div>
		</div>
	</div>

	<div class="right-card">
		<div class="card">
			<!-- add the different sections as scrollspy -->
			<nav class="scrollspy">
				<!-- On load change the child of each a to the text in the section h1 -->
				<a href="#section1" class="scrollspy-link"> </a>
				<a href="#section2" class="scrollspy-link"> </a>
				<a href="#section3" class="scrollspy-link"> </a>
				<a href="#section4" class="scrollspy-link"> </a>
			</nav>
		</div>
	</div>
</div>

<style lang="scss">
	
	// Import global styles
	@import '../global.scss';

	// Acquire the glass morph effect from the global.scss file as a callable mixin
	@mixin glass-morph-styles {
		@each $property, $value in $color-primary-glass-morph {
			#{$property}: $value;
		}
	}

	.container {
		display: flex;
		gap: 0px;
		width: 100%;

		// make left card occupy 4/5 of the container
		.left-card {
			width: calc(80% - 30px);
			background-color: rgba(14, 14, 14, 1);
			margin: 20px 10px 20px 20px;
			display: flex;
			flex-direction: column;
			gap: 20px; /* Add a gap between sections */
			border-radius: 15px;
			z-index: 1;

			.section {
				@include glass-morph-styles;
				background: rgba(14, 14, 14, 1);
				height: min-content;
				border-radius: 15px;
				// border: 1px solid $color-tertiary;

				.section-wrapper {
					color: $color-primary-light;
					font-family: $font-primary;
					padding: 40px 40px 40px 40px;
					display: flex;
					flex-direction: column;

					h1 {
						font-size: 2rem;
						font-weight: 600;
						margin-bottom: 5px;
						margin-top: 0px;
						color: #ffd84c;
					}

					p {
						font-family: $font-secondary;
					}
				}
			}
		}

		// make right card occupy 1/5 of the container
		.right-card {
			position: fixed;
			// @include glass-morph-styles;
			background: rgba(14, 14, 14, 0.7);
			width: calc(20% - 30px);
			// Get the height of scrollspy
			height: min-content;
			right: 0;
			top: 0;
			bottom: 0;
			margin: calc($navbar-height + 20px) 20px 20px 10px;
			border-radius: 15px;
			// border: 2px solid $color-tertiary;
			color: $color-primary-light;
			z-index: 1;

			.scrollspy {
				padding: 20px;
				display: flex;
				flex-direction: column;
				gap: 20px;
				overflow-y: auto;
				height: 100%;

				.scrollspy-link {
					color: $color-primary-light;
					font-family: $font-secondary;

					padding: 10px;

					font-size: 1rem;
					text-decoration: none;

					// Position the scrollspy links to center
					display: flex;
					justify-content: center;

					&:hover {
						color: $color-secondary-light;
					}

					&:active {
						color: $color-text-active;
					}
				}
			}
		}
	}
</style>
