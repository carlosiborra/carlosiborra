<!-- ! FOOTER -->

<!-- ! ------------------------------------>

<footer class="footer">
	<div class="social-links">
		<a class="social-img" onclick="window.open('https://github.com/carlosiborra')">
			<img src="github.png" alt="github" /></a
		>
		<a class="social-img" onclick="window.open('https://www.linkedin.com/in/carlos-iborra')">
			<img src="linkedin.png" alt="linkedin" /></a
		>
		<a class="social-img" onclick="window.open('https://twitter.com/iboorraa')">
			<img src="twitter.png" alt="twitter" /></a
		>
	</div>
	<div class="footer-content">
		<p class="footer-content-text">Copyrigth © Carlos Iborra Llopis, 2023</p>
	</div>
</footer>

<!-- ! ------------------------------------>

<style lang="scss">
	// Import global styles
	@import '../global.scss';

	// Acquire the glass morph effect from the global.scss file as a callable mixin
	@mixin glass-morph-styles {
		@each $property, $value in $color-primary-glass-morph {
			#{$property}: $value;
		}
	}

	.footer {
		@include glass-morph-styles;
		color: $color-primary-light;
		// top: auto;
		margin-top: auto;
		position: relative;
		width: 100vw;
		height: 70px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		flex-direction: column;
	}

	.footer-content {
		width: 100%;
	}

	.footer-content-text {
		margin: 0;
		padding: 0;
		width: 100%;
		font-family: $font-primary;
		font-size: 75%;
		color: $color-primary-light-trans;
	}

	.social-links {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		gap: 20px;
		margin-bottom: 5px;
	}

	.social-img {
		cursor: pointer;
	}

	img {
		/* width: 10px; */
		height: 10px;
	}
</style>
