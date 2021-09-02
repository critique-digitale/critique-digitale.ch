<script lang="ts">
	import Logos from '../components/Logos.svelte';
	import Meta from '../components/Meta.svelte';
	import Videos from '../components/Videos.svelte';
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

		<h3>Intro & Objectifs</h3>
		<p>bla</p>

		<h3>Qu'est-ce qu'une unconference</h3>
		<p>bla</p>
	</article>
	<section><a href="#home" class="secondary-font">⇧ Retourner</a></section>
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
					<th>Le 21 octobre</th>
					<th />
					<th>22 octobre</th>
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
	<section><a href="#home" class="secondary-font">⇧ Retourner</a></section>
	<hr />
	<article id="organisation">
		<header>
			<h2>Organisation</h2>
		</header>

		<h3>Inscription</h3>
		<p>
			Inscrivez-vous gratuitement à cette <a
				href="https://www.infoclio.ch/de/unconference-digital-critique-information-list-liste-dinformations-informationsliste"
				>lien</a
			>.
		</p>

		<h3>Procédures de lancement et de vote</h3>
		<p>bla</p>

		<h3>Langues</h3>
		<p>bla</p>

		<h3>Frequently Asked Questions (Questions fréquemment posées)</h3>
		<details>
			<summary>Cet événement est-il gratuit</summary>.
			<p>Oui.</p>
		</details>
		<details>
			<summary>Comment s'inscrire au Big Blue Button ? </summary>.
			<Videos poster={'videos/participants.png'} src={'videos/participants.mp4'} />
		</details>
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
