<script>
    export let item;
    const { title, url, notes } = item;
</script>

<article>
    <h3><a href={url}>{title}</a></h3>
    <div>{@html notes}</div>
</article>
