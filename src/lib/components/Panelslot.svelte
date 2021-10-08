<script>
	export let panelslot = '1';
	let panels = [
		{
			slot: '1',
			title: 'This could be your topic!',
			room: 'https://bbb.ch-open.ch/b/mor-h4k-hun',
			pad: 'https://semestriel.framapad.org/p/cd_panel_1_subsession_1-9q5l?lang=en'
		},
		{
			slot: '1',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_1_subsession_2-9q5l?lang=en'
		},
		{
			slot: '1',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_1_subsession_3-9q5l?lang=en'
		},
		{
			slot: '1',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_1_subsession_4-9q5o?lang=en'
		},
		{
			slot: '1',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_1_subsession_5-9q5o?lang=en'
		},
		{
			slot: '2',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_2_subsession_1-9q5o?lang=en'
		},
		{
			slot: '2',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_2_subsession_2-9q5o?lang=en'
		},
		{
			slot: '2',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_2_subsession_3-9q5o?lang=en'
		},
		{
			slot: '2',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_2_subsession_4-9q5o?lang=en'
		},
		{
			slot: '2',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_2_subsession_5-9q5o?lang=en'
		},
		{
			slot: '3',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_3_subsession_1-9q5o?lang=en'
		},
		{
			slot: '3',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_3_subsession_2-9q5o?lang=en'
		},
		{
			slot: '3',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_3_subsession_3-9q5o?lang=en'
		},
		{
			slot: '3',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_3_subsession_4-9q5o?lang=en'
		},
		{
			slot: '3',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_3_subsession_5-9q5o?lang=en'
		},
		{
			slot: '4',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_4_subsession_1-9q5o?lang=en'
		},
		{
			slot: '4',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_4_subsession_2-9q5o?lang=en'
		},
		{
			slot: '4',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_4_subsession_3-9q5o?lang=en'
		},
		{
			slot: '4',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_4_subsession_4-9q5o?lang=en'
		},
		{
			slot: '4',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_4_subsession_5-9q5o?lang=en'
		},
		{
			slot: '5',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_5_subsession_1-9q5o?lang=en'
		},
		{
			slot: '5',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_5_subsession_2-9q5o?lang=en'
		},
		{
			slot: '5',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_5_subsession_3-9q5o?lang=en'
		},
		{
			slot: '5',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_5_subsession_4-9q5o?lang=en'
		},
		{
			slot: '5',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_5_subsession_5-9q5o?lang=en'
		}
	];
</script>

{#if panels.length > 0}
	{#each panels as { slot, title, room, pad }}
		{#if slot == panelslot && title != ''}
			<br /><a href={room}>{title}</a> <a href={pad}>📝 Etherpad</a>
		{/if}
	{/each}
{/if}
