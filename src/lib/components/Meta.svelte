<script>
	export let title;
	export let description;
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
