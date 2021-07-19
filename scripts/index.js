'use strict'

import {Page} from './page.js'
const page = new Page()

window.addEventListener("load", (event) => {
  document.documentElement.classList.remove('loading')
  // page.scrollToggle(document.body)
})

window.addEventListener("hashchange", (event) => {
  page.scrollToggle(document.body, true)
  page.scrollTopById(page.hash)
  page.reanimate(page.curtain)
})
