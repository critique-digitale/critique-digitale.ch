<script>
	import About from '$lib/components/About.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import Concept from '$lib/content/Concept.svelte.md';
	import Programme from '$lib/content/Programme.svelte.md';
	import Organisation from '$lib/content/Organisation.svelte.md';
	import { base, assets } from '$app/paths';
</script>

<Meta
	title={"Unconference 'Digital Criticism' | October 21—22, 2021"}
	description={'Higher education research centres from all over Switzerland are joining forces to host the first unconference on ‘digital criticism’. Free of charge and open to all, this unique event will take place online-only the 21 and 22 October 2021.'}
/>

<header id="home">
	<nav>
		<a href={base}
			><img
				alt="Digital Criticism"
				src="{assets}/images/digital-criticism-logo-graphics-dc.svg"
				width="100%"
				height="100px"
			/></a
		>
		<ul>
			<li><a href="{base}#concept" class="secondary-font">Concept</a></li>
			<li><a href="{base}/#programme" class="secondary-font">Programme</a></li>
			<li><a href="{base}/#organisation" class="secondary-font">Organisation</a></li>
			<li>
				<a
					href="https://www.infoclio.ch/en/unconference-digital-critique-information-list-liste-dinformations-informationsliste"
					class="secondary-font">Registration</a
				>
			</li>
			<li><a href="{base}/de">DE</a>|<a href="/fr">FR</a></li>
		</ul>
	</nav>
	<img alt="Digital Criticism" src="{assets}/images/digital-criticism-logo-text.svg" width="100%" />
	<p>
		<b>Unconference October 21—22, 2021</b>
		<a href="https://infoclio.ch/de/event-ics/158787/event_158787.ics">📅</a>
	</p>
</header>
<main>
	<article id="concept">
		<header>
			<h2>Concept</h2>
		</header>
		<Concept />
	</article>
	<section><a href="{base}/#home" class="secondary-font">⇧ Back up</a></section>
	<hr />
	
	<article id="Report">
		<header>
			<h2>Report</h2>
		</header>
		<Report />
	</article>
	<section><a href="{base}/#home" class="secondary-font">⇧ Back up</a></section>
	<hr />
	
	
	<article id="programme">
		<header>
			<h2>Programme</h2>
		</header>
		<Programme />
	</article>
	<section><a href="{base}/#home" class="secondary-font">⇧ Back up</a></section>
	<hr />
	<article id="organisation">
		<header>
			<h2>Organisation</h2>
		</header>
		<Organisation />
	</article>
	<section><a href="{base}/#home" class="secondary-font">⇧ Back up</a></section>
	<hr />
</main>

<footer>
	<header>
		<h2>About us</h2>
	</header>
	<About />
	<h3>Contact</h3>
	<p><a href="mailto:info@critique-digitale.ch">info@critique-digitale.ch</a></p>
	<section><a href="{base}/#home" class="secondary-font">⇧ Back up</a></section>
</footer>
