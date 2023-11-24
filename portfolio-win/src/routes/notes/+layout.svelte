<script>
	// console.log('page.svelte');
	import Navbar from '../../components/common/Navbar.svelte';
	import Footer from '../../components/common/Footer.svelte';
</script>

<div id="projects-container">
	<p class="loading-portfolio">Projects</p>
</div>

<style lang="scss">
	@import "static/styles/styles.scss";

	#projects-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

</style>
