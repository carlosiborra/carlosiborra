<!-- Importing Tailwind CSS -->
<script>
    import Navbar from '../components/Navbar.svelte';
</script>

<aside class="about">
    <h4>About</h4>
    <p>About?</p>
    
    <h4>Links</h4>
    
    <nav>
        <nav>
            <ul>
                <li>
                    <a href="/about/one">One</a>
                </li>
                <li>
                    <a href="/about/two">Two</a>
                </li>
            </ul>
        </nav>
    </nav>

</aside>


<!-- The <slot /> tag is used to define parts of content that will be filled later, in the parent component. -->
<main>
    <slot  />
    <Navbar />
</main>

<style>
    .about {
        background-color: #f1f1f1;
        padding: 20px;
        margin: 20px 0;
    }
</style>