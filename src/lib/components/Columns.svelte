<script>
    import Column from './Column.svelte';
    export let data;

    const COLUMNS = ["To Read", "Reading", "Read"];
</script>

<div class="columns">
    {#each COLUMNS as col (col)}
        <Column
            title={col}
            items={data.filter(({status}) => status.toLowerCase() === col.toLowerCase())}
        />
    {/each}
</div>

<style lang="scss">
    .columns {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        > :global(*) {
            padding: 0.5em;
            border-right: 1px solid black;
            > :global(article) {
                background: white;
                padding: 0 0.5em;
                margin-bottom: 0.5em;
                border: solid 1px;
                border-radius: 5px;
            }
        }
        > :global(:first-child) {
            background-color: rgb(227, 255, 227);
            > :global(article) {
                border-color: green;
            }
        }
        > :global(:nth-child(2)) {
            background-color: rgb(229, 229, 255);
            > :global(article) {
                border-color: rgb(157, 157, 255);
            }
        }
        > :global(:last-child) {
            background-color: rgb(224, 224, 224);
            border-right: none;
            > :global(article) {
                border-color: gray;
            }
        }
    }
</style>
