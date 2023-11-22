<script>
	// console.log('page.svelte');
	import Navbar from '../components/common/Navbar.svelte';
	import Footer from '../components/common/Footer.svelte';
</script>

<div id="projects-container">
	<Navbar />
	<p class="loading-portfolio">Projects</p>
</div>
<Footer />

<style lang="scss">
	@import '../global.scss';

	.body {
		
	}

	#projects-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

</style>
