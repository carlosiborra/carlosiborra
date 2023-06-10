<!-- ! FOOTER -->

<footer class="footer">
	<div class="footer-content">
		<p class="footer-content-text">Copyrigth © Carlos Iborra Llopis, 2023</p>
	</div>
</footer>

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
  width: 100vw;
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.footer-content {
  font-size: 14px;
  width: 100vw;
}

.footer-content-text {
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: $font-primary;
  font-size: 0.5em;
  color: $color-secondary-light;
}

</style>
