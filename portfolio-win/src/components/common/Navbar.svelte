<!-- ! SCRIPT ------------------------------------------------------------------------------------->

<script lang="ts">
</script>

<!-- ! STRUCT ------------------------------------------------------------------------------------->

<nav id="navbar">
	<!-- <div class="navbar-brand"> -->
	<a href="/" class="logo-navbar-container">
		<img class="logo-navbar" src="img/icon-white-cream.png" alt="Logo" />
		<span class="logo-navbar-text"
			><span class="cream">C</span>arlos <span class="cream">I</span>borra</span
		>
	</a>
	<!-- </div> -->

	<div class="navbar-menu">
		<a href="/"><h4>Home</h4></a>
		<a href="/notes"><h4>Notes</h4></a>
	</div>
</nav>

<!-- ! STYLE -------------------------------------------------------------------------------------->

<style lang="scss">
	@import 'static/styles/styles.scss';

	@mixin glass-morph-styles {
		@each $property, $value in $color-primary-glass-morph {
			#{$property}: $value;
		}
	}

	#navbar {
		@include glass-morph-styles;

		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 1;

		height: $height-navbar;
		width: calc(100% - $separation-big * 2 - $separation-big * 2);

		padding: 0 $separation-big 0 $separation-big;

		background-color: $color-primary-trans;
		border-radius: $border-radius-big;

		font-family: $font-family-mono;

		.logo-navbar-container {
			display: flex;
			align-items: center;
			text-decoration: none;
			gap: $separation-big;

			.logo-navbar {
				height: calc($height-navbar - $separation-medium-small * 2);
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
		}
		@media (max-width: $breakpoint-mobile) {
			.logo-navbar-text {
				display: none;
			}
			.logo-navbar {
				margin: 0;
			}
		}

		.navbar-menu {
			display: flex;
			align-items: center;
			gap: $separation-big;

			list-style-type: none;

			a {
				color: $color-primary-light;
				text-decoration: none;

				&:hover {
					color: $color-secondary-light;
					font-weight: bold;
					// text-decoration: underline;
				}

				&:active {
					color: $color-text-active;
				}
			}
		}
	}
</style>
