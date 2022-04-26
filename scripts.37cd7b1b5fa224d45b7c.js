/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


window.onload = function () {
  var stars = document.querySelector('#stars');
  var moon = document.querySelector('#moon');
  var mountains_back = document.querySelector('#mountains-back');
  var mountains_front = document.querySelector('#mountains-front');
  var text = document.querySelector('#text');
  var btn = document.querySelector('#btn');
  var header = document.querySelector('header');
  window.addEventListener('scroll', function () {
    var value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_back.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
  });
};
/******/ })()
;