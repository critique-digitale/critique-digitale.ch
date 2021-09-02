<script lang="ts">
	import Logos from '../components/Logos.svelte';
	import Meta from '../components/Meta.svelte';
	import Concept from '../content/Concept.svelte.md';
	import Programme from '../content/Programme.svelte.md';
	import Organisation from '../content/Organisation.svelte.md';
</script>

<Meta title={"Unconference 'Digital Criticism' | October 21—22, 2021"} description={'TBD'} />

<header id="home">
	<nav>
		<a href="/"
			><img
				alt="Digital Criticism"
				src="images/digital-criticism-logo-text-and-graphics-dc.svg"
				width="100%"
			/></a
		>
		<ul>
			<li><a href="#concept" class="secondary-font">Concept</a></li>
			<li><a href="#programme" class="secondary-font">Programme</a></li>
			<li><a href="#organisation" class="secondary-font">Organisation</a></li>
			<li><a href="/de">DE</a>|<a href="/fr">FR</a></li>
		</ul>
	</nav>
	<h1>Unconference 'Digital Criticism'</h1>
	<p>
		<b>October 21—22, 2021</b>
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
	<section><a href="#home" class="secondary-font">⇧ Back up</a></section>
	<hr />
	<article id="programme">
		<header>
			<h2>Programme</h2>
		</header>
		<Programme />
	</article>
	<section><a href="#home" class="secondary-font">⇧ Back up</a></section>
	<hr />
	<article id="organisation">
		<header>
			<h2>Organisation</h2>
		</header>
		<Organisation />
	</article>
	<section><a href="#home" class="secondary-font">⇧ Back up</a></section>
	<hr />
</main>

<footer>
	<header>
		<h2>About us</h2>
	</header>
	<Logos />
	<h3>Contact</h3>
	<p><a href="mailto:info@critique-digitale.ch">info@critique-digitale.ch</a></p>
	<section><a href="#home" class="secondary-font">⇧ Back up</a></section>
</footer>
