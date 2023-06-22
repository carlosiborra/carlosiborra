<script lang="ts">
	// import Balls from './components/Balls.svelte';
	import Welcome from './components/Welcome.svelte';
</script>

<!-- ! ------------------------------------>

<body>
	<div class="background-image">
		<div class="background-color"></div>
		<div class="content">
			<slot />
		</div>
	</div>
</body>

<!-- ! ------------------------------------>

<style lang="scss">
	@import './global.scss';

	html {
		scroll-behavior: smooth;
		margin: 0;
		background-color: rgb(255, 255, 255);
	}

	body {
		margin: 0;
		background-color: rgb(255, 255, 255);
		scroll-behavior: smooth;

		/* Make the scroll bar invisible */
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */

		&::-webkit-scrollbar {
			width: 0px;
			background: transparent; /* make scrollbar transparent */
		}

		border-color: #fff;
	}

	.background-image {
		position: relative;
		overflow: hidden;
	}

	.background-color {
		position: absolute;
		top: 50%;
		left: 0;
		width: 100%;
		height: 1px;
		background-color: rgb(255, 255, 255); /* Set your desired background color */
		transform: translateY(-50%);
	}

	.content {
		position: relative;
		z-index: 1; /* Ensure content is positioned above the background images */
	}

	.background-image::before,
	.background-image::after {
		content: "";
		position: absolute;
		width: 100%;
		height: 50%;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.background-image::before {
		top: 0;
		background-image: url('wireframe-top.jpg');
	}

	.background-image::after {
		bottom: 0;
		background-image: url('wireframe-bottom.jpg');
	}

	slot {
		display: none;
	}
</style>
