<script>
	import About from '$lib/components/About.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import Concept from '$lib/content/fr/Concept.svelte.md';
	import Programme from '$lib/content/fr/Programme.svelte.md';
	import Organisation from '$lib/content/fr/Organisation.svelte.md';
	import { base, assets } from '$app/paths';
</script>

<Meta
	title={"Unconférence 'Critique numérique' | Du 21 octobre 2021 au 22 octobre 2021"}
	description={"Des centres de recherche de toute la Suisse s'associent pour organiser la première unconference sur la “Critique digitale”. Gratuit et ouvert à toutes et à tous, cet événement unique aura lieu en ligne uniquement les 21 et 22 octobre 2021."}
/>

<header id="home">
	<nav>
		<a href="{base}/fr"
			><img
				alt="Digital Criticism"
				src="{assets}/images/digital-criticism-logo-graphics-dc.svg"
				width="100%"
				height="100px"
			/></a
		>
		<ul>
			<li><a href="{base}/fr/#concept" class="secondary-font">Concept</a></li>
			<li><a href="{base}/fr/#programme" class="secondary-font">Programme</a></li>
			<li><a href="{base}/fr/#organisation" class="secondary-font">Organisation</a></li>
			<li>
				<a
					href="https://www.infoclio.ch/fr/unconference-digital-critique-information-list-liste-dinformations-informationsliste"
					class="secondary-font">Registration</a
				>
			</li>
			<li><a href="{base}/">EN</a>|<a href="{base}/de">DE</a></li>
		</ul>
	</nav>
	<img alt="Digital Criticism" src="{assets}/images/digital-criticism-logo-text.svg" width="100%" />
	<p>
		<b>Unconférence du 21 octobre 2021 au 22 octobre 2021</b>
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
	<section><a href="{base}/fr/#home" class="secondary-font">⇧ Retourner</a></section>
	<hr />
	<article id="programme">
		<header>
			<h2>Programme</h2>
		</header>
		<Programme />
	</article>
	<section><a href="{base}/fr/#home" class="secondary-font">⇧ Retourner</a></section>
	<hr />
	<article id="organisation">
		<header>
			<h2>Organisation</h2>
		</header>
		<Organisation />
	</article>
	<section><a href="{base}/fr/#home" class="secondary-font">⇧ Retourner</a></section>
	<hr />
</main>
<footer>
	<header>
		<h2>A propos de nous</h2>
	</header>
	<About />
	<h3>Contact</h3>
	<p><a href="mailto:info@critique-digitale.ch">info@critique-digitale.ch</a></p>
	<section><a href="{base}/fr/#home" class="secondary-font">⇧ Back up</a></section>
</footer>
