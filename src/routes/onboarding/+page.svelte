<script>
	import { assets, base } from '$app/paths';
	import About from '$lib/components/About.svelte';
	import Videos from '$lib/components/Videos.svelte';
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
	<meta property="og:description" content={description} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="https://critique-digitale.ch/android-chrome-512x512.png" />
	<meta name="twitter:site" content="@CritiqueDigita1" />
</svelte:head>

<header id="home">
	<nav>
		<a href="{base}/">
			<picture>
				<img
					alt="Digital Criticism"
					src="{assets}/images/digital-criticism-logo-graphics-dc.svg"
					style="width: 100%; height: 100px;"
				/>
			</picture>
		</a>
		<ul>
			<li><a href="{base}#concept" class="secondary-font">Concept</a></li>
			<li><a href="{base}/#report" class="secondary-font">Report</a></li>
			<li><a href="{base}/#programme" class="secondary-font">Programme</a></li>
			<li><a href="{base}/#organisation" class="secondary-font">Organisation</a></li>
			<li>
				<a
					href="https://www.infoclio.ch/en/unconference-digital-critique-information-list-liste-dinformations-informationsliste"
					class="secondary-font">Registration</a
				>
			</li>
			<li><a href="{base}/de">DE</a>|<a href="/fr">FR</a></li>
		</ul>
	</nav>
	<picture>
		<img
			alt="Digital Criticism"
			src="{assets}/images/digital-criticism-logo-text.svg"
			style="width: 100%;"
		/>
	</picture>
	<p>
		<b>Unconference October 21—22, 2021</b>
		📅
	</p>
</header>

<main>
	<article id="onboarding">
		<header>
			<h2>Onboarding</h2>
		</header>

		<h3>TBD</h3>
		<Videos poster={assets + '/videos/speakers.png'} src={assets + '/videos/speakers.mp4'} />
	</article>
	<section><a href="#home" class="secondary-font">⇧ Back up</a></section>
	<hr />
</main>

<footer>
	<header>
		<h2>About us</h2>
	</header>
	<About />
	<h3>Contact</h3>
	<p><a href="mailto:info@critique-digitale.ch">info@critique-digitale.ch</a></p>
	<section><a href="#home" class="secondary-font">⇧ Back up</a></section>
</footer>
