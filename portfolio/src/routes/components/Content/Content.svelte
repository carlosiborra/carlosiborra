<!-- ! Content -->

<!-- import Footer.svelte -->
<script>
	import Footer from '../Footer/Footer.svelte';
	import '../../../../static/styles/global.scss';
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
	
	</div>

	<div class="right-card">
		<div class="card">Lateral Card</div>
	</div>
</div>

<style lang="scss">

	// Import global styles  
	@import '../../../../static/styles/global.scss';

	// Acquire the glass morph effect from the global.scss file as a callable mixin
	@mixin glass-morph-styles {
	@each $property, $value in $color-primary-glass-morph {
		#{$property}: $value;
		}
	}

	.container {
		display: flex;
		gap: 0px;

		// make left card occupy 4/5 of the container
		.left-card {
			width: calc(80% - 30px);
			background-color: none;
			margin: 20px 10px 20px 20px;
			display: flex;
			flex-direction: column;
			gap: 20px; /* Add a gap between sections */
			
			.section {
				@include glass-morph-styles;
				background: rgba(14, 14, 14, 1);
				height: 400px;
				border-radius: 10px;

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
			@include glass-morph-styles;
			background: rgba(14, 14, 14, 1);
			width: calc(20% - 30px);
			height: 400px;
			right: 0;
			top: 0;
			bottom: 0;
			margin: calc($navbar-height + 20px) 20px 20px 10px;
			border-radius: 10px;
		}
	}

</style>