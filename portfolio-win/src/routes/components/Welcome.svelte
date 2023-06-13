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
	<!-- <div class="view-square" id="view-square-main">
		<div class="view-square" id="view-square-inner">
			<div class="view-square" id="view-square-inner-inner" />
		</div>
	</div> -->
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

	// .view-square {
	// 	position: fixed;
	// 	border: $welcome-square-border solid $color-primary-light-trans;
	// 	background-color: none;
	// 	z-index: 102;
	// 	border-radius: 10px;
	// 	// -webkit-animation: spin-cc 3s linear;
	// 	// -moz-animation: spin-cc 3s linear;
	// 	animation: spin-cc 3s linear, dissappear 3s normal;
	// 	top: $welcome-square-border;
	// 	left: $welcome-square-border;
	// 	height: calc(100vh - 32px);
	// 	width: calc(100vw - 32px);

	// 	#view-square-inner {
	// 		top: $welcome-square-border * 3;
	// 		left: $welcome-square-border * 3;
	// 		height: calc(100vh - 64px);
	// 		width: calc(100vw - 64px);

	// 		#view-square-inner-inner {
	// 			top: $welcome-square-border * 5;
	// 			left: $welcome-square-border * 5;
	// 			height: calc(100vh - 96px);
	// 			width: calc(100vw - 96px);
	// 		}
	// 	}

	// 	@-moz-keyframes spin-cc {
	// 		0% {
	// 			-moz-transform: rotate(0deg);
	// 		}
	// 		100% {
	// 			-moz-transform: rotate(-360deg);
	// 			transform: rotate(-360deg);
	// 		}
	// 	}

	// 	@-webkit-keyframes spin-cc {
	// 		0% {
	// 			-webkit-transform: rotate(0deg);
	// 		}
	// 		100% {
	// 			-moz-transform: rotate(-360deg);
	// 			transform: rotate(-360deg);
	// 		}
	// 	}

	// 	@keyframes spin-cc {
	// 		0% {
	// 			-webkit-transform: rotate(0deg);
	// 			transform: rotate(0deg);
	// 			border: $welcome-square-border solid $color-primary-light-trans;
	// 		}
	// 		100% {
	// 			-moz-transform: rotate(-360deg);
	// 			transform: rotate(-360deg);
	// 		}
	// 	}

	// 	@keyframes dissappear {
	// 		0% {
	// 			border-color: rgba(251, 251, 251, 0.05);
	// 		}
	// 		100% {
	// 			border-color: rgba(251, 251, 251, 0);
	// 		}
	// 	}

	// 	border-color: rgba(251, 251, 251, 0);

	// 	#view-square-inner {
	// 		border: $welcome-square-border solid $color-tertiary;
	// 	}
	// }

	// .ball-loader {
	// 	position: fixed;
	// 	width: 100px;
	// 	height: 100px;
	// 	border-radius: 50%;
	// 	filter: blur(200px);
	// 	z-index: 101;
	// 	background-color: none;
	// }

	// @keyframes move-slow {
	// 	0% {
	// 		transform: translate(0, 0);
	// 	}
	// 	50% {
	// 		transform: translate(10vw, 10vh);
	// 	}
	// 	100% {
	// 		transform: translate(0, 0);
	// 	}
	// }

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
		justify-content: center;
		align-items: center;
		height: 100vh; /* Set the loader container to the full viewport height */
	}

	.loader-image {
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 50%; /* Position the image at the vertical middle of the loader container */
		height: 60px;
		left: calc(
			50vw - 13px
		); /* Position the image at the horizontal middle of the loader container */
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
