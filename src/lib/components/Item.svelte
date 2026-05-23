<script>
    import { sanitizeUrl } from '$lib/security';

    export let item;
    const { title, url, notes } = item;
</script>

<article>
    <h3><a href={sanitizeUrl(url)}>{title}</a></h3>
    <div>{@html notes}</div>
</article>
