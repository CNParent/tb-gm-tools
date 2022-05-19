<script>
    export let table;
    export let handleRoll;
</script>

<button class="btn btn-light border-dark m-1" on:click={() => handleRoll(table)}>{table.name}</button>
