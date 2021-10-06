<script lang="ts">
	import About from '../lib/components/About.svelte';
	import Videos from '../lib/components/Videos.svelte';
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
		<a href="/"
			><img
				alt="Digital Criticism"
				src="images/digital-criticism-logo-text-and-graphics-dc.svg"
				width="100%"
			/></a
		>
		<ul>
			<li><a href="/">Back</a>|<a href="/de">Zurück</a>|<a href="/fr">Retourner</a></li>
		</ul>
	</nav>
	<h1>Unconference 'Digital Criticism'</h1>
	<p>
		<b>October 21—22, 2021</b>
		<a href="https://infoclio.ch/de/event-ics/158787/event_158787.ics">📅</a>
	</p>
</header>
<main>
	<article id="onboarding">
		<header>
			<h2>Onboarding</h2>
		</header>

		<h3>TBD</h3>
		<Videos poster={'https://critique-digitale.ch/videos/speakers.png'} src={'https://critique-digitale.ch/videos/speakers.mp4'} />
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
