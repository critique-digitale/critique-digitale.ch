<script>
	export let panelslot = '1';
	let panels = [
		{
			slot: '1',
			title: 'This could be your topic!',
			room: 'https://bbb.ch-open.ch/b/mor-h4k-hun',
			pad: 'https://annuel2.framapad.org/p/61kp8ko7ia-9q4d?lang=en'
		}
	];
</script>

{#if panels.length > 0}
	{#each panels as { slot, title, room, pad }}
		{#if slot == panelslot}
			<br /><a href={room}>{title}</a> <a href={pad}>📝 Etherpad</a>
		{/if}
	{/each}
{/if}
