<script>
	import About from '$lib/components/About.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import Concept from '$lib/content/de/Concept.svelte.md';
	import Programme from '$lib/content/de/Programme.svelte.md';
	import Organisation from '$lib/content/de/Organisation.svelte.md';
	import { base, assets } from '$app/paths';
</script>

<Meta
	title={"Unconference 'Digitale Kritik' | 21. Oktober 2021 bis 22. Oktober 2021"}
	description={'Forscher*innen aus Schweizer Universitäten und wissenschaftlichen Institutionen laden alle Interessierten herzlich zur ersten Unkonferenz «Digitale Kritik» ein. Offen und ohne Teilnahmegebühren wird dieser einzigartige Anlass am 21. und 22. Oktober 2021 online durchgeführt.'}
/>

<header id="home">
	<nav>
		<a href="{base}/de"
			><img
				alt="Digital Criticism"
				src="{assets}/images/digital-criticism-logo-graphics-dc.svg"
				width="100%"
				height="100px"
			/></a
		>
		<ul>
			<li><a href="{base}/de/#concept" class="secondary-font">Konzept</a></li>
			<li><a href="{base}/de/#programme" class="secondary-font">Programm</a></li>
			<li><a href="{base}/de/#organisation" class="secondary-font">Organisation</a></li>
			<li>
				<a
					href="https://www.infoclio.ch/de/unconference-digital-critique-information-list-liste-dinformations-informationsliste"
					class="secondary-font">Registration</a
				>
			</li>
			<li><a href="{base}/">EN</a>|<a href="{base}/fr">FR</a></li>
		</ul>
	</nav>
	<img alt="Digital Criticism" src="{assets}/images/digital-criticism-logo-text.svg" width="100%" />
	<p>
		<b>Unconference vom 21. Oktober 2021 bis 22. Oktober 2021</b>
		<a href="https://infoclio.ch/de/event-ics/158787/event_158787.ics">📅</a>
	</p>
</header>

<main>
	<article id="concept">
		<header>
			<h2>Konzept</h2>
		</header>
		<Concept />
	</article>
	<section><a href="{base}/de/#home" class="secondary-font">⇧ Zurück</a></section>
	<hr />
	<article id="programme">
		<header>
			<h2>Programm</h2>
		</header>
		<Programme />
	</article>
	<section><a href="{base}/de/#home" class="secondary-font">⇧ Zurück</a></section>
	<hr />
	<article id="organisation">
		<header>
			<h2>Organisation</h2>
		</header>
		<Organisation />
	</article>
	<section><a href="{base}/de/#home" class="secondary-font">⇧ Zurück</a></section>
	<hr />
</main>

<footer>
	<header>
		<h2>Über uns</h2>
	</header>
	<About />
	<h3>Kontakt</h3>
	<p><a href="mailto:info@critique-digitale.ch">info@critique-digitale.ch</a></p>
	<section><a href="{base}/de/#home" class="secondary-font">⇧ Zurück</a></section>
</footer>
