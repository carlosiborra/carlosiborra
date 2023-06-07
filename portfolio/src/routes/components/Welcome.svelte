<script lang="ts">
	import { onMount } from 'svelte';

	let showLoading: boolean = true;
  // sessionStorage.setItem('showLoading', 'true');

	onMount(() => {
		setTimeout(() => {
			showLoading = false;
      // sessionStorage.setItem('showLoading', 'false');
		}, 3000);
	});

</script>

{#if showLoading === true}
	<div class="welcome-container">
        <div class="loading-wrapper">
		    <div class="loading-name"><span style="color:#FFD84C">C</span>arlos <span style="color:#FFD84C">I</span>borra.</div>
        </div>
        <p class="loading-portfolio">Portfolio</p>
        <p class="loading-loading">Loading...</p>
	</div>
{:else}
	<!-- <div>
		<h1>Welcome to Carlos Iborra's Portfolio!</h1>
	</div> -->
{/if}

<style lang="scss">

    @import '../global.scss';
    
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
		font-size: 24px;
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
      /*This part is important for centering*/
      display: grid;
      place-items: center;
    }

    .loading-name {
      width: 14ch;  // Number of characters
      animation: typing 2s steps(22), blink .5s step-end infinite alternate;
      white-space: nowrap;
      overflow: hidden;
      border-right: 3px solid;
      font-family: monospace;
    //   font-size: 2em;
    }

    @keyframes typing {
      from {
        width: 0
      }
    }

    @keyframes blink {
      50% {
        border-color: transparent
      }
    }


</style>
