// Load icons
const requireAll = (r) => r.keys().forEach(r)
requireAll(require.context('./icons', true, /\.svg$/))
import svg4everybody from 'svg4everybody'
import SvgUse from './js/svgUse'
import "./styles/icons.pcss"

import "./styles"

// Load modules

import Modals from "../app/js/modals";

// Load components
import "./components/button"
import "./components/header"
import "./components/timer"
import "./components/input"
import "./components/footer"
import "./components/news-card"
import "./components/checkbox"
import "./components/logo"
import "./components/_example"
import "./components/dropdown"

window.App = {
  debug: !!window.location.port,
}

window.svg4everybody = svg4everybody

document.addEventListener('DOMContentLoaded', () => {
  new SvgUse()

  App.Modals = new Modals()
})










