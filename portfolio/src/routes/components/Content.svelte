<!-- ! Content -->

<script lang="ts">
	import Footer from './Footer.svelte';

	import { onMount } from 'svelte';

	console.log('\nContent component NOT-loaded\n');

	let sections: HTMLElement[] = []; // Initialize an empty array to store the sections
	let scrollspy: HTMLElement[] = []; // Initialize an empty array to store the sections
	let activeSection: string | null = null; // Variable to store the active section ID

	onMount(() => {
		// Move the code inside onMount
		console.log('Content component mounted');
		
		let document = window.document;

		sections = Array.from(document.querySelectorAll('.section'));
		scrollspy = Array.from(document.querySelectorAll('.scrollspy-link'));

		window.addEventListener('scroll', scrollHandler);

		function scrollHandler() {
		  // Get the current scroll position
		  const scrollPosition = window.pageYOffset;
		  console.log('scrollPosition: ', scrollPosition);

		  // Loop through the sections
		  sections.forEach((section, index) => {
		    // Get the height of the section
		    const sectionHeight = section.offsetHeight + 20;
		
		    // Get the top position of the section
		    const sectionTop = (section.offsetTop  - 20);
			console.log('sectionTop: ', sectionTop);
		
		    // Get the id of the section
		    const sectionId = section.getAttribute('id');
		
		    // Get the corresponding scrollspy link for the section
		    const scrollspyLink = scrollspy[index];
		
		    // Check if the current scroll position is within the section
		    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
		      // Set the active section ID
		      console.log('Active section: ', sectionId);
		      activeSection = sectionId;
			
		      // Apply the style to the corresponding scrollspy link
		      scrollspyLink.style.fontWeight = 'bold';
		      scrollspyLink.style.color = '#00bfff';
			  scrollspyLink.style.backgroundColor = 'rgba(14, 14, 14, 0.9)';
			  scrollspyLink.style.borderRadius = '5px';
			
		    } else {
		      // Reset the style for inactive sections
		      scrollspyLink.style.fontWeight = 'normal';
		      scrollspyLink.style.color = '';
			  scrollspyLink.style.backgroundColor = '';
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
				<h1>Section 1</h1>
				<p> Lorem ipsum dolor sit amet consectetur adipi sicing elit. Quisquam, quod. </p>
			</div>
		</div>
		
		<div id="section2" class="section">
			<div class="section-wrapper">
				<h1>Section 2</h1>
				<p> Lorem ipsum dolor sit amet consectetur adipi sicing elit. Quisquam, quod. </p>
			</div>
		</div>	
		
		<div id="section3" class="section">
			<div class="section-wrapper">
				<h1>Section 3</h1>
				<p> Lorem ipsum dolor sit amet consectetur adipi sicing elit. Quisquam, quod. </p>
			</div>
		</div>

		<div id="section4" class="section">
			<div class="section-wrapper">
				<h1>Section 4</h1>
				<p> Lorem ipsum dolor sit amet consectetur adipi sicing elit. Quisquam, quod. </p>
			</div>
		</div>

		<div id="section5" class="section">
			<div class="section-wrapper">
				<h1>Section 5</h1>
				<p> Lorem ipsum dolor sit amet consectetur adipi sicing elit. Quisquam, quod. </p>
			</div>
		</div>

		<div id="section6" class="section">
			<div class="section-wrapper">
				<h1>Section 6</h1>
				<p> Lorem ipsum dolor sit amet consectetur adipi sicing elit. Quisquam, quod. </p>
			</div>
		</div>

		<div id="section7" class="section">
			<div class="section-wrapper">
				<h1>Section 7</h1>
				<p> Lorem ipsum dolor sit amet consectetur adipi sicing elit. Quisquam, quod. </p>
			</div>
		</div>
	
	</div>

	<div class="right-card">
		<div class="card">
			<!-- add the different sections as scrollspy -->
			<nav class="scrollspy">
				<a href="#section1" class="scrollspy-link">Section 1</a>
				<a href="#section2" class="scrollspy-link">Section 2</a>
				<a href="#section3" class="scrollspy-link">Section 3</a>
				<a href="#section4" class="scrollspy-link">Section 4</a>
				<a href="#section5" class="scrollspy-link">Section 5</a>
				<a href="#section6" class="scrollspy-link">Section 6</a>
				<a href="#section7" class="scrollspy-link">Section 7</a>
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
			background-color: none;
			margin: 20px 10px 20px 20px;
			display: flex;
			flex-direction: column;
			gap: 20px; /* Add a gap between sections */
			z-index: 1;
			
			.section {
				@include glass-morph-styles;
				background: rgba(14, 14, 14, 1);
				height: 400px;
				border-radius: 10px;
		    	border: 2px solid $color-tertiary;

				.section-wrapper {
					color: $color-primary-light;
					font-family: $font-primary;
					padding: 20px 40px;
					display: flex;
					flex-direction: column;
				}

			}

		}
		
		// make right card occupy 1/5 of the container
		.right-card {
			position: fixed;
			// @include glass-morph-styles;
			background: rgba(14, 14, 14, .7);
			width: calc(20% - 30px);
			// Get the height of scrollspy
			height: min-content;
			right: 0;
			top: 0;
			bottom: 0;
			margin: calc($navbar-height + 20px) 20px 20px 10px;
			border-radius: 10px;
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
					font-family: $font-primary;
					
					padding: 10px;

					font-size: 1.5rem;
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