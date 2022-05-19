<script>
	import '../css/bootstrap.min.css';
	import Library from './Library.svelte'
	import TableRepository from '../scripts/TableRepository.js'

	let tr = new TableRepository();
</script>

<svelte:head>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</svelte:head>

<main>
	<div class="p-1" id="${this.id}">
		<div class="row">
			<div class="col">
				<h1>Table Roller</h1>
			</div>
		</div>
		<hr />
		{#await tr.loadData()}
			Loading table data...
		{:then} 
			<Library tables={tr.tables} />
		{/await}
	</div>
</main>
