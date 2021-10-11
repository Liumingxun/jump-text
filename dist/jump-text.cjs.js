'use strict';

var charming = require('charming');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var charming__default = /*#__PURE__*/_interopDefaultLegacy(charming);

function jump_text(elem, opt = {}) {
  charming__default["default"](elem);
  let letters = elem.querySelectorAll('span');
  for (let i = 0; i < letters.length; i++) {
    let span = letters[i];
    span.className = 'jump';
    span.style.animationDelay = `${i * 50}ms`;
  }
}

module.exports = jump_text;
