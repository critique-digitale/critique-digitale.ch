<script lang="ts">
	import Logos from '../components/Logos.svelte';
	let title = "Unconference 'Digitale Kritik' | 21. Oktober 2021 bis 22. Oktober 2021";
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
		<a href="/de"
			><img
				alt="Digitale Kritik"
				src="../images/digital-criticism-logo-text-and-graphics-dc.svg"
				width="100%"
			/></a
		>
		<ul>
			<li><a href="#concept" class="secondary-font">Konzept</a></li>
			<li><a href="#programme" class="secondary-font">Programm</a></li>
			<li><a href="#organisation" class="secondary-font">Organisation</a></li>
			<li><a href="/">EN</a>|<a href="/fr">FR</a></li>
		</ul>
	</nav>
	<h1>Unconference 'Digitale Kritik'</h1>
	<p>
		<b>21. Oktober 2021 bis 22. Oktober 2021</b>
		<a href="https://infoclio.ch/de/event-ics/158787/event_158787.ics">📅</a>
	</p>
</header>

<main>
	<article id="concept">
		<header>
			<h2>Konzept</h2>
		</header>

		<h3>Intro & Zielsetzung</h3>
		<p>bla</p>

		<h3>Was ist eine unconference</h3>
		<p>bla</p>
	</article>
	<section><a href="#home" class="secondary-font">⇧ Zurück</a></section>
	<hr />
	<article id="programme">
		<header>
			<h2>Programm</h2>
		</header>

		<h3>Keynotes</h3>
		<p>bla</p>

		<h3>Programm</h3>
		<table>
			<thead>
				<tr>
					<th />
					<th>21. Oktober</th>
					<th />
					<th>22. Oktober</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>08:45</td>
					<td
						>On-boarding BigBlueButton
						<br />Provided by <a href="https://www.ch-open.ch/">CH-Open</a>
					</td>
					<td />
					<td />
				</tr>
				<tr>
					<td>09:30</td>
					<td>Introduction by the Organizers &amp; welcome by Dr. Markus Zürcher</td>
					<td />
					<td />
				</tr>

				<tr>
					<td>10:00</td>
					<td><a href="LINK-TO-HOWTO__#pitching">Pitching-Session</a></td>
					<td />
					<td />
				</tr>

				<tr>
					<td>11:00</td>
					<td
						>Keynote by <a href="LINK-TO-KEYNOTE1">Nathalie Pignard Cheynel</a>
						<br />Voting in progress
					</td>
					<td />
					<td />
				</tr>
				<tr>
					<td>12:00</td>
					<td>Presentation of program &amp; lunch break</td>
					<td />
					<td />
				</tr>
				<tr>
					<td>13:30</td>
					<td>Panels I</td>
					<td />
					<td />
				</tr>
				<tr>
					<td>14:15</td>
					<td>Chat-roulette &amp; break</td>
					<td />
					<td />
				</tr>
				<tr>
					<td>15:00</td>
					<td>Panels II</td>
					<td />
					<td />
				</tr>

				<tr>
					<td>15:45</td>
					<td>Panels III</td>
					<td />
					<td />
				</tr>

				<tr>
					<td>16:30</td>
					<td>Break</td>
					<td />
					<td />
				</tr>

				<tr>
					<td>17:00</td>
					<td>Keynote by <a href="LINK-TO-KEYNOTE2">Mar Hicks</a></td>
					<td />
					<td />
				</tr>
			</tbody>
		</table>
	</article>
	<section><a href="#home" class="secondary-font">⇧ Zurück</a></section>
	<hr />
	<article id="organisation">
		<header>
			<h2>Organisation</h2>
		</header>

		<h3>Anmeldung</h3>
		<p>
			Kostenlose Anmeldung unter diesem <a
				href="https://www.infoclio.ch/de/unconference-digital-critique-information-list-liste-dinformations-informationsliste"
				>Link</a
			>.
		</p>

		<h3>Pitching & Abstimmungsprozeduren</h3>
		<p>bla</p>

		<h3>Languages</h3>
		<p>bla</p>

		<h3>FAQ</h3>
		<details>
			<summary>Ist diese Veranstaltung kostenlos?</summary>
			<p>Ja.</p>
		</details>
		<details>
			<summary>Wie melde ich mich in Big Blue Button an?</summary>
			<p>XYZ.</p>
		</details>
	</article>
	<section><a href="#home" class="secondary-font">⇧ Zurück</a></section>
	<hr />
</main>

<footer>
	<header>
		<h2>Über uns</h2>
	</header>
	<!-- <p>
		dhCenter UNIL-EPFL, Programme Doctoral en Études Numériques (PDEN), Digital Humanities at the.
		Walter Benjamin Kolleg of the University of Bern, infoclio.ch, Digital Humanities Lab University
		of Basel
	</p> -->
	<Logos />
	<h3>Kontakt</h3>
	<p><a href="mailto:info@critique-digitale.ch">info@critique-digitale.ch</a></p>
	<section><a href="#home" class="secondary-font">⇧ Zurück</a></section>
</footer>
