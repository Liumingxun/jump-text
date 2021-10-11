import charming from 'charming';

function jump_text(elem, opt = {}) {
  charming(elem);
  let letters = elem.querySelectorAll('span');
  for (let i = 0; i < letters.length; i++) {
    let span = letters[i];
    span.className = 'jump';
    span.style.animationDelay = `${i * 50}ms`;
  }
}

export { jump_text as default };
