<!-- ! SCRIPT ------------------------------------------------------------------------------------->

<script lang="ts">
</script>

<!-- ! STRUCT ------------------------------------------------------------------------------------->

<nav class="Navbar">
	<div class="navbar-brand">
		<a href="/" class="logo-navbar-container">
			<img class="logo-navbar" src="icon-white-cream.png" alt="Logo" />
			<span class="logo-navbar-text"
				><span class="cream">C</span>arlos <span class="cream">I</span>borra</span
			>
		</a>
	</div>

	<div class="navbar-menu">
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/notes">Notes</a></li>
			<li><a href="/projects">Projects</a></li>
			<!-- <li><a href="/contact">Contact</a></li> -->
		</ul>
	</div>
</nav>

<!-- ! STYLE -------------------------------------------------------------------------------------->

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
		@include glass-morph-styles;

		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 1;

		top: 0;
		position: fixed;
		margin: 20px 20px 0 20px;

		height: $navbar-height - 20px;
		width: calc(100% - 40px - 30px);
		padding: 0 15px;

		background-color: $color-primary-trans;
		border-radius: 15px;

		font-family: $font-code;

		.logo-navbar-container {
			display: flex;
			align-items: center;
			text-decoration: none;

			height: 100%;
			width: 100%;

			top: 0;
			left: 0;
			margin: 0;
			padding: 0;

			.logo-navbar {
				height: calc($navbar-height - 30px - 20px);
				margin: 0 20px 0 0;
			}

			.logo-navbar-text {
				margin: 0 20px 0 0;
				font-size: 25px;
				color: $color-primary-light;
				white-space: nowrap;

				.cream {
					color: $color-text-cream;
				}

				&:hover {
					color: $color-secondary-light;
				}

				&:active {
					color: $color-text-active;
				}
			}

			@media (max-width: $breakpoint-mobile) {
				.logo-navbar-text {
					display: none;
				}
				.logo-navbar {
					margin: 0;
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
						// font-size: 100%;
						font-size: 15px;
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
			.navbar-menu {
				// font-size: 10px;
			}
		}
	}
</style>
