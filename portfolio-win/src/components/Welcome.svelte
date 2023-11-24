<!-- ! SCRIPT ------------------------------------------------------------------------------------->

<script lang="ts">
	import { onMount } from 'svelte';

	let showLoading: boolean = true;

	onMount(() => {
		setTimeout(() => {
			showLoading = false;
		}, 1000);
	});
</script>

<!-- ! STRUCT ------------------------------------------------------------------------------------->

{#if showLoading === true}
	<div id="welcome-container">
		<h2 class="loading-name">
			&lt;<span style="color:#FFD84C">C</span>arlos&nbsp<span style="color:#FFD84C">I</span
			>borra&gt;
		</h2>
		<div id="loader">
			<img src="img/icon-white-cream.png" alt="logo" class="loader-image" />
		</div>
	</div>
{:else}
	<div />
{/if}

<!-- ! STYLE -------------------------------------------------------------------------------------->

<style lang="scss">
	@import 'static/styles/styles.scss';

	#welcome-container {
		position: fixed;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: $separation-biggest;

		z-index: 100;
		width: 100%;
		height: 100%;

		color: $color-primary-light;
		background-color: $color-primary;

		font-family: $font-family-mono;

		animation: preloadImage 0s forwards; // Start loading the background image immediately

		#loader {
			display: flex;
			justify-content: center;
			align-items: center;

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
			width: 15ch; // Number of characters

			animation:
				typing 1s steps(22),
				blink 0.5s step-end infinite alternate;

			white-space: nowrap;
			overflow: hidden;

			border-right: 12px solid $color-primary-light-trans;

			font-family: $font-family-mono;
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
