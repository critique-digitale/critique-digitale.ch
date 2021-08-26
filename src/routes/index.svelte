<script lang="ts">
	import Logos from '../components/Logos.svelte';
</script>

<header>
	<nav>
		<a href="https://critique-digitale.ch"
			><img
				alt="Digital Criticism"
				src="images/digital-criticism-logo-text-and-graphics-dc.svg"
				height="70"
			/></a
		>
		<ul>
			<li><a href="#program">Program</a></li>
			<li><a href="#participate">Participate</a></li>
			<li><a href="#faq">FAQ</a></li>
			<li><a href="#about">About Us</a></li>
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
	<section id="unconference">
		<aside>
			<h3>Subject</h3>
			<p>
				The humanities and social sciences - especially in the fields of Digital Studies and Digital
				Humanities - have developed a methodological and critical reflection to analyze the "digital
				turn" and its impact on both research and society at large. However, exchange on these
				issues across disciplinary boundaries has remained limited.
			</p>
		</aside>
		<aside>
			<h3>Objective</h3>
			<p>
				The aim of the event, Unconference 'Digital Critique', is to invite academic as well as
				professional experts from various disciplines in the humanities, social and data sciences to
				spend two days discussing the challenges of digital criticism and new knowledge regimes of
				the 21st century.
			</p>
		</aside>
		<aside>
			<h3>Format</h3>
			<p>
				The format chosen is an online "unconference": a format that encourages informal exchange,
				participation and networking. The program of the day will be determined by the participants
				in attendance (see for instance the concept of BarCamp). Discussions will take place in
				parallel sessions and will be reported back in the form of collective reports. The
				"unconference" will take place on October 21 and 22, 2021.
			</p>
		</aside>
	</section>
	<hr />
	<article id="program">
		<header>
			<h2>Program</h2>
		</header>
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
	<article id="participate">
		<header>
			<h2>Participate</h2>
		</header>
		<h3>Subscribe</h3>
		<p>
			Register for free at this <a
				href="https://www.infoclio.ch/de/unconference-digital-critique-information-list-liste-dinformations-informationsliste"
				>link</a
			>.
		</p>
		<h3>Submit topic</h3>
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
	</article>
	<hr />
	<article id="faq">
		<header>
			<h2>Frequently Asked Questions</h2>
		</header>

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
	<article id="about">
		<header>
			<h2>About us</h2>
		</header>

		<h3>Committee</h3>
		<p>XYZ</p>
		<h3>Committee</h3>
		<p>
			dhCenter UNIL-EPFL, Programme Doctoral en Études Numériques (PDEN), Digital Humanities at the.
			Walter Benjamin Kolleg of the University of Bern, infoclio.ch, Digital Humanities Lab
			University of Basel
		</p>
	</article>
	<Logos />
</main>
