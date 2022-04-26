import './styles/index.pcss'

import './asset/images/stars2.png'

// ### #toggle-menu
window.onload = function () {
  let stars = document.querySelector('#stars')
  let moon = document.querySelector('#moon')
  let mountains_back = document.querySelector('#mountains-back')
  let mountains_front = document.querySelector('#mountains-front')
  let text = document.querySelector('#text')
  let btn = document.querySelector('#btn')
  let header = document.querySelector('header')

  window.addEventListener('scroll', function() {
    let value = window.scrollY

    stars.style.left = value * 0.25 + 'px'
    moon.style.top = value * 1.05 + 'px'
    mountains_back.style.top = value * 0.5 + 'px'
    mountains_front.style.top = value * 0 + 'px'
    text.style.marginRight = value * 4 + 'px'
    text.style.marginTop = value * 1.5 + 'px'
    btn.style.marginTop = value * 1.5 + 'px'
    header.style.top = value * 0.5 + 'px'
  })
}
