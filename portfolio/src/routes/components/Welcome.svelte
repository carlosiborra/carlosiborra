<script lang="ts">
	import { onMount } from 'svelte';

	let showLoading: boolean = true;
	// sessionStorage.setItem('showLoading', 'true');

	onMount(() => {
		setTimeout(() => {
			showLoading = false;
			// sessionStorage.setItem('showLoading', 'false');
		}, 3000);
		let document = window.document;
		let balls = document.querySelectorAll('.ball-loader');

		balls.forEach((ball) => {
			let randomX = Math.floor(Math.random() * 80);
			let randomY = Math.floor(Math.random() * 80);
			ball.style.left = `${randomX}%`;
			ball.style.top = `${randomY}%`;
			ball.style.backgroundColor = `rgba(255, 255, 255, ${Math.random() + 0.1})`;
			ball.style.transform = `scale(${Math.random()})`;
			// ball.style.animation = `move-slow ${Math.random() + 1}s infinite`;
		});
	});
</script>

{#if showLoading === true}
	<!-- <div class="ball-loader"></div>
	<div class="ball-loader"></div>
	<div class="ball-loader"></div>
	<div class="ball-loader"></div>
	<div class="ball-loader"></div>
	<div class="ball-loader"></div>
	<div class="ball-loader"></div>
	<div class="ball-loader"></div>
	<div class="ball-loader"></div> -->
	<div class="view-square" id="view-square-main">
		<div class="view-square" id="view-square-inner">
			<div class="view-square" id="view-square-inner-inner" />
		</div>
	</div>
	<div class="loader">
		<img src="icon-white-cream.png" alt="logo" class="loader-image" />
	</div>
	<div class="welcome-container">
		<div class="loading-wrapper">
			<div class="loading-name">
				&lt;<span style="color:#FFD84C">C</span>arlos <span style="color:#FFD84C">I</span>borra&gt;
			</div>
		</div>
	</div>
{:else}
	<div />
{/if}

<style lang="scss">
	@import '../global.scss';

	.view-square {
		position: fixed;
		top: $welcome-square-border * 2;
		left: $welcome-square-border * 2;
		height: calc(100vh - ($welcome-square-border * 4));
		width: calc(100vw - ($welcome-square-border * 4));
		border: $welcome-square-border solid $color-primary-light-trans;
		background-color: none;
		z-index: 102;
		border-radius: 10px;
		/* Just two rotations to make it look like it's spinning */
		-webkit-animation: spin-cc 3s linear;
		-moz-animation: spin-cc 3s linear;
		animation: spin-cc 3s linear, dissappear 3s normal;

		#view-square-inner {
			position: fixed;
			top: $welcome-square-border * 2 + 2;
			left: $welcome-square-border * 2 + 2;
			height: calc(100vh - ($welcome-square-border * 4) - $welcome-square-border * 2 - 8px);
			width: calc(100vw - ($welcome-square-border * 4) - $welcome-square-border * 2 - 8px);

			#view-square-inner-inner {
				position: fixed;
				top: $welcome-square-border * 2 + 4;
				left: $welcome-square-border * 2 + 4;
				height: calc(100vh - ($welcome-square-border * 4) - $welcome-square-border * 4 - 16px);
				width: calc(100vw - ($welcome-square-border * 4) - $welcome-square-border * 4 - 16px);
			}
		}

		@-moz-keyframes spin-cc {
			0% {
				-moz-transform: rotate(0deg);
			}
			100% {
				-moz-transform: rotate(-360deg);
				transform: rotate(-360deg);
			}
		}

		@-webkit-keyframes spin-cc {
			0% {
				-webkit-transform: rotate(0deg);
			}
			100% {
				-moz-transform: rotate(-360deg);
				transform: rotate(-360deg);
			}
		}

		@keyframes spin-cc {
			0% {
				-webkit-transform: rotate(0deg);
				transform: rotate(0deg);
				border: $welcome-square-border solid $color-primary-light-trans;
			}
			100% {
				-moz-transform: rotate(-360deg);
				transform: rotate(-360deg);
			}
		}

		@keyframes dissappear {
			0% {
				border-color: rgba(251, 251, 251, 0.05);
			}
			100% {
				border-color: rgba(251, 251, 251, 0);
			}
		}

		border-color: rgba(251, 251, 251, 0);

		#view-square-inner {
			border: $welcome-square-border solid $color-tertiary;
		}
	}

	.ball-loader {
		position: fixed;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		filter: blur(200px);
		z-index: 101;
		background-color: none;
	}

	@keyframes move-slow {
		0% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(10vw, 10vh);
		}
		100% {
			transform: translate(0, 0);
		}
	}

	.welcome-container {
		position: fixed;
		top: 0;
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
		justify-content: center;
		align-items: center;
		font-family: Arial, sans-serif;
		color: $color-primary-light;
		background-color: $color-primary;
		z-index: 100;

		font-family: $font-primary;

		// Do not permit the user to scroll the page while the loading screen is active
		overflow: hidden;
	}

	.loading {
		animation: pulse 1s infinite;
	}

	@keyframes pulse {
		0% {
			opacity: 0.4;
		}

		50% {
			opacity: 1;
		}

		100% {
			opacity: 0.4;
		}
	}

	.loading-wrapper {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		z-index: 110;
	}

	.loading-name {
		position: fixed;
		width: 15ch; // Number of characters
		animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
		white-space: nowrap;
		overflow: hidden;
		border-right: 3px solid;
		font-family: monospace;
		font-size: 30px;
		top: 35%;
		// left: 31vw;
		z-index: 110;
	}

	@keyframes typing {
		from {
			width: 0;
		}
	}

	@keyframes blink {
		50% {
			border-color: transparent;
		}
	}

	// ! Loading animation for the logo

	.loader {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.loader-image {
		position: fixed;
		bottom: 45%;
		height: 60px;
		-webkit-animation: spin 3s linear infinite;
		-moz-animation: spin 3s linear infinite;
		animation: spin 3s linear infinite, pulse 0.8s ease-in-out infinite;
		z-index: 110;
	}
	@-moz-keyframes spin {
		100% {
			-moz-transform: rotate(360deg);
		}
	}
	@-webkit-keyframes spin {
		100% {
			-webkit-transform: rotate(360deg);
		}
	}
	@keyframes spin {
		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
</style>
