<script lang="ts">
	import Logos from '../../components/Logos.svelte';
	import Meta from '../../components/Meta.svelte';
	import Concept from '../../content/fr/Concept.svelte.md';
	import Programme from '../../content/fr/Programme.svelte.md';
	import Organisation from '../../content/fr/Organisation.svelte.md';
</script>

<Meta
	title={"Unconférence 'Critique numérique' | Du 21 octobre 2021 au 22 octobre 2021"}
	description={'TBD'}
/>

<header id="home">
	<nav>
		<a href="/fr"
			><img
				alt="Critique numérique"
				src="../images/digital-criticism-logo-text-and-graphics-dc.svg"
				width="100%"
			/></a
		>
		<ul>
			<li><a href="#concept" class="secondary-font">Concept</a></li>
			<li><a href="#programme" class="secondary-font">Programme</a></li>
			<li><a href="#organisation" class="secondary-font">Organisation</a></li>
			<li><a href="/">EN</a>|<a href="/de">DE</a></li>
		</ul>
	</nav>
	<h1>Unconférence 'Critique numérique'</h1>
	<p>
		<b>Du 21 octobre 2021 au 22 octobre 2021</b>
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
	<section><a href="#home" class="secondary-font">⇧ Retourner</a></section>
	<hr />
	<article id="programme">
		<header>
			<h2>Programme</h2>
		</header>
		<Programme />
	</article>
	<section><a href="#home" class="secondary-font">⇧ Retourner</a></section>
	<hr />
	<article id="organisation">
		<header>
			<h2>Organisation</h2>
		</header>
		<Organisation />
	</article>
	<section><a href="#home" class="secondary-font">⇧ Retourner</a></section>
	<hr />
</main>
<footer>
	<header>
		<h2>A propos de nous</h2>
	</header>
	<!-- <p>
		dhCenter UNIL-EPFL, Programme Doctoral en Études Numériques (PDEN), Digital Humanities at the.
		Walter Benjamin Kolleg of the University of Bern, infoclio.ch, Digital Humanities Lab University
		of Basel
	</p> -->
	<Logos />
	<h3>Contact</h3>
	<p><a href="mailto:info@critique-digitale.ch">info@critique-digitale.ch</a></p>
	<section><a href="#home" class="secondary-font">⇧ Back up</a></section>
</footer>
