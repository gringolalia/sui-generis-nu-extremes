<template lang="pug">
div
	img(src="../static/sulfuric-alchemy.svg" width="100px")
	h1
		| I Untwist Tux Machine
	h2
		| Eta Trem Bão!
	.ui.hidden.divider
	button.ui.button.active
		i.material-icons all_inclusive
		| &nbsp; Alphabeta
	button.ui.secondary.button
		i.material-icons directions_bike
		| &nbsp;&nbsp;Gamma-Lama
	h2.ui.center.aligned.icon.header
		i.circular.sun.icon
		| Not Alpha But Eta
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
				{ rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }
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
