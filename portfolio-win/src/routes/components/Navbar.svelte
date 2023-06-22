<!-- ! NAVBAR -->

<script lang="ts">
 
</script>

<nav class="Navbar">
	<div class="navbar-brand">
		<a href="/" class="logo-navbar-container">
			<img class="logo-navbar" src="icon-white-cream.png" alt="Logo" />
			<span class="logo-navbar-text">Carlos Iborra</span>
		</a>
	</div>

	<div class="navbar-menu">
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/projects">Projects</a></li>
			<li><a href="/contact">Contact</a></li>
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

	html,
	body {
		border-color: #FFF;
	}

	.Navbar {
		@include glass-morph-styles;

		display: flex;
		align-items: center;
		justify-content: space-between;

		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;

		height: $navbar-height;
		width: calc(100% - ($navbar-padding-left + $navbar-padding-right));
		padding: 0 $navbar-padding-right 0 $navbar-padding-left;

		// add a shadow only at the bottom color white to make it look like a glass
		box-shadow: 0px 2px 10px -2px rgba(255, 255, 255, 1);

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
				margin: 0 20px 0 0;
			}

			.logo-navbar-text {
				font-family: $font-primary;
				font-size: 2rem;
				margin: 0 20px 0 0;
				color: $color-primary-light;
				white-space: nowrap;

				&:hover {
					color: $color-secondary-light;
				}

				&:active {
					color: $color-text-active;
				}

				@media (max-width: 600px) {
					display: none;
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
						font-size: 100%;
						color: $color-primary-light;
						text-decoration: none;
						padding: 0 10px;

						&:hover {
							color: $color-secondary-light;
							font-weight: bold;
							// text-decoration: underline;
						}

						&:active {
							color: $color-text-active;
						}

						// @media (max-width: 600px) {
						// 	font-size: 1.2rem;
						// }
					}
				}
			}
		}

		@media (max-width: 400px) {
			padding: 0 $navbar-padding-right + 7.5px 0 $navbar-padding-right + 7.5px;
      .navbar-menu {
        // font-size: 10px;
      }
		}
	}
</style>
