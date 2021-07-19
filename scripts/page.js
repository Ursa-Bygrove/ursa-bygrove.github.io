'use strict'

export class Page {
  constructor() {
    this._curtain = document.getElementsByClassName("curtain")[0]
    this._modalPageIds = new Set(['privacy-policy', 'contact-us'])
  }

  get curtain() {
    return this._curtain
  }

  get modalPageIds() {
    return this._modalPageIds
  }

  get hash() {
    return window.location.hash.substring(1)
  }

  reanimate(element) {
    element.style.animation = 'none'  // Remove assigned animation
    element.focus()                   // Trigger reflow
    element.style.animation = null    // Inherit animation from parent
  }

  scrollToggle(element, skipToTheEnd = false) {
    if (this.modalPageIds.has(this.hash)) {
      element.classList.add('no-scroll')
    } else {
      element.classList.remove('no-scroll')
      skipToTheEnd && window.scrollTo(0, element.scrollHeight)
    }
  }

  scrollTopById(element_id) {
    const element = document.getElementById(element_id)
    if (element) { element.scrollTop = 0 }
  }
}
