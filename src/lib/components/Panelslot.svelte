<script>
	export let panelslot = '1';
	let panels = [
		{
			panel: '1',
			subsession: '1',
			title: 'André Cardozo Sarli: Algorithms as normative tools',
			room: 'https://bbb.ch-open.ch/b/tob-lxf-ppk-8sa',
			pad: 'pads/cd_panel_1_subsession_1'
		},
		{
			panel: '1',
			subsession: '2',
			title:
				'Arjun Sanyal: Critical digital literacy in the libraries for persons from different socio-cultural milieux (empowerment)',
			room: 'https://bbb.ch-open.ch/b/tob-rz9-sw6-i8l',
			pad: 'pads/cd_panel_1_subsession_2'
		},
		{
			panel: '1',
			subsession: '3',
			title:
				'Victoria Fleury: Combining information from diverse collections and sources. Accessing visualizations',
			room: 'https://bbb.ch-open.ch/b/tob-7dh-dvk-fvc',
			pad: 'pads/cd_panel_1_subsession_3'
		},
		{
			panel: '1',
			subsession: '4',
			title: '',
			pad: 'pads/cd_panel_1_subsession_4'
		},
		{
			panel: '1',
			subsession: '5',
			title: '',
			pad: 'pads/cd_panel_1_subsession_5'
		},
		{
			panel: '2',
			subsession: '1',
			title: 'Enrico Natale: Essential readings on digital criticism',
			room: 'https://bbb.ch-open.ch/b/tob-lxf-ppk-8sa',
			pad: 'pads/cd_panel_2_subsession_1'
		},
		{
			panel: '2',
			subsession: '2',
			title: 'Laetitia Gern: Political discourse online on YouTube',
			room: 'https://bbb.ch-open.ch/b/tob-rz9-sw6-i8l',
			pad: 'pads/cd_panel_2_subsession_2'
		},
		{
			panel: '2',
			subsession: '3',
			title: 'Widmer & Schneider: Premodern data for NLP',
			room: 'https://bbb.ch-open.ch/b/tob-7dh-dvk-fvc',
			pad: 'pads/cd_panel_2_subsession_3'
		},
		{
			panel: '2',
			subssession: '4',
			title: '',
			pad: 'pads/cd_panel_2_subsession_4'
		},
		{
			panel: '2',
			subsession: '5',
			title: '',
			pad: 'pads/cd_panel_2_subsession_5'
		},
		{
			panel: '3',
			subsession: '1',
			title: 'Melanie Boehi: Transparency and democratizing archives by digitization',
			room: 'https://bbb.ch-open.ch/b/tob-lxf-ppk-8sa',
			pad: 'pads/cd_panel_3_subsession_1'
		},
		{
			panel: '3',
			subsession: '2',
			title:
				'Moritz Mähr: Micropublications (secure research data, do something participant driven, new ways for preprints)',
			room: 'https://bbb.ch-open.ch/b/tob-rz9-sw6-i8l',
			pad: 'pads/cd_panel_3_subsession_2'
		},
		{
			panel: '3',
			subsession: '3',
			title: 'Adrien Tournier: 5G - history of telecommunication',
			room: 'https://bbb.ch-open.ch/b/tob-7dh-dvk-fvc',
			pad: 'pads/cd_panel_3_subsession_3'
		},
		{
			panel: '3',
			subsession: '4',
			title: '',
			pad: 'pads/cd_panel_3_subsession_4'
		},
		{
			panel: '3',
			subsession: '5',
			title: '',
			pad: 'pads/cd_panel_3_subsession_5'
		},
		{
			panel: '4',
			subsession: '1',
			title: 'Geffroy Valérian: Non-uses of digital technology (unnecessary or unwanted tools)',
			room: 'https://bbb.ch-open.ch/b/tob-lxf-ppk-8sa',
			pad: 'pads/cd_panel_4_subsession_1'
		},
		{
			panel: '4',
			subession: '2',
			title: 'Elias Kreyenbühl: From papyri to photographs. Doing research with images.',
			room: 'https://bbb.ch-open.ch/b/tob-rz9-sw6-i8l',
			pad: 'pads/cd_panel_4_subsession_2'
		},
		{
			panel: '4',
			subession: '3',
			title: 'Tobias Hodel: DH Summerschool',
			room: 'https://bbb.ch-open.ch/b/tob-7dh-dvk-fvc',
			pad: 'pads/cd_panel_4_subsession_3'
		},
		{
			panel: '4',
			subession: '4',
			title: '',
			pad: 'pads/cd_panel_4_subsession_4'
		},
		{
			panel: '4',
			subession: '5',
			title: '',
			pad: 'pads/cd_panel_4_subsession_5'
		},
		{
			panel: '5',
			subsession: '1',
			title: 'Lorenz & Berg: Social Media as a source for research (ethical, technical, legal)',
			room: 'https://bbb.ch-open.ch/b/tob-lxf-ppk-8sa',
			pad: 'pads/cd_panel_5_subsession_1'
		},
		{
			panel: '5',
			subsession: '2',
			title: 'Isabelle Marthot-Santaniello: How much advertising for DH research while doing it?',
			room: 'https://bbb.ch-open.ch/b/tob-rz9-sw6-i8l',
			pad: 'pads/cd_panel_5_subsession_2'
		},
		{
			panel: '5',
			subsession: '3',
			title: 'Jennifer Rabe: Digital Selfcare tools and utilities',
			room: 'https://bbb.ch-open.ch/b/tob-7dh-dvk-fvc',
			pad: 'pads/cd_panel_5_subsession_3'
		},
		{
			panel: '5',
			subsession: '4',
			title: '',
			pad: 'pads/cd_panel_5_subsession_4'
		},
		{
			panel: '5',
			subsession: '5',
			title: '',
			pad: 'pads/cd_panel_5_subsession_5'
		}
	];
</script>

{#if panels.length > 0}
	{#each panels as { panel, title, pad }}
		{#if panel == panelslot && title != ''}
			<br />{title} <a href={pad}>📝 Etherpad</a>
		{/if}
	{/each}
{/if}

<style>
	a {
		color: darkslategray;
		font-size: 0.9em;
	}
</style>
