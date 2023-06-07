<!-- ! NAVBAR -->

<nav class="Navbar">
  <div class="navbar-brand">
    <a href="/" class="logo-navbar-container">
      <img class="logo-navbar" src="icon-white.png" alt="Logo" />
      <span class="logo-navbar-text">Carlos Iborra</span>
    </a>
  </div>

  <div class="navbar-menu">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</nav>



<style lang="scss">

  // Import global styles  
  @import '../global.scss';

	// Acquire the glass morph effect from the global.scss file as a callable mixin
	@mixin glass-morph-styles {
		@each $property, $value in $color-primary-glass-morph {
			#{$property}: $value;
		}
	}

	.Navbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		// Align items to the left

		top: 0;
		left: 0;
		z-index: 10;
		position: fixed;

		height: $navbar-height;
		width: calc(100% - ($navbar-padding-left + $navbar-padding-right));
    padding: 0 $navbar-padding-right 0 $navbar-padding-left;

		@include glass-morph-styles;

		.logo-navbar-container {
      top: 0;
			left: 0;
			margin: 0;
			padding: 0;
			height: 100%;
			width: auto;
			display: flex;
			align-items: center;
      text-decoration: none;

			.logo-navbar {
				height: calc($navbar-height - 30px);
			}

      .logo-navbar-text {
        font-family: $font-primary;
        font-size: 2rem;
        margin: 0 20px 0 20px;
        color: $color-primary-light;

        &:hover {
          color: $color-secondary-light;
        }

        &:active {
          color: $color-text-active;
        }
      } 
		}

    .navbar-menu {
      ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        list-style: none; // Remove the bullets
        margin: 0;
        padding: 0;

        li {
          margin: 0;
          padding: 0;

          a {
            font-family: $font-primary;
            font-size: 1.5rem;
            color: $color-primary-light;
            text-decoration: none;
            padding: 0 10px;

            &:hover {
              color: $color-secondary-light;
              text-decoration: underline;
            }

            &:active {
              color: $color-text-active;
            }
          }
        }
      }
    }

	}
</style>
