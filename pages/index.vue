<template lang="pug">
section.container(style="margin-top: -5vh")
	div
		img(src="../static/sulfuric-alchemy.svg" width="100px")
		h1
			| To Nu Extremes
		h2
			| A Mexican Stunt
		h3
			| Semantic UI on Nuxt That Works?
		.ui.hidden.divider
		a.ui.button.active(href='beta')
			i.material-icons all_inclusive
			| &nbsp; Press Me
		a.ui.secondary.button(href='delta')
			i.material-icons directions_bike
			| &nbsp;&nbsp;Distress Me

		i.big.circular.jet.fighter.icon(href='/zeta' data-content='This news is important and should clearly not be ignored' data-variation='large' style="margin-left: 15px;")


		h2.ui.center.aligned.icon.header
			i.circular.coffee.icon
			| The Java Jive
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

	.container {
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

		body, html, .ui {
			font-family: 'News Cycle', sans-serif !important;
			font-weight: 300 !important;
			height: 100%;
		}

		h1, h2, h3, h4, h5, h6 {
			font-family: 'News Cycle', sans-serif !important;
			font-weight: 300 !important
		}

		.dignity {
			font-family: "News Cycle", sans-serif !important;
			font-weight: 300 !important;
		}

		.material-icons, .fa {
			vertical-align: middle;
		}

</style>
