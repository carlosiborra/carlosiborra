<!-- ! SCRIPT ------------------------------------------------------------------------------------->

<script lang="ts">
	import { onMount } from 'svelte';

	let showLoading: boolean = true;
	// sessionStorage.setItem('showLoading', 'true');

	onMount(() => {
		setTimeout(() => {
			showLoading = false;
			// sessionStorage.setItem('showLoading', 'false');
		}, 2500);
	});
</script>

<!-- ! STRUCT ------------------------------------------------------------------------------------->

{#if showLoading === true}
	<div id="welcome-container">
		<div class="loading-name">
			&lt;<span style="color:#FFD84C">C</span>arlos&nbsp<span style="color:#FFD84C">I</span
			>borra&gt;
		</div>
		<div id="loader">
			<img src="img/icon-white-cream.png" alt="logo" class="loader-image" />
		</div>
	</div>
{:else}
	<div />
{/if}

<!-- ! STYLE -------------------------------------------------------------------------------------->

<style lang="scss">
	@import "static/styles/styles.scss";

	#welcome-container {
		position: fixed;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 50px;

		z-index: 100;
		width: calc(100% + 10px);
		height: 100%;

		font-family: Arial, sans-serif;
		color: $color-primary-light;
		background-color: $color-primary;

		font-family: $font-family-sans;

		// Do not permit the user to scroll the page while the loading screen is active
		overflow: hidden;
		animation: preloadImage 0s forwards; // Start loading the background image immediately

		#loader {
			// position: fixed;
			display: flex;
			justify-content: center;
			align-items: center;
			z-index: 110;

			justify-content: center;
			align-items: center;

			.loader-image {
				height: 60px;

				-webkit-animation: spin 3s linear infinite;
				-moz-animation: spin 3s linear infinite;
				animation:
					spin 3s linear infinite,
					pulse 0.8s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;

				@keyframes pulse {
					0% {
						opacity: 0;
					}

					50% {
						opacity: 1;
					}

					100% {
						opacity: 0;
					}
				}
			}
		}

		.loading-name {
			display: flex;

			z-index: 110;
			width: 15ch; // Number of characters
			animation:
				typing 2s steps(22),
				blink 0.5s step-end infinite alternate;

			white-space: nowrap;
			overflow: hidden;

			border-right: 12px solid $color-primary-light-trans;

			font-family: monospace;
			font-size: 30px;
			top: 35%;
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
	}
</style>
