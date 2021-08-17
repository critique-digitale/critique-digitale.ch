<script lang="ts">
	import Logos from '../components/Logos.svelte';
</script>

<header>
	<nav>
		<a href="https://critique-digitale.ch/fr"
			><img alt="Critique numérique" src="../favicon.png" height="70" /></a
		>
		<ul>
			<li><a href="#program">Programme</a></li>
			<li><a href="#participate">Participation</a></li>
			<li><a href="#faq">FAQ</a></li>
			<li><a href="#about">A propos de nous</a></li>
			<li>
				🌍
				<ul>
					<li><a href="/">🇬🇧</a></li>
					<li><a href="/de">🇩🇪</a></li>
				</ul>
			</li>
		</ul>
	</nav>
	<h1>Unconférence 'Critique numérique'</h1>
	<p>
		<b>Du 21 octobre 2021 au 22 octobre 2021</b>
		<a href="https://infoclio.ch/de/event-ics/158787/event_158787.ics">📅</a>
	</p>
</header>
<main>
	<section id="unconference">
		<aside>
			<h3>Sujet</h3>
			<p>
				Les sciences humaines et sociales - notamment au sein des ‘digital studies’ et des ‘digital
				humanities’ - développent une réflexion méthodologique et critique pour analyser le
				‘tournant numérique’ et en comprendre les implications, à la fois pour la recherche et pour
				la société dans son ensemble. Toutefois, l’échange sur ces questions au-delà des barrières
				disciplinaires est resté jusqu’ici limité.
			</p>
		</aside>
		<aside>
			<h3>Objectif</h3>
			<p>
				La manifestation, Unconference ‘Critique digitale’, s’adresse aux expert·e·s des mondes
				universitaires et professionnels des sciences humaines et sociales, ainsi que des sciences
				des données. L’objectif est d’échanger pendant deux jours sur les enjeux et les méthodes de
				la critique du numérique et les nouveaux régimes de savoir du XXIe siècle.
			</p>
		</aside>
		<aside>
			<h3>Format</h3>
			<p>
				Le format choisi est une « unconference » en ligne: un format de manifestation qui favorise
				les échanges informels, la participation et la mise en réseau. Les thèmes des différentes
				séances seront décidées par les participant.e.s en présence (voir par exemple le concept de
				BarCamp). Les discussions se dérouleront en sessions parallèles, et seront restituées sous
				la forme de comptes rendus collectifs.
			</p>
		</aside>
	</section>
	<hr />
	<article id="program">
		<header>
			<h2>Programme</h2>
		</header>
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
	<hr />
	<article id="participer">
		<header>
			<h2>Participer</h2>
		</header>
		<h3>S'inscrire</h3>
		<p>
			Inscrivez-vous gratuitement à cette <a
				href="https://www.infoclio.ch/de/unconference-digital-critique-information-list-liste-dinformations-informationsliste"
				>lien</a
			>.
		</p>
		<h3>Soumettre un sujet</h3>
		.
		<section>
			<form action="https://formspree.io/f/mqkwlowj" method="POST">
				<label>
					Nom
					<input type="text" name="name" />
				</label>
				<label>
					Adresse électronique
					<input type="email" name="_replyto" />
				</label>
				<label>
					Sujet suggéré
					<textarea name="topic" />
				</label>
				<!-- vos autres champs de formulaire vont ici -->
				<button type="submit">submit</button>
			</form>
		</section>
	</article>
	<hr />
	<article id="faq">
		<header>
			<h2>Frequently Asked Questions</h2>
			(Questions fréquemment posées)
		</header>

		<details>
			<summary>Cet événement est-il gratuit</summary>.
			<p>Oui.</p>
		</details>
		<details>
			<summary>Comment s'inscrire au Big Blue Button ? </summary>.
			<p>XYZ.</p>
		</details>
	</article>

	<hr />
	<article id="about">
		<header>
			<h2>A propos de nous</h2>
		</header>

		<h3>Comité</h3>
		<p>XYZ</p>
		<h3>Commission</h3>
		<p>
			dhCenter UNIL-EPFL, Programme Doctoral en Études Numériques (PDEN), Digital Humanities at the.
			Walter Benjamin Kolleg de l'université de Berne, infoclio.ch, Digital Humanities Lab
			université de. Bâle
		</p>
	</article>
	<Logos />
</main>
