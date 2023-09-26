<script lang="ts">
	// import Balls from './components/Balls.svelte';
	import Welcome from './components/Welcome.svelte';
</script>

<!-- ! ------------------------------------>

<Welcome />
<body>
	<div class="background-image">
	<div class="content background-trans">
		<slot />
	</div>
</div>
</body>

<!-- ! ------------------------------------>

<style lang="scss">
	@import './global.scss';

	body {
		margin: 0;
		scroll-behavior: smooth;
		background-color: $color-primary;

		.background-image {
			background: radial-gradient(at 10% 61%, hsla(121, 78%, 71%, 1) 0px, transparent 30%),
				radial-gradient(at 1% 8%, rgb(132, 149, 2) 0px, transparent 40%),
				radial-gradient(at 92% 12%, rgb(147, 60, 175) 0px, transparent 30%),
				radial-gradient(at 31% 74%, rgb(212, 58, 155) 0px, transparent 40%),
				radial-gradient(at 31% 16%, rgb(72, 138, 213) 0px, transparent 40%),
				radial-gradient(at 88% 12%, rgb(125, 63, 63) 0px, transparent 50%),
				radial-gradient(at 95% 90%, rgb(62, 129, 25) 0px, transparent 40%);
			background-size: 130% 130%;

			-webkit-animation: background-image-animation 5s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
			-moz-animation: background-image-animation 5s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
			-o-animation: background-image-animation 5s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
			animation: background-image-animation 5s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
		}

		@-webkit-keyframes background-image-animation {
			0% {
				background-position: 0% 50%;
			}
			50% {
				background-position: 100% 50%;
			}
			100% {
				background-position: 0% 50%;
			}
		}
		@-moz-keyframes background-image-animation {
			0% {
				background-position: 0% 50%;
			}
			50% {
				background-position: 100% 50%;
			}
			100% {
				background-position: 0% 50%;
			}
		}
		@-o-keyframes background-image-animation {
			0% {
				background-position: 0% 50%;
			}
			50% {
				background-position: 100% 50%;
			}
			100% {
				background-position: 0% 50%;
			}
		}
		@keyframes background-image-animation {
			0% {
				background-position: 0% 50%;
			}
			50% {
				background-position: 100% 50%;
			}
			100% {
				background-position: 0% 50%;
			}
		}

		
		/* Make the scroll bar invisible */
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */

		&::-webkit-scrollbar {
			width: 0px;
			background: transparent; /* make scrollbar transparent */
		}

		border-color: #fff;
	}

	.background-trans {
		background: rgba(0, 0, 0, .6);
		position: relative;
		z-index: 0;
	}

	.content {
		position: relative;
		z-index: 1; /* Ensure content is positioned above the background images */
	}

	slot {
		display: none;
	}
</style>
