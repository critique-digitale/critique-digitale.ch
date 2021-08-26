<script lang="ts">
	import Logos from '../components/Logos.svelte';
</script>

<header>
	<nav>
		<a href="https://critique-digitale.ch/de"
			><img
				alt="Digitale Kritik"
				src="../images/digital-criticism-logo-text-and-graphics-dc.svg"
				height="70"
			/></a
		>
		<ul>
			<li><a href="#program">Programm</a></li>
			<li><a href="#participate">Teilnehmen</a></li>
			<li><a href="#faq">FAQ</a></li>
			<li><a href="#about">Über uns</a></li>
			<li>
				🌍
				<ul>
					<li><a href="/">🇬🇧</a></li>
					<li><a href="/fr">🇫🇷</a></li>
				</ul>
			</li>
		</ul>
	</nav>
	<h1>Unconference 'Digitale Kritik'</h1>
	<p>
		<b>21. Oktober 2021 bis 22. Oktober 2021</b>
		<a href="https://infoclio.ch/de/event-ics/158787/event_158787.ics">📅</a>
	</p>
</header>
<main>
	<section id="unconference">
		<aside>
			<h3>Thema</h3>
			<p>
				Die Geistes- und Sozialwissenschaften - insbesondere in den Bereichen Digital Studies und
				Digital Humanities - haben eine methodische und kritische Reflexion entwickelt, um den
				"digital turn" zu analysieren und seine Auswirkungen sowohl auf die Forschung als auch auf
				die Gesellschaft als Ganzes zu untersuchen. Der Austausch über disziplinäre Grenzen hinweg
				zu diesen Themen ist jedoch bisher begrenzt geblieben.
			</p>
		</aside>
		<aside>
			<h3>Ziel</h3>
			<p>
				Ziel der Veranstaltung Unconference 'Digitale Kritik', ist es, akademische wie auch
				fachliche Expert*innen verschiedener geistes- und sozialwissenschaftlicher Disziplinen sowie
				aus den Data Science einzuladen, um sich zwei Tage lang dem digitalen Wandel und den neuen
				Wissensregimen des 21. Jahrhunderts kritisch anzunehmen.
			</p>
		</aside>
		<aside>
			<h3>Format</h3>
			<p>
				Das gewählte Format ist eine Online-"Unconference": ein Format, das den informellen
				Austausch, Partizipation und Vernetzung fördert. Das Programm des Tages wird von den
				anwesenden Teilnehmer*innen bestimmt (siehe beispielsweise: BarCamp). Die Diskussionen
				finden in parallelen Sitzungen statt und werden in Form von Sammelberichten zurückgemeldet.
			</p>
		</aside>
	</section>
	<hr />
	<article id="program">
		<header>
			<h2>Programm</h2>
		</header>

		<!-- Probably better to create two tables (for each day) -->

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
	<hr />
	<article id="participate">
		<header>
			<h2>Mitmachen</h2>
		</header>
		<h3>Anmelden</h3>
		<p>
			Kostenlose Anmeldung unter diesem <a
				href="https://www.infoclio.ch/de/unconference-digital-critique-information-list-liste-dinformations-informationsliste"
				>Link</a
			>.
		</p>
		<h3>Thema einreichen</h3>
		<section>
			<form action="https://formspree.io/f/mqkwlowj" method="POST">
				<label>
					Name
					<input type="text" name="name" />
				</label>
				<label>
					E-Mailadresse
					<input type="email" name="_replyto" />
				</label>
				<label>
					Themenvorschlag
					<textarea name="topic" />
				</label>
				<!-- your other form fields go here -->
				<button type="submit">abschicken</button>
			</form>
		</section>
	</article>
	<hr />
	<article id="faq">
		<header>
			<h2>Frequently Asked Questions</h2>
		</header>

		<details>
			<summary>Ist diese Veranstaltung kostenlos?</summary>
			<p>Ja.</p>
		</details>
		<details>
			<summary>Wie melde ich mich in Big Blue Button an?</summary>
			<p>XYZ.</p>
		</details>
	</article>

	<hr />
	<article id="about">
		<header>
			<h2>Über uns</h2>
		</header>

		<h3>Komitee</h3>
		<p>XYZ</p>
		<h3>Trägerschaft</h3>
		<p>
			dhCenter UNIL-EPFL, Programme Doctoral en Études Numériques (PDEN), Digital Humanities am
			Walter Benjamin Kolleg der Universität Bern, infoclio.ch, Digital Humanities Lab Universität
			Basel
		</p>
	</article>
	<Logos />
</main>
