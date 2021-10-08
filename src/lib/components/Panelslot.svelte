<script>
	export let panelslot = '1';
	let panels = [
		{
			panel: '1',
			subsession: '1',
			title: 'This could be your topic!',
			room: 'https://bbb.ch-open.ch/b/mor-h4k-hun',
			pad: 'https://semestriel.framapad.org/p/cd_panel_1_subsession_1-9q5l?lang=en'
		},
		{
			panel: '1',
			subsession: '2',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_1_subsession_2-9q5l?lang=en'
		},
		{
			panel: '1',
			subsession: '3',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_1_subsession_3-9q5l?lang=en'
		},
		{
			panel: '1',
			subsession: '4',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_1_subsession_4-9q5o?lang=en'
		},
		{
			panel: '1',
			subsession: '5',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_1_subsession_5-9q5o?lang=en'
		},
		{
			panel: '2',
			subsession: '1',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_2_subsession_1-9q5o?lang=en'
		},
		{
			panel: '2',
			subsession: '2',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_2_subsession_2-9q5o?lang=en'
		},
		{
			panel: '2',
			subsession: '3',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_2_subsession_3-9q5o?lang=en'
		},
		{
			panel: '2',
			subssession: '4',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_2_subsession_4-9q5o?lang=en'
		},
		{
			panel: '2',
			subsession: '5',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_2_subsession_5-9q5o?lang=en'
		},
		{
			panel: '3',
			subsession: '1',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_3_subsession_1-9q5o?lang=en'
		},
		{
			panel: '3',
			subsession: '2',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_3_subsession_2-9q5o?lang=en'
		},
		{
			panel: '3',
			subsession: '3',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_3_subsession_3-9q5o?lang=en'
		},
		{
			panel: '3',
			subsession: '4',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_3_subsession_4-9q5o?lang=en'
		},
		{
			panel: '3',
			subsession: '5',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_3_subsession_5-9q5o?lang=en'
		},
		{
			panel: '4',
			subsession: '1',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_4_subsession_1-9q5o?lang=en'
		},
		{
			panel: '4',
			subession: '2',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_4_subsession_2-9q5o?lang=en'
		},
		{
			panel: '4',
			subession: '3',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_4_subsession_3-9q5o?lang=en'
		},
		{
			panel: '4',
			subession: '4',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_4_subsession_4-9q5o?lang=en'
		},
		{
			panel: '4',
			subession: '5',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_4_subsession_5-9q5o?lang=en'
		},
		{
			panel: '5',
			subsession: '1',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_5_subsession_1-9q5o?lang=en'
		},
		{
			panel: '5',
			subsession: '2',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_5_subsession_2-9q5o?lang=en'
		},
		{
			panel: '5',
			subsession: '3',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_5_subsession_3-9q5o?lang=en'
		},
		{
			panel: '5',
			subsession: '4',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_5_subsession_4-9q5o?lang=en'
		},
		{
			panel: '5',
			subsession: '5',
			title: '',
			room: '',
			pad: 'https://semestriel.framapad.org/p/cd_panel_5_subsession_5-9q5o?lang=en'
		}
	];
</script>

{#if panels.length > 0}
	{#each panels as { panel, title, room, pad }}
		{#if panel == panelslot && title != ''}
			<br /><a href={room}>{title}</a> <a href={pad}>📝 Etherpad</a>
		{/if}
	{/each}
{/if}
