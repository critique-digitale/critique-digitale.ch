<script lang="ts">
	import Logos from '../components/Logos.svelte';
</script>

<header>
	<nav>
		<a href="https://critique-digitale.ch"
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
			<li>
				🌍
				<ul>
					<li><a href="/fr">🇫🇷</a></li>
					<li><a href="/de">🇩🇪</a></li>
				</ul>
			</li>
		</ul>
	</nav>
	<h1>Unconference 'Digital Criticism'</h1>
	<p>
		<b>October 21, 2021 to October 22, 2021</b>
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

		<h3>What is an unconference</h3>
		<p>bla</p>
	</article>
	<hr />
	<article id="program">
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
		<section>
			<form action="https://formspree.io/f/mqkwlowj" method="POST">
				<label>
					Name
					<input type="text" name="name" />
				</label>
				<label>
					Email address
					<input type="email" name="_replyto" />
				</label>
				<label>
					Suggested topic
					<textarea name="topic" />
				</label>
				<!-- your other form fields go here -->
				<button type="submit">submit</button>
			</form>
		</section>

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
	<hr />
</main>

<footer>
	<header>
		<h2>About us</h2>
	</header>
	<p>
		dhCenter UNIL-EPFL, Programme Doctoral en Études Numériques (PDEN), Digital Humanities at the.
		Walter Benjamin Kolleg of the University of Bern, infoclio.ch, Digital Humanities Lab University
		of Basel
	</p>
	<Logos />
	<h3>Contact</h3>
	<p>info@critique-digitale.ch</p>
</footer>
