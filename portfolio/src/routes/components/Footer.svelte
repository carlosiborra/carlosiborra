<!-- ! FOOTER -->

<footer class="footer">
  <div class="footer-content">
    <p class="footer-content-text">Carlos Iborra. All rights reserved.</p>
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
    // position: absolute;
    // position: relative;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;


    .footer-content {
      font-size: 14px;
      width: 100%;

      .footer-content-text {
        margin: 0;
        padding: 0;
        width: 100%;
        font-family: $font-primary;
      }
    }
  }

</style>
