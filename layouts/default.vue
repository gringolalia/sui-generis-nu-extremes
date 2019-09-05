<template lang="pug">
div
	.ui.secondary.menu(style="position: sticky; top: 0px; left: 0px; width: 100%; background-color: white")
		a.active.item(style="padding: 12px; font-size: 20px")
			i.big.settings.icon
			| Engenho Novo Ab Ovo

		a.item.computer.only(href="/gamma")
			| Crooklyn

		a.item.computer.only(href='/eta')
			| San Pavlov

		a.item.computer.only(href='/kappa')
			| Rio de Dinheiro

		.ui.dropdown.icon.item
			i.large.wrench.icon
			.menu
				.item
					i.dropdown.icon
					span.text North America
					.menu
						a.item(href='/beta') Canaderica
						a.item(href='/gamma') Amerexico
				.item
					i.dropdown.icon
					span.text South America
					.menu
						a.item(href='/iota') Brazentina
						a.item(href='/zeta') Uruparguayole
						a.item(href='/delta') Bolivenecuador
				.item
					i.dropdown.icon
					span.text East Asia
					.menu
						a.item(href='/alpha') Mongol Hordes
						a.item(href='/lambda') Good &amp; Evil Korea
						a.item(href='/theta') Godzilla Archipelago
				.item
					i.dropdown.icon
					span.text Eastern Europe
					.menu
						a.item(href='/zeta') So Be It Republicans
						a.item(href='/alpha') Polovakia
						a.item(href='/') Czech Please
				.item
					i.dropdown.icon
					span.text Western Europe
					.menu
						a.item(href='/beta') Uber Alles
						a.item(href='/theta') The Gay Marseilles
						a.item(href='/iota') Pass the Dutchie

				.item
					i.dropdown.icon
					span.text Antarctica
					.menu
						a.item(href='/epsilon') Proxima Centauri
						a.item(href='/iota') Dark Side of the Moon
						a.item(href='/zeta') Ice Station Zeta

				.item
					i.dropdown.icon
					span.text Godwanaland
					.menu
						a.item(href='/iota') Thunder Lizards
						a.item(href='/zeta') Alien Visitors
						a.item(href='/alpha') Garden of Eden



		script.
			$('.ui .dropdown').dropdown();

		.right.menu
			.item
				a.ui.icon.button(href="/")
					i.fas.fa-broadcast-tower

	.container
		nuxt
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
	head () {
		return {
			script: [
				{ src: 'https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.js' }
			],
			link: [
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons|News+Cycle' },
				{ rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
				{ rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.5.0/css/all.css' }
			]
		}
	}
}
</script>


<style>
html {
	font-family: 'News Cycle', -apple-system, BlinkMacSystemFont, 'Segoe UI',
		Roboto, 'Helvetica Neue', Arial, sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}
a:hover {
  background-color: #607d8b;
	color: white;
}

</style>
