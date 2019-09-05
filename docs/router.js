import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _0dc828d5 = () => interopDefault(import('../pages/alpha.vue' /* webpackChunkName: "pages/alpha" */))
const _cd6d966e = () => interopDefault(import('../pages/beta.vue' /* webpackChunkName: "pages/beta" */))
const _344e762f = () => interopDefault(import('../pages/delta.vue' /* webpackChunkName: "pages/delta" */))
const _8bf1adbe = () => interopDefault(import('../pages/epsilon.vue' /* webpackChunkName: "pages/epsilon" */))
const _277632c9 = () => interopDefault(import('../pages/eta.vue' /* webpackChunkName: "pages/eta" */))
const _7a8b5e9e = () => interopDefault(import('../pages/gamma.vue' /* webpackChunkName: "pages/gamma" */))
const _fd208128 = () => interopDefault(import('../pages/iota.vue' /* webpackChunkName: "pages/iota" */))
const _6f6e5642 = () => interopDefault(import('../pages/kappa.vue' /* webpackChunkName: "pages/kappa" */))
const _5e37a2e0 = () => interopDefault(import('../pages/lambda.vue' /* webpackChunkName: "pages/lambda" */))
const _3ded4e15 = () => interopDefault(import('../pages/theta.vue' /* webpackChunkName: "pages/theta" */))
const _566569b1 = () => interopDefault(import('../pages/zeta.vue' /* webpackChunkName: "pages/zeta" */))
const _0108c649 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/alpha",
      component: _0dc828d5,
      name: "alpha"
    }, {
      path: "/beta",
      component: _cd6d966e,
      name: "beta"
    }, {
      path: "/delta",
      component: _344e762f,
      name: "delta"
    }, {
      path: "/epsilon",
      component: _8bf1adbe,
      name: "epsilon"
    }, {
      path: "/eta",
      component: _277632c9,
      name: "eta"
    }, {
      path: "/gamma",
      component: _7a8b5e9e,
      name: "gamma"
    }, {
      path: "/iota",
      component: _fd208128,
      name: "iota"
    }, {
      path: "/kappa",
      component: _6f6e5642,
      name: "kappa"
    }, {
      path: "/lambda",
      component: _5e37a2e0,
      name: "lambda"
    }, {
      path: "/theta",
      component: _3ded4e15,
      name: "theta"
    }, {
      path: "/zeta",
      component: _566569b1,
      name: "zeta"
    }, {
      path: "/",
      component: _0108c649,
      name: "index"
    }],

    fallback: false
  })
}
