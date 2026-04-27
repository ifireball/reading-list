<script>
    import Item from './Item.svelte';
    export let title;
    export let items;
</script>

<section class="root">
    <h2>{title}</h2>
    {#each items as item (item.key)}
        <Item {item} />
    {/each}
</section>
