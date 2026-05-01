<script>
    import Columns from '$lib/components/Columns.svelte';
    let { data } = $props();
</script>

<Columns data={data.data} />
