<script lang="ts">
	// import Balls from './components/Balls.svelte';
	import Welcome from './components/Welcome.svelte';
</script>

<!-- ! ------------------------------------>

<Welcome />
<body>
	<div class="content">
		<slot />
	</div>
</body>

<!-- ! ------------------------------------>

<style lang="scss">
	@import './global.scss';

	body {
		margin: 0;
		background-color: #000000;
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

	.content {
		position: relative;
		z-index: 1; /* Ensure content is positioned above the background images */
	}

	slot {
		display: none;
	}

</style>
