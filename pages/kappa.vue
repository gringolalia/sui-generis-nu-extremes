<template lang="pug">
div
	section.ui.text.container
		h1(style="margin-top: 10vh; margin-bottom: 40px") A Kappa Frappé
		img(src="../static/sulfuric-alchemy.svg" width="100px")
		h1
			| Not Material Design
		h2
			| Not Dingier Tamales
		.ui.hidden.divider
		button.ui.button.active
			i.material-icons all_inclusive
			| &nbsp; Ipanema
		button.ui.secondary.button
			i.material-icons directions_bike
			| &nbsp;&nbsp;Copacabana


		.ui.hidden.divider
		h2.ui.top.attached.center.aligned.icon.header
			i.circular.users.icon
			|  The Trinities File
		.ui.hidden.divider

		#context1
			.ui.secondary.menu
				a.item(data-tab='first') Stooges

				a.item.active(data-tab='second') The Trinity

				a.item(data-tab='third') Brothers Marx

			.ui.tab.segment(data-tab='first')
				.ui.top.attached.tabular.menu
					a.active.item(data-tab='first/a') Moe

					a.item(data-tab='first/b') Curly

					a.item(data-tab='first/c') Larry

				.ui.bottom.attached.active.tab.segment(data-tab='first/a') Spread Out!

				.ui.bottom.attached.tab.segment(data-tab='first/b') Whoop! Whoop!

				.ui.bottom.attached.tab.segment(data-tab='first/c') Why You!

			.ui.tab.segment.active(data-tab='second')
				.ui.top.attached.tabular.menu
					a.item(data-tab='second/a') Father
					a.item(data-tab='second/b') Son
					a.item.active(data-tab='second/c') Friendly Ghost

				.ui.bottom.attached.tab.segment(data-tab='second/a')
						.ui.large.icon.header
							i.fas.fa-star-and-crescent.fa-4x
							.content
								| Pater Noster Rollercoaster
				.ui.bottom.attached.tab.segment(data-tab='second/b')
						.ui.large.icon.header
							i.fas.fa-university.fa-4x
							.content
								| Here Comes the Son
				.ui.bottom.attached.tab.segment.active(data-tab='second/c')
						.ui.large.icon.header
							i.fas.fa-mosque.fa-4x
							.content
								| Wholly Mole Poblano

			.ui.tab.segment(data-tab='third')
				.ui.top.attached.tabular.menu
					a.item(data-tab='third/a') Harpo Marxism

					a.item(data-tab='third/b') Chicology

					a.item(data-tab='third/c') Grouchonomy

				.ui.bottom.attached.tab.segment(data-tab='third/a')
					i.fas.fa-archway.fa-5x

				.ui.bottom.attached.tab.segment(data-tab='third/b')
					i.fas.fa-university.fa-5x
				.ui.bottom.attached.tab.segment(data-tab='third/c')
					i.fas.fa-torii-gate.fa-5x
		.ui.divider
		#context2
			.ui.secondary.menu
				a.item(data-tab='fourth') Jimi Hendrix

				a.item.active(data-tab='fifth') Noel Redding

				a.item(data-tab='sixth') Mitch Mitchell

			.ui.left.aligned.tab.segment(data-tab='fourth')
				i.fas.fa-archway.fa-2x.fa-pull-left
				| Vιμ νο vολθπτθα αππελλαντθρ ρεπρεηενδθντ. Ατ δθισ απεριαμ vολθπταρια μεα. Ιδ αλιι δεβιτισ περφεcτο περ, vισ ετ δεcορε ορνατθσ σαλθτανδι. Νο φεθγιατ σινγθλισ λαβοραμθσ εοσ, εοσ μεντιτθμ παρτιενδο εξ, μει ιδqθε σενσεριτ αν.

			.ui.left.aligned.active.tab.segment(data-tab='fifth')
				i.fas.fa-torii-gate.fa-2x.fa-pull-left
				|  Vιμ νο vολθπτθα αππελλαντθρ ρεπρεηενδθντ. Ατ δθισ απεριαμ vολθπταρια μεα. Ιδ αλιι δεβιτισ περφεcτο περ, vισ ετ δεcορε ορνατθσ σαλθτανδι. Νο φεθγιατ σινγθλισ λαβοραμθσ εοσ, εοσ μεντιτθμ παρτιενδο εξ, μει ιδqθε σενσεριτ αν.

			.ui.left.aligned.tab.segment(data-tab='sixth')
				i.fas.fa-star-and-crescent.fa-2x.fa-pull-left
				| I had to break up the band. Vιμ νο vολθπτθα αππελλαντθρ ρεπρεηενδθντ. Ατ δθισ απεριαμ vολθπταρια μεα. Ιδ αλιι δεβιτισ περφεcτο περ, vισ ετ δεcορε ορνατθσ σαλθτανδι. Νο φεθγιατ σινγθλισ λαβοραμθσ εοσ, εοσ μεντιτθμ παρτιενδο εξ, μει ιδqθε σενσεριτ αν.

		script.
			$(document).ready(function(){
			$('#context1 .menu .item')
			.tab({
			context: $('#context1')
			})
			;
			$('#context2 .menu .item')
			.tab({
			context: 'parent'
			})
			;
			});


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
