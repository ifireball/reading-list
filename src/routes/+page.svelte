<script>
    import Columns from '$lib/components/Columns.svelte';
    let { data } = $props();
</script>

<svelte:head>
    <title>My reading list</title>
    <meta name="description" content="Barak Korren's reading list" />
</svelte:head>

<Columns data={data.data} />
