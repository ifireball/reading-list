<script>
	let { children } = $props();
</script>

<svelte:head>
    <title>My reading list</title>
    <meta name="description" content="Barak Korren's reading list" />
</svelte:head>

<header class="header">
    <h1>My reading list</h1>
    <a href="https://github.com/ifireball/reading-list">
        <img
            src="/github-mark.svg"
            alt="GitHub"
            title="Fork me on GitHub"
            width={40}
            height={40}
        />
    </a>
</header>
<main class="main">
    {@render children()}
</main>
<footer class="footer">
    <p>Copyright &copy; <time>{new Date().getFullYear()}</time> Barak Korren.</p>
</footer>

<style lang="scss">
    :global(body) {
        background: black;
        margin: 0;
        display: grid;
        position: absolute;
        grid-template-rows: 1fr 8fr 1fr;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .header {
        background: white;
        overflow: hidden;
        position: relative;
        padding: 0 1em;
        > h1 {
            position: absolute;
            bottom: 0;
        }
        > a {
            position: absolute;
            bottom: 1em;
            right: 1em;
            > img {
                width: 3.5em;
                height: 3.5em;
            }
        }
    }
    .main {
        background: white;
        overflow: scroll;
        padding: 0 0.5em;
    }
    .footer {
        color: white;
        background: black;
        text-align: center;
        overflow: hidden;
        border-top: solid 0.5em white;
    }
</style>
