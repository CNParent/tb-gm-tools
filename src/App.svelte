<script>
	import Library from './Library.svelte'
	import TableRepository from '../scripts/TableRepository.js'

	import { theme, setTheme } from './lib/styles.js'

	let tr = new TableRepository();
</script>

<svelte:head>
	{#if theme == 'dark'}
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/vinorodrigues/bootstrap-dark@0.6.1/dist/bootstrap-dark.min.css">
	{:else}
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
	{/if}
</svelte:head>

<main id="app">
	<div class="p-2">
		<div class="row">
			<div class="col">
				<h1>Table Roller</h1>
			</div>
		</div>
		<div class="position-topright m-3">
			{#if theme == 'dark'}
			<a href="#" on:click={() => setTheme('light')}>Light mode</a>
			{:else}
			<a href="#" on:click={() => setTheme('dark')}>Dark mode</a>
			{/if}
		</div>
		<hr />
		{#await tr.loadData()}
			Loading table data...
		{:then} 
			<Library tables={tr.tables} />
		{/await}
	</div>
</main>
