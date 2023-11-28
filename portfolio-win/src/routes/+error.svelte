<!-- ! SCRIPTS ------------------------------------------------------------------------------------>

<script lang="ts">
</script>

<!-- ! STRUCTURE ---------------------------------------------------------------------------------->

<title>Carlos Iborra | Portfolio</title>
<div id="container" class="home-page card-wrapper">
	<div class="left-card">
		<div id="wrapper">
			<div id="content">
				<div id="section1" class="section">
					<h1>Are you lost?</h1>
					<p>
						It seems like you've hit a route that doesn't exist. Try going back <a href="/">home</a
						>.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- ! STYLE -------------------------------------------------------------------------------------->

<style lang="scss">
	@import 'static/styles/styles.scss';

	@mixin glass-content-morph-background {
		@each $property, $value in $color-secondary-glass-morph-content {
			#{$property}: $value;
		}
	}

	#container {
		@media screen and (max-width: $breakpoint-mobile) {
			flex-direction: column;
			align-items: center;
		}

		@media screen and (min-width: $breakpoint-ultrawide) {
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}

		.left-card {
			display: flex;
			flex-direction: column;
			gap: $separation-big;

			background-color: none;

			@media screen and (max-width: $breakpoint-mobile) {
				flex-direction: column;
				align-items: center;
			}

			.left-card-heading {
				@include glass-content-morph-background;

				border-radius: $border-radius-big;
				z-index: 1;

				padding: $separation-small $separation-big;

				.title-holder {
					width: min-content;
					height: max-content;
					font-size: 100%;

					.title {
						font-family: $font-family-mono;
						color: $color-primary-light;
						font-size: 15px;

						width: min-content;
						max-width: min-content;
						height: min-content;

						border-right: 2px solid $color-primary-light;
						overflow: hidden;
						white-space: nowrap;

						animation:
							typewriter 5s steps(7) infinite,
							blinking-cursor 0.8s infinite;
						animation-fill-mode: forwards;
					}
				}

				@media screen and (max-width: $breakpoint-mobile) {
					width: calc(100% - $separation-big * 2);
				}
			}

			#content {
				background-color: none;
				display: flex;
				flex-direction: column;
				gap: $separation-big; /* Add a gap between sections */
				border-radius: 15px;
				z-index: 1;

				.section {
					@include glass-content-morph-background;
					border-radius: $border-radius-big;

					.section-wrapper {
						color: $color-primary-light;
						font-family: $font-family-sans;
						font-size: 14px;
						display: flex;
						flex-direction: column;

						padding: $separation-big;

						.section-content {
							// @include glass-content-morph-background;
							margin: 0;
							padding: $separation-big;
						}

						h2 {
							margin: 0 0 $separation-big 0;
							color: #ffd84c;
						}

						p {
							margin: 0;
						}
					}

					.github-stats {
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						align-items: left;
						flex-wrap: wrap;

						.img-fluid {
							// set max width of the image to the one on the div it is inside
							max-width: 100%;
							margin: 40px 0 0 0;
						}
					}
				}
			}
		}
	}

	@keyframes typewriter {
		0% {
			width: 0%;
		}
		25% {
			width: 60%;
		}
		48% {
			width: 70%;
		}
		50% {
			width: 70%;
		}
		55% {
			width: 70%;
		}
		75% {
			width: 60%;
		}
		85% {
			width: 30%;
		}
		100% {
			width: 0%;
		}
	}

	@keyframes blinking-cursor {
		from {
			border-color: transparent;
		}
		to {
			border-color: $color-primary-light;
		}
	}
</style>
