<template lang="pug">
section.container
	div.ui.grid.middle.aligned
		.row
			.column
				img(src="../static/sulfuric-alchemy.svg" width="150px")
				h1.ui.huge.header
					| Semantic UI Nuxt
				h2.ui.large.header
					| Inexact Mu Units
				h2.ui.large.header
					| Tux Innate Music
				.ui.hidden.divider
				button.ui.button.active
					i.material-icons all_inclusive
					| &nbsp; Press Me
				button.ui.secondary.button
					i.material-icons directions_bike
					| &nbsp;&nbsp;Distress Me
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
