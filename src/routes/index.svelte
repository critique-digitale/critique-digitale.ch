<script lang="ts">
	import Logos from '../components/Logos.svelte';
	let title = "Unconference 'Digital Criticism' | October 21—22, 2021";
	let description = 'TBD';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:image" content="https://critique-digitale.ch/android-chrome-512x512.png" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Critique Digitale" />
	<meta property="“og:description“" content={description} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="https://critique-digitale.ch/android-chrome-512x512.png" />
	<meta name="twitter:site" content="@CritiqueDigita1" />
</svelte:head>

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

		<h3>Intro & Goals</h3>
		<p>bla</p>

		<h3>What is an unconference</h3>
		<p>bla</p>
	</article>
	<section><a href="#home" class="secondary-font">⇧ Back up</a></section>
	<hr />
	<article id="programme">
		<header>
			<h2>Programme</h2>
		</header>

		<h3>Keynotes</h3>
		<p>bla</p>

		<h3>Programme</h3>
		<table>
			<thead>
				<tr>
					<th />
					<th>October 21</th>
					<th />
					<th>22 October</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>8:45</td>
					<td>Point A</td>
					<td />
					<td />
				</tr>
				<tr>
					<td>10:30</td>
					<td>XYZ</td>
					<td />
					<td />
				</tr>
			</tbody>
		</table>
	</article>
	<section><a href="#home" class="secondary-font">⇧ Back up</a></section>
	<hr />
	<article id="organisation">
		<header>
			<h2>Organisation</h2>
		</header>

		<h3>Registration</h3>
		<p>
			Register for free at this <a
				href="https://www.infoclio.ch/de/unconference-digital-critique-information-list-liste-dinformations-informationsliste"
				>link</a
			>.
		</p>

		<h3>Pitching & Voting Procedures</h3>
		<p>bla</p>

		<h3>Languages</h3>
		<p>bla</p>

		<h3>FAQ</h3>
		<details>
			<summary>Is this event free of charge?</summary>
			<p>Yes.</p>
		</details>
		<details>
			<summary>How do I register in Big Blue Button?</summary>
			<p>XYZ.</p>
		</details>
	</article>
	<section><a href="#home" class="secondary-font">⇧ Back up</a></section>
	<hr />
</main>

<footer>
	<header>
		<h2>About us</h2>
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
