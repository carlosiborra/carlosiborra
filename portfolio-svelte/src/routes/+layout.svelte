<script>
	import '../app.css';
	import Footer from '../components/common/Footer.svelte';
	import Navbar from '../components/common/Navbar.svelte';
</script>

<div class="flex flex-col gap-14 min-h-screen">
	<Navbar />
	<div class=" mt-32">
		<slot />
	</div>
  <!-- set footer to the end of the flex container -->
  <div class=" flex-auto">
	  <Footer /> 
  </div>
</div>
