<script lang="ts">
    import { page } from '$app/stores';
</script>

<h1>Trying to access something?<br>There is nothing here!</h1>
<h2></h2>
<h3>Error {$page.status}: {$page.error?.message}</h3>
<h4>Go back to <a href="/">Home</a></h4>
